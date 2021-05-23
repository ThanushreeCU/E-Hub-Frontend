import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import * as Highcharts from 'highcharts';


am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-revenue-detials',
  templateUrl: './revenue-detials.component.html',
  styleUrls: ['./revenue-detials.component.css']
})
export class RevenueDetialsComponent implements OnInit {
  constructor() {
    this.dataSource = {
      chart: {
        caption: 'Company Profit Indicator',
        subcaption: '2019',
        lowerlimit: '0',
        upperlimit: '100',
        showvalue: '1',
        theme: 'fusion'
    },
    colorrange: {
        color: [{
                minvalue: '0',
                maxvalue: '25',
                code: '#BB5D52 '
            },
            {
                minvalue: '25',
                maxvalue: '60',
                code: '#FFC533'
            },
            {
                minvalue: '60',
                maxvalue: '100',
                code: '#62B58F'
            }
        ]
    },
    dials: {
        dial: [{
            value: '65',
            tooltext: '<b>9%</b> lesser that target'
        }]
    },
    trendpoints: {
        point: [{
            startvalue: '80',
            displayvalue: 'Target',
            thickness: '2',
            color: '#E15A26',
            usemarker: '1',
            markerbordercolor: '#E15A26',
            markertooltext: '80%'
        }]
    }
    };
   }
  private chart: am4charts.XYChart;
  dataSource: Object;

  highcharts = Highcharts;



  // chart2

cart1 = {

  chart: {
    marginTop: 40
  },
  title: {
    text: '2019 TY'
  },
  xAxis: {
    categories: ['<span class="hc-cat-title">Revenue</span><br/> Millions']
  },
  yAxis: {
    plotBands: [{
      from: 0,
      to: 50,
      color: '#666'
    }, {
      from: 150,
      to: 225,
      color: '#999'
    }, {
      from: 225,
      to: 9e9,
      color: '#bbb'
    }],
    title: null
  },
  series: [{
    data: [{
      y: 275,
      target: 250
    }]
  }],
  tooltip: {
    pointFormat: '<b>{point.y}</b> (with target at {point.target})'
  }
};

// chart1

  ngAfterContentInit() {
    am4core.useTheme(am4themes_animated);
  // Themes end

  // Create chart instance
    const chart = am4core.create('chartdiv1', am4charts.XYChart);

  // Add data
    chart.data = [{
    year: '2011',
    value: 600000
  }, {
    year: '2012',
    value: 900000
  }, {
    year: '2013',
    value: 180000
  }, {
    year: '2014',
    value: 600000
  }, {
    year: '2015',
    value: 350000
  }, {
    year: '2016',
    value: 600000
  }, {
    year: '2017',
    value: 670000
  }];

  // Populate data
    for (let i = 0; i < (chart.data.length - 1); i++) {
    chart.data[i].valueNext = chart.data[i + 1].value;
  }

  // Create axes
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'year';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;

  // Create series
    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'value';
    series.dataFields.categoryX = 'year';

  // Add series for showing variance arrows
    const series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = 'valueNext';
    series2.dataFields.openValueY = 'value';
    series2.dataFields.categoryX = 'year';
    series2.columns.template.width = 1;
    series2.fill = am4core.color('#555');
    series2.stroke = am4core.color('#555');

  // Add a triangle for arrow tip
    const arrow = series2.bullets.push(new am4core.Triangle);
    arrow.width = 10;
    arrow.height = 10;
    arrow.horizontalCenter = 'middle';
    arrow.verticalCenter = 'top';
    arrow.dy = -1;

  // Set up a rotation adapter which would rotate the triangle if its a negative change
    arrow.adapter.add('rotation', function(rotation, target) {
    return getVariancePercent(target.dataItem) < 0 ? 180 : rotation;
  });

  // Set up a rotation adapter which adjusts Y position
    arrow.adapter.add('dy', function(dy, target) {
    return getVariancePercent(target.dataItem) < 0 ? 1 : dy;
  });

  // Add a label
    const label = series2.bullets.push(new am4core.Label);
    label.padding(10, 10, 10, 10);
    label.text = '';
    label.fill = am4core.color('#0c0');
    label.strokeWidth = 0;
    label.horizontalCenter = 'middle';
    label.verticalCenter = 'bottom';
    label.fontWeight = 'bolder';

  // Adapter for label text which calculates change in percent
    label.adapter.add('textOutput', function(text, target) {
    const percent = getVariancePercent(target.dataItem);
    return percent ? percent + '%' : text;
  });

  // Adapter which shifts the label if it's below the variance column
    label.adapter.add('verticalCenter', function(center, target) {
    return getVariancePercent(target.dataItem) < 0 ? 'top' : center;
  });

  // Adapter which changes color of label to red
    label.adapter.add('fill', function(fill, target) {
    return getVariancePercent(target.dataItem) < 0 ? am4core.color('#c00') : fill;
  });

    function getVariancePercent(dataItem) {
    if (dataItem) {
      const value = dataItem.valueY;
      const openValue = dataItem.openValueY;
      const change = value - openValue;
      return Math.round(change / openValue * 100);
    }
    return 0;
  }
  }

  ngOnInit() {
  }

}
