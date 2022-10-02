import { Component } from '@angular/core';
import * as Highcharts from "highcharts";

@Component({
  selector: 'app-hichart',
  templateUrl: './hichart.component.html',
  styleUrls: ['./hichart.component.scss'],

})
export class HichartComponent {

  Highcharts = Highcharts;
  linechart: any = {
    series: [
      {
        data: [1, 2, 3],
      },
      // {
      //   type: 'pareto',
      //   name: 'Pareto',
      //   yAxis: 1,
      //   zIndex: 10,
      //   baseSeries: 1,
      //   tooltip: {
      //     valueDecimals: 2,
      //     valueSuffix: '%'
      //   }
      // },
      {
        name: 'Complaints',
        type: 'column',
        zIndex: 2,
        data: [755, 222, 151, 86, 72, 51, 36, 10]
      }
    ],
    chart: {
      type: 'column',
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
    yAxis: [{
      title: {
        text: ''
      }
    }, {
      title: {
        text: ''
      },
      minPadding: 0,
      maxPadding: 0,
      max: 100,
      min: 0,
      opposite: true,
      labels: {
        format: "{value}%"
      }
    }],
  };
}
