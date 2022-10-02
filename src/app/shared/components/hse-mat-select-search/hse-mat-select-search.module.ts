import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HseMatSelectSearchComponent} from './hse-mat-select-search.component';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {FlexModule} from '@angular/flex-layout';
import {MultipleSelectionSelectAllComponent} from './02-multiple-selection-select-all/multiple-selection-select-all.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    HseMatSelectSearchComponent,
    MultipleSelectionSelectAllComponent,
  ],
  exports: [
    HseMatSelectSearchComponent,
    MultipleSelectionSelectAllComponent
  ],
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    ReactiveFormsModule,
    CommonModule,
    MatSlideToggleModule,
    MatIconModule,
    FlexModule,
    MatChipsModule
  ]
})
export class HseMatSelectSearchModule {
}
