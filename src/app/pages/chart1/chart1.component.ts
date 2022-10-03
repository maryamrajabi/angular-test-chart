import {Component, OnInit} from '@angular/core';
// @ts-ignore
import dataFirst from '../../data/Data1.json';
// @ts-ignore
import dateSecond from '../../data/Data2.json';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss']
})
export class Chart1Component implements OnInit {

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
