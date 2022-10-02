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
  // linechart = {
  //   chart: {
  //     renderTo: "container",
  //     type: "column",
  //     borderWidth: 5,
  //     borderColor: '#e8eaeb',
  //     borderRadius: 0,
  //     backgroundColor: '#f7f7f7'
  //   },
  //   title: {
  //     style: {
  //       'fontSize': '1em'
  //     },
  //     useHTML: true,
  //     x: -27,
  //     y: 8,
  //     text: '<span class="chart-title"> Grouped Categories with 3 Series<span class="chart-href"> <a href="http://www.blacklabel.pl/highcharts" target="_blank"> Black Label </a> </span> <span class="chart-subtitle">plugin by </span></span>'
  //   },
  //   yAxis: {
  //     "title": {
  //       "text": "Call Interactions"
  //     },
  //     "labels": {
  //       "style": {
  //         "color": "#000",
  //         "fontWeight": "bold"
  //       },
  //       "enabled": true,
  //       "verticalAlign": "top"
  //     }
  //   },
  //   "plotOptions": {
  //     "column": {
  //       "grouping": true,
  //       "pointPadding": 0.2,
  //       "groupPadding": 0.1,
  //       "borderWidth": 0,
  //       "dataLabels": {
  //         "enabled": true,
  //         "rotation": -90,
  //         "crop": false,
  //         "overflow": "none",
  //         "y": -20,
  //         "maxPadding": 0.1,
  //         "inside": true
  //       }
  //     }
  //   }
  //   ,
  //   series: [
  //     {
  //       "name": "Field",
  //       "data": [
  //         {
  //           "name": "Customer1",
  //           "data": [
  //             {
  //               "name": "Q1-2021",
  //               "y": 187,
  //               "stack": "Customer1"
  //             },
  //             {
  //               "name": "Q2-2021",
  //               "y": 211,
  //               "stack": "Customer1"
  //             },
  //             {
  //               "name": "Q3-2021",
  //               "y": 192,
  //               "stack": "Customer1"
  //             },
  //             {
  //               "name": "Q4-2021",
  //               "y": 129,
  //               "stack": "Customer1"
  //             }
  //           ],
  //           "pointPadding": 0.2
  //         },
  //         {
  //           "name": "Customer2",
  //           "data": [
  //             {
  //               "name": "Q4-2019",
  //               "y": 155,
  //               "stack": "Customer2"
  //             },
  //             {
  //               "name": "Q4-2021",
  //               "y": 299,
  //               "stack": "Customer2"
  //             }
  //           ],
  //           "pointPadding": 0.2
  //         },
  //         {
  //           "name": "Customer3",
  //           "data": [
  //             {
  //               "name": "Q3-2021",
  //               "y": 967,
  //               "stack": "Customer3"
  //             },
  //             {
  //               "name": "Q4-2021",
  //               "y": 69,
  //               "stack": "Customer3"
  //             }
  //           ],
  //           "pointPadding": 0.2
  //         },
  //         {
  //           "name": "Customer4",
  //           "data": [
  //             {
  //               "name": "Q4-2020",
  //               "y": 122,
  //               "stack": "Customer4"
  //             },
  //             {
  //               "name": "Q4-2021",
  //               "y": 342,
  //               "stack": "Customer4"
  //             }
  //           ],
  //           "pointPadding": 0.2
  //         }
  //       ],
  //       "pointPadding": 0.2
  //     },
  //     {
  //       "name": "Phone",
  //       "data": [
  //         {
  //           "name": "Customer1",
  //           "data": [
  //             {
  //               "name": "Q1-2021",
  //               "y": 133,
  //               "stack": "Customer1"
  //             },
  //             {
  //               "name": "Q2-2021",
  //               "y": 206,
  //               "stack": "Customer1"
  //             },
  //             {
  //               "name": "Q3-2021",
  //               "y": 319,
  //               "stack": "Customer1"
  //             },
  //             {
  //               "name": "Q4-2021",
  //               "y": 2891,
  //               "stack": "Customer1"
  //             }
  //           ],
  //           "pointPadding": 0.2
  //         },
  //         {
  //           "name": "Customer2",
  //           "data": [
  //             {
  //               "name": "Q4-2019",
  //               "y": 543
  //             },
  //             {
  //               "name": "Q4-2021",
  //               "y": 121
  //             }
  //           ],
  //           "pointPadding": 0.2
  //         },
  //         {
  //           "name": "Customer3",
  //           "data": [
  //             {
  //               "name": "Q3-2021",
  //               "y": null
  //             },
  //             {
  //               "name": "Q4-2021",
  //               "y": null
  //             }
  //           ],
  //           "pointPadding": 0.2
  //         },
  //         {
  //           "name": "Customer4",
  //           "data": [
  //             {
  //               "name": "Q4-2020",
  //               "y": 337
  //             },
  //             {
  //               "name": "Q4-2021",
  //               "y": 355
  //             }
  //           ],
  //           "pointPadding": 0.2
  //         }
  //       ],
  //       "pointPadding": 0.2
  //     },
  //     {
  //       "name": "Virtual",
  //       "data": [
  //         {
  //           "name": "Customer1",
  //           "data": [
  //             {
  //               "name": "Q1-2021",
  //               "y": null
  //             },
  //             {
  //               "name": "Q2-2021",
  //               "y": null
  //             },
  //             {
  //               "name": "Q3-2021",
  //               "y": null
  //             },
  //             {
  //               "name": "Q4-2021",
  //               "y": null
  //             }
  //           ],
  //           "pointPadding": 0.2
  //         },
  //         {
  //           "name": "Customer2",
  //           "data": [
  //             {
  //               "name": "Q4-2019",
  //               "y": null,
  //               "stack": "Customer2"
  //             },
  //             {
  //               "name": "Q4-2021",
  //               "y": 48,
  //               "stack": "Customer2"
  //             }
  //           ],
  //           "pointPadding": 0.2
  //         },
  //         {
  //           "name": "Customer3",
  //           "data": [
  //             {
  //               "name": "Q3-2021",
  //               "y": 4432,
  //               "stack": "Customer3"
  //             },
  //             {
  //               "name": "Q4-2021",
  //               "y": 6,
  //               "stack": "Customer3"
  //             }
  //           ],
  //           "pointPadding": 0.2
  //         },
  //         {
  //           "name": "Customer4",
  //           "data": [
  //             {
  //               "name": "Q4-2020",
  //               "y": 13,
  //               "stack": "Customer4"
  //             },
  //             {
  //               "name": "Q4-2021",
  //               "y": 18,
  //               "stack": "Customer4"
  //             }
  //           ],
  //           "pointPadding": 0.2
  //         }
  //       ],
  //       "pointPadding": 0.2
  //     }
  //   ],
  //   xAxis: {
  //     "categories": [
  //       {
  //         "categories": [
  //           {
  //             "categories": [
  //               "Q1-2021",
  //               "Q2-2021",
  //               "Q3-2021",
  //               "Q4-2021"
  //             ],
  //             "title": {
  //               "text": "Customer1"
  //             },
  //             "name": "Customer1"
  //           },
  //           {
  //             "categories": [
  //               "Q4-2019",
  //               "Q4-2021"
  //             ],
  //             "title": {
  //               "text": "Customer2"
  //             },
  //             "name": "Customer2"
  //           },
  //           {
  //             "categories": [
  //               "Q3-2021",
  //               "Q4-2021"
  //             ],
  //             "title": {
  //               "text": "Customer3"
  //             },
  //             "name": "Customer3"
  //           },
  //           {
  //             "categories": [
  //               "Q4-2020",
  //               "Q4-2021"
  //             ],
  //             "title": {
  //               "text": "Customer4"
  //             },
  //             "name": "Customer4"
  //           }
  //         ],
  //         "title": {
  //           "text": "Customer Name"
  //         },
  //         "name": "Customer Name"
  //       }
  //     ],
  //     "labels": {
  //       "groupedOptions": [
  //         {
  //           "style": {
  //             "color": "red"
  //           },
  //           "rotation": 0
  //         },
  //         {
  //           "style": {
  //             "color": "blue"
  //           },
  //           "rotation": 0,
  //           "align": "center"
  //         },
  //         {
  //           "style": {
  //             "fontWeight": "bold",
  //             "color": "#0005AA"
  //           },
  //           "rotation": 0
  //         }
  //       ],
  //       "rotation": -90,
  //       "enableTrimming": false
  //     }
  //   }
  // }
  linechart : any = {
    chart: {
      // renderTo: "chart-basic",
      type: "column"
    },
    series: [

      {
        "name": "Fruit",
        "data": [
          {
            "name": "Customer1",
            "data": [
              {
                "name": "Apple",
                "y": 187,
                "stack": "Customer1"
              },
              {
                "name": "Banana",
                "y": 211,
                "stack": "Customer1"
              },
              {
                "name": "Orange",
                "y": 192,
                "stack": "Customer1"
              }
            ],
            "pointPadding": 0.2
          }
          ]
  }
    //   {
    //   data: [4, 14, 18]
    // }


    ],
      xAxis: {
        categories: [
          // 'Apple',
          // 'Banana',
          // 'Orange',
          // 'Carrot',
          // 'Potato',
          // 'Tomato',
          // 'Cod',
          // 'Salmon',
          // 'Tuna',

          {
              name: "Fruit",
              categories: ["Apple", "Banana", "Orange"]
            },
          {
              name: "Vegetable",
              categories: ["Carrot", "Potato", "Tomato"]
            }, {
              name: "Fish",
              categories: ["Cod", "Salmon", "Tuna"]
            }
        ],
        crosshair: true
      },
    // xAxis: {
    //   categories: [{
    //     name: "Fruit",
    //     categories: ["Apple", "Banana", "Orange"]
    //   }, {
    //     name: "Vegetable",
    //     categories: ["Carrot", "Potato", "Tomato"]
    //   }, {
    //     name: "Fish",
    //     categories: ["Cod", "Salmon", "Tuna"]
    //   }]
    // }
  }

  // linechart: any = {
  //   series: [{
  //     type: 'column',
  //     name: 'درآمد عملیاتی',
  //     data: [3, 2, 1, 3, 4]
  //   }, {
  //     type: 'spline',
  //     name: 'حاشیه سود عملیاتی - ارفع',
  //     data: [2, 3, 5, 7, 6]
  //   },
  //     {
  //     type: 'spline',
  //     name: 'حاشیه سود عملیاتی - اخابر',
  //     data: [3, 2.67, 3, 6.33, 3.33]
  //   }],    chart: {
  //   },
  //   title: {
  //     text: 'linechart',
  //   },
  //   tooltip: {
  //     shared: true
  //   },
  //   xAxis: {
  //     categories: [
  //       'Overpriced',
  //       'Small portions',
  //       'Wait time',
  //       'Food is tasteless',
  //       'No atmosphere',
  //       'Not clean',
  //       'Too noisy',
  //       'Unfriendly staff'
  //     ],
  //     crosshair: true
  //   },
  //   yAxis: {
  //     type: 'category',
  //     grid: {
  //       borderColor: '#3a5d96',
  //       columns: [{
  //         title: {
  //           text: 'Tasks',
  //           rotation: 45,
  //           y: -15,
  //           x: -15
  //         }
  //       }, {
  //         title: {
  //           text: 'Assignee',
  //           rotation: 45,
  //           y: -15,
  //           x: -15
  //         },
  //         labels: {
  //           format: '{point.assignee}'
  //         }
  //       }, {
  //         title: {
  //           text: 'Duration',
  //           rotation: 45,
  //           y: -15,
  //           x: -15
  //         },
  //         labels: {
  //           formatter: function() {
  //             var point = this.point,
  //               days = (1000 * 60 * 60 * 24),
  //               number = (point.end - point.start) / days;
  //             return Math.round(number * 100) / 100;
  //           }
  //         }
  //       }]
  //     }
  //   },
  // };
}
