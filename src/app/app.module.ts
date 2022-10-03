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
import { Chart1Component } from './pages/chart1/chart1.component';
import { Chart2Component } from './pages/chart2/chart2.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    HichartComponent,
    Chart1Component,
    Chart2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    DatePickerModule,
    HseMatSelectSearchModule,
    FlexLayoutModule,
    HighchartsChartModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
