import { Component } from '@angular/core';
import * as Highcharts from "highcharts";

@Component({
  selector: 'app-hichart',
  templateUrl: './hichart.component.html',
  styleUrls: ['./hichart.component.scss'],

})
export class HichartComponent {
  // https://blacklabel.github.io/grouped_categories/
  Highcharts = Highcharts;
  linechart: any = {
    series: [{
      type: 'column',
      name: 'درآمد عملیاتی',
      data: [3, 2, 1, 3, 4]
    }, {
      type: 'spline',
      name: 'حاشیه سود عملیاتی - ارفع',
      data: [2, 3, 5, 7, 6]
    },
      {
      type: 'spline',
      name: 'حاشیه سود عملیاتی - اخابر',
      data: [3, 2.67, 3, 6.33, 3.33]
    }],    chart: {
    },
    title: {
      text: 'linechart',
    },
    tooltip: {
      shared: true
    },
    xAxis: {
      categories: [
        'Overpriced',
        'Small portions',
        'Wait time',
        'Food is tasteless',
        'No atmosphere',
        'Not clean',
        'Too noisy',
        'Unfriendly staff'
      ],
      crosshair: true
    },
    yAxis: {
      type: 'category',
      grid: {
        borderColor: '#3a5d96',
        columns: [{
          title: {
            text: 'Tasks',
            rotation: 45,
            y: -15,
            x: -15
          }
        }, {
          title: {
            text: 'Assignee',
            rotation: 45,
            y: -15,
            x: -15
          },
          labels: {
            format: '{point.assignee}'
          }
        }, {
          title: {
            text: 'Duration',
            rotation: 45,
            y: -15,
            x: -15
          },
          labels: {
            formatter: function() {
              var point = this.point,
                days = (1000 * 60 * 60 * 24),
                number = (point.end - point.start) / days;
              return Math.round(number * 100) / 100;
            }
          }
        }]
      }
    },
  };
}
