import {
  AfterViewInit,
  Component,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
  EventEmitter
} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { debounceTime, delay, filter, map, take, takeUntil, tap } from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'hse-multiple-selection-select-all',
  templateUrl: './multiple-selection-select-all.component.html',
  styleUrls: ['./multiple-selection-select-all.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultipleSelectionSelectAllComponent),
      multi: true
    }
  ]
})
export class MultipleSelectionSelectAllComponent implements OnInit, AfterViewInit, OnDestroy {

  /** control for the selected option for multi-selection */
  @Input() formControl: FormControl = new FormControl();

  /** control for filter for server side. */
  public optionServerSideFilteringCtrl: FormControl = new FormControl();
  /** list of banks filtered after simulating server side search */
  public filteredServerSideOptions: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  @Input() fontSizePx: string = '14';
  @Input() conditionalNumber: number = 1;
  @Input() name: string = 'test';
  @Input() label: string = '';
  @Input() appearance: string = 'outline';
  @Input() labelColor: string = '#484848';
  @Input() borderDefaultColor: string = '#DCDCDC';
  @Input() borderSelectColor: string = '#A8A8A8';
  @Input() borderSuccessColor: string = ''; // '#69ccc1';
  @Input() borderErrorColor: string = '#f44336';
  @Input() borderWidthPx: string = '1';
  @Input() required: boolean = false;
  @Input() withLabel: boolean = true;
  @Input() placeholder: string = '';
  @Input() options: any[] = [{ value: 0, text: 'مخابرات ایران' }, { value: 1, text: 'آهن و فولاد' }, { value: 2, text: 'مس' }, { value: 3, text: 'نفت و گاز' }];
  @Input() showUnderlineErrorContainer: boolean = true;
  @Input() isDisabled: any = false;
  @Input() errorMessages: { [key: string]: string } = {};
  @Input() errorMessageString: string = '';
  @Input() matSelectValue: any;
  @Input() setDefaultValueSelected: any = [{ value: 0, text: 'مخابرات ایران' }];
  @Output() selectData: EventEmitter<any> = new EventEmitter();
  public tooltipMessage = 'انتخاب همه / عدم انتخاب همه';

  /** indicate search operation is in progress */
  public searching = false;

  /** total number of available entries */
  public allOptionsSize;

  /** control for the MatSelect filter keyword multi-selection */
  public optionMultiFilterCtrl: FormControl = new FormControl();

  /** list of options filtered by search keyword */
  public filteredOptionsMulti: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  /** local copy of filtered options to help set the toggle all checkbox state */
  protected filteredOptionsCache: any[] = [];

  /** flags to set the toggle all checkbox state */
  isIndeterminate = false;
  isChecked = false;

  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();


  constructor(
    private _renderer: Renderer2,
  ) {
  }

  writeValue(obj: any): void {
    this.matSelectValue = obj;
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
    this.onMatOpenedChange = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onMatSelectChange(event: any): void {
    this.selectData.emit({ selected: this.formControl.value });
  }

  onMatOpenedChange(event: any): void {

  }

  getErrorMessages(errors: any): any {

    return this.errorMessages[Object.keys(errors)[0]];
  }

  onToppingRemoved(topping: any): void {
    topping.show = false;
    const toppings = this.formControl.value as string[];
    this.removeFirst(toppings, topping);
    this.formControl.setValue(toppings); // To trigger change detection
    this.selectData.emit({ removed: topping });
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  ngAfterViewInit(): void {
    this.setInitialValue();
    this.formControl.setValue(this.setDefaultValueSelected);

    let element = document.querySelector('.' + this.name + ' .mat-form-field-appearance-outline .mat-form-field-outline');
    this._renderer.setStyle(element, 'color', this.borderDefaultColor);

    element = document.querySelector('.' + this.name + ' .mat-form-field-appearance-outline .mat-form-field-outline-thick');
    this._renderer.setStyle(element, 'color', this.borderDefaultColor);

    let elements = document.querySelectorAll('.' + this.name + ' .mat-form-field-flex .mat-form-field-outline *');
    elements.forEach((elem) => {
      this._renderer.setStyle(elem, 'border-width', this.borderWidthPx + 'px');
    });

    element = document.querySelector('.' + this.name + ' mat-select .mat-select-placeholder');
    this._renderer.setStyle(element, 'color', this.labelColor);

    element = document.querySelector('.' + this.name + ' .mat-form-field-wrapper');
    !this.showUnderlineErrorContainer && this._renderer.setStyle(element, 'padding-bottom', '0px');
  }

  ngOnInit(): void {
    // set initial selection
    this.formControl.setValue(this.setDefaultValueSelected);

    // load the initial option list
    this.filteredOptionsMulti.next(this.options?.slice());
    this.filteredOptionsMulti.subscribe(data => {

      this.selectData.emit({ options: data });
    });
    // listen for search field value changes
    this.optionMultiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterOptionsMulti();
        this.setToggleAllCheckboxState();
      });

    // listen for multi select field value changes
    this.formControl.valueChanges
      .pipe(takeUntil(this._onDestroy)).subscribe(() => {
        this.setToggleAllCheckboxState();
      });

    // listen for search field value changes
    this.optionServerSideFilteringCtrl.valueChanges
      .pipe(
        filter(search => !!search),
        tap(() => this.searching = true),
        takeUntil(this._onDestroy),
        debounceTime(200),
        map(search => {
          if (!this.options) {
            return [];
          }

          // simulate server fetching and filtering data
          return this.options.filter(option => option.text.toLowerCase().indexOf(search) > -1);
        }),
        delay(500),
        takeUntil(this._onDestroy)
      )
      .subscribe(filteredBanks => {
        this.searching = false;
        this.filteredServerSideOptions.next(filteredBanks);
      },
        error => {
          // no errors in our simulated example
          this.searching = false;
          // handle error...
        });
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  toggleSelectAll(selectAllValue: boolean): void {
    this.filteredOptionsMulti.pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(val => {
        if (selectAllValue) {
          this.formControl.patchValue(val);
        } else {
          this.formControl.patchValue([]);
        }
      });
    this.selectData.emit({ selected: this.formControl.value });
  }

  /**
   * Sets the initial value after the filteredOptions are loaded initially
   */
  protected setInitialValue(): void {
    this.allOptionsSize = this.options?.length;

    this.filteredOptionsMulti
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredOptions are loaded initially
        // and after the mat-option elements are available
        this.multiSelect.compareWith = (a: any, b: any) => a && b && a.value === b.value;
      });
  }

  protected filterOptionsMulti(): void {
    if (!this.options) {
      return;
    }
    // get the search keyword
    let search = this.optionMultiFilterCtrl.value;
    if (!search) {
      this.filteredOptionsCache = this.options?.slice();
      this.filteredOptionsMulti.next(this.filteredOptionsCache);
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the options
    this.filteredOptionsCache = this.options.filter(option => option.text.toLowerCase().indexOf(search) > -1);
    this.filteredOptionsMulti.next(this.filteredOptionsCache);
  }

  protected setToggleAllCheckboxState(): void {
    let filteredLength = 0;
    if (this.formControl && this.formControl.value) {
      this.filteredOptionsCache.forEach(el => {
        if (this.formControl.value.indexOf(el) > -1) {
          filteredLength++;
        }
      });
      this.isIndeterminate = filteredLength > 0 && filteredLength < this.filteredOptionsCache.length;
      this.isChecked = filteredLength > 0 && filteredLength === this.filteredOptionsCache.length;
    }
  }

}
