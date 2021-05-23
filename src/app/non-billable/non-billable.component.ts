import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-non-billable',
  templateUrl: './non-billable.component.html',
  styleUrls: ['./non-billable.component.css']
})
export class NonBillableComponent implements OnInit {

  constructor() { }

  highcharts = Highcharts;


    // chart1

    cart20 = {
      chart: {
        type: 'pie'
    },
    title: {
        text: 'Non-Billable Technology Wised Paid and Un-paid Engineers Strength'
    },
    subtitle: {
        // text: 'Based On experience'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total Percentage Of Employees'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
    },

    series: [
        {
            name: 'Category',
            colorByPoint: true,
            data: [
                {
                    name: 'Paid',
                    y: 62.00,
                    color: 'green',
                    drilldown: 'Paid'
                },
                {
                    name: 'Unpaid',
                    y: 38.00,
                    drilldown: 'Unpaid'
                }
            ]
        }
    ],
    drilldown: {
        series: [
            {
                name: 'Paid',
                id: 'Paid',
                type: 'column',
                data: [
                    {
                        name: 'JAVAFULLSTACK',
                        y: 8,
                        events: {
                            click() {
                                window.location.href = 'billableTable';
                            }
                        }
                    },
                    {
                        name: 'MEANSTACK',
                        y: 12,
                        events: {
                            click() {
                                window.location.href = 'billableTable';
                            }
                        }
                    },
                    {
                        name: 'DATA SCIENCE',
                        y: 21,
                        events: {
                            click() {
                                window.location.href = 'billableTable';
                            }
                        }
                    },
                    {
                        name: 'DOT-NET',
                        y: 13,
                        events: {
                            click() {
                                window.location.href = 'billableTable';
                            }
                        }
                    },
                    {
                        name: 'PYTHON',
                        y: 6,
                        events: {
                            click() {
                                window.location.href = 'billableTable';
                            }
                        }
                    }
                ]
            },
            {
                name: 'Unpaid',
                id: 'Unpaid',
                type: 'column',
                data: [
                    {
                        name: 'JAVAFULLSTACK',
                        y: 10,
                        events: {
                            click() {
                                window.location.href = 'billableTable';
                            }
                        }
                    },
                    {
                        name: 'MEANSTACK',
                        y: 20,
                        events: {
                            click() {
                                window.location.href = 'billableTable';
                            }
                        }
                    },
                    {
                        name: 'DATA SCIENCE',
                        y: 5,
                        events: {
                            click() {
                                window.location.href = 'billableTable';
                            }
                        }
                    },
                    {
                        name: 'DOT-NET',
                        y: 12,
                        events: {
                            click() {
                                window.location.href = 'billableTable';
                            }
                        }
                    },
                    {
                        name: 'PYTHON',
                        y: 8,
                        events: {
                            click() {
                                window.location.href = 'billableTable';
                            }
                        }
                    }
                ]
            },
        ]
    }
    };
// chart2
    cart1 = {
      chart: {
        type: 'pie'
    },
    title: {
        text: 'Technology Wise Non Billable Engineers',
        x: +20
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
            ' <b>{point.y}</b><br/>'

    },
    series: [{
        minPointSize: 10,
        height: '200px',
        width: '300px',
        innerSize: '20%',
        name: 'countries',
        data: [{
            name: 'Java FullStack',
            y: 500,
            events: {
                click() {
                    window.location.href = 'billableTable';

                }
            }
        }, {
            name: 'MEAN Stack',
            y: 420,
            events: {
                click() {
                    window.location.href = 'billableTable';

                }
            }
        }, {
            name: 'Dot net',
            y: 300,
            events: {
                click() {
                    window.location.href = 'billableTable';

                }
            }
        }, {
            name: 'Data Science',
            y: 250,
            events: {
                click() {
                    window.location.href = 'billableTable';

                }
            }
        }]
    }]
    };



    // chart3

    cart7 = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
        text: 'Experience Wise Non Billable Engineers',
        x: +15
      },
      tooltip: {
        pointFormat: '{series.data.year} {point.year}: {series.name}: <b>{point.y:.0f}</b>'
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            format: '<b>{point.year}</b> ({point.y:,.0f}) ',
            // distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'black'
            }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '150%'
        }
      },
      series: [{
        type: 'pie',
        name: 'Number of Employees',
        innerSize: '50%',
        data: [

          {
            year: '0 Years', y : 20,
            events : { click() {
              window.location.href = 'billableTable';
            }
          }
          },
          {
            year: '0-1 Years', y : 20,
            events : { click() {
              window.location.href = 'billableTable';
            }
          }
          },
          {
            year: '1-2 Years', y : 20,
            events : { click() {
              window.location.href = 'billableTable';
            }
          }
          },
          {
            year: '2-3 Years', y : 20,
            events : { click() {
              window.location.href = 'billableTable';
            }
          }
          },
          {
            year: '>3 Years', y : 20,
            events : { click() {
              window.location.href = 'billableTable';
            }
          }
          }

        ]
      }]
    };

  ngOnInit() {
  }
}
