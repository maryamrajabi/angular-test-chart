import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {DatePickerModule} from "./shared/components/date-picker/date-picker.module";
import {HseMatSelectSearchModule} from "./shared/components/hse-mat-select-search/hse-mat-select-search.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {HighchartsChartModule} from "highcharts-angular";
import {HichartComponent} from "@app/shared/components/hichart/hichart.component";

@NgModule({
  declarations: [
    AppComponent,
    HichartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    DatePickerModule,
    HseMatSelectSearchModule,
    FlexLayoutModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
