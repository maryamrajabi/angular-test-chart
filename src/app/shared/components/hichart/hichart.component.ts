import {Component, Input, OnInit} from '@angular/core';
import Highcharts from 'highcharts';

// Load the Grouped Cateogries module
import GroupedCategories from 'highcharts-grouped-categories/grouped-categories';
// import value from "*.json";
// Initialize Grouped Cateogries module
GroupedCategories(Highcharts);

@Component({
  selector: 'app-hichart',
  templateUrl: './hichart.component.html',
  styleUrls: ['./hichart.component.scss'],

})
export class HichartComponent implements OnInit {

  _data;
  @Input() set data(value) {
    this._data = value;
    const dataFirst = this._data[0].data.map(item => item.value);
    this.linechart.series[0].data = dataFirst;
    const dataSecond = this._data[1].data.filter(item => item.name === 'ارفع').map(item => item.value);
    const dataThird = this._data[1].data.filter(item => item.name === 'اخابر').map(item => item.value);
    this.linechart.series[1].data = dataSecond;
    this.linechart.series[2].data = dataThird;

    this.linechart = JSON.parse(JSON.stringify(this.linechart))
  }

  Highcharts = Highcharts;
  linechart: any = {
    series: [{
      type: 'column',
      name: 'درآمد عملیاتی',
      data: [3, 2, 1, 3, 4, 3, 2, 1, 3, 4, 12]
    }, {
      type: 'spline',
      name: 'حاشیه سود عملیاتی - ارفع',
      data: [2, 3, 5, 7, 6, 2, 3, 5, 7, 6, 12]
    },
      {
        type: 'spline',
        name: 'حاشیه سود عملیاتی - اخابر',
        data: [3, 2.67, 3, 6.33, 3.33, 3, 2.67, 3, 6.33, 3.33, 7]
      }],
    chart: {},
    title: {
      text: '',
    },
    tooltip: {
      shared: true
    },
    xAxis: {
      categories: [
        {
          name: "1395 Q4",
          categories: [
            {
              name: "ارفع",
            },
            {
              name: "اخابر",
            }
          ]
        },
        {
          name: "1396 Q4",
          categories: [
            {
              name: "ارفع",
            },
            {
              name: "اخابر",
            }
          ]
        },
        {
          name: "1397 Q4",
          categories: [
            {
              name: "ارفع",
            },
            {
              name: "اخابر",
            }
          ]
        },
        {
          name: "1398 Q4",
          categories: [
            {
              name: "ارفع",
            },
            {
              name: "اخابر",
            }
          ]
        },
        {
          name: "1399 Q4",
          categories: [
            {
              name: "ارفع",
            },
            {
              name: "اخابر",
            }
          ]
        },
        {
          name: "1400 Q4",
          categories: [
            {
              name: "ارفع",
            },
            {
              name: "اخابر",
            }
          ]
        }
      ]
    },
    yAxis: [{
      title: {
        text: 'م ریال'
      },
      labels: {
        format: '{value} M'
      },
    },
      {
        title: {
          text: 'درصد'
        },
        minPadding: 0,
        maxPadding: 0,
        max: 100,
        min: 0,
        opposite: true,
        labels: {
          format: "{value}%"
        }
      }]
  };

  ngOnInit(): void {
    const dataFirst = this._data[0].data.map(item => item.value);
    this.linechart.series[0].data = dataFirst;

    const dataSecond = this._data[1].data.filter(item => item.name === 'ارفع').map(item => item.value);
    const dataThird = this._data[1].data.filter(item => item.name === 'اخابر').map(item => item.value);
    this.linechart.series[1].data = dataSecond;
    this.linechart.series[2].data = dataThird;
  }
}
