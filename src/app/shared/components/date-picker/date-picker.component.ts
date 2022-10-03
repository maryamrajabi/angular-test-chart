import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatDatepicker} from "@angular/material/datepicker";
import moment from "jalali-moment";

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent {

  @Input() label: string = '';
  date = new FormControl(moment());
  @Input() appearance: string = 'outline';

  setYear(normalizedMonthAndYear: any, datepicker: MatDatepicker<any>) {
    const ctrlValue = this.date.value!;
    ctrlValue.jYear(normalizedMonthAndYear.jYear());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }
}

