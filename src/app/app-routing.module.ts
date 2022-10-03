import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Chart1Component} from "@app/pages/chart1/chart1.component";
import {Chart2Component} from "@app/pages/chart2/chart2.component";

const routes: Routes = [
  {
    path: '',
    component: Chart1Component
  },
  {
    path: 'another-page',
    component: Chart2Component
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
