import { Component, OnInit } from '@angular/core';
import dataFirst from "@app/data/Data1.json";
import dateSecond from "@app/data/Data2.json";

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.scss']
})
export class Chart2Component implements OnInit {

  direction = 'rtl';
  data;
  public dataFirstList:[] = dataFirst;
  public dateSecondList:[] = dateSecond;

  constructor() {
  }

  ngOnInit(): void {
    this.data = this.dataFirstList;
  }


  getData(e) {
    if (e.selected.length > 1) {
      this.data = this.dateSecondList;
    } else {
      this.data = this.dataFirstList;
    }
  }


}
