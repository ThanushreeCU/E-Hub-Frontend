import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { BillableEmployeesService } from '../billable-employees.service';

@Component({
  selector: 'app-clientsdata',
  templateUrl: './clientsdata.component.html',
  styleUrls: ['./clientsdata.component.css']
})
export class ClientsdataComponent implements OnInit {
  private chart: am4charts.XYChart;

  constructor(private billableEmployeesService:BillableEmployeesService) { this.getBillableEmployeesCount();}
  count:any=[];
// chart1
getBillableEmployeesCount(){
  let series = [];
  this.billableEmployeesService.getBillableEmployeesDetailsCount().subscribe(billableEmployeesDetailsCount=>{
    this.count = billableEmployeesDetailsCount;
    for(let i=0;i<this.count.length;i++){
      series.push({
        category:this.count[i]._id.stack,
        litres:this.count[i].count
      });
    }
    // this.count.map(item=>{
    //   console.log('item',item[1]);
    //   if(item[1]._id.stack === 'Java FullStack'){
    //     this.javacount=item[1].count;
    //   }
    //   if(item[1]._id.stack === 'Mean Stack'){
    //    this.meanstackcount=item[1].count;
    //  }
    //  if(item[1]._id.stack === 'Dot Net'){
    //    this.dotnetcount=item[1].count;
    //  }
    //  if(item[1]._id.stack === 'Datascience'){
    //    this.datasciencecount=item[1].count;
    //  }
    // })
  
  
    am4core.ready(function() {

      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end
  
      // Create chart instance
      const chart = am4core.create('chartdiv', am4charts.PieChart);
  
      // Add and configure Series
      const pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = 'litres';
      pieSeries.dataFields.category = 'category';
  
      // Let's cut a hole in our Pie chart the size of 30% the radius
      chart.innerRadius = am4core.percent(30);
  
  
      // Put a thick white border around each Slice
      pieSeries.slices.template.stroke = am4core.color('#fff');
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;
      pieSeries.slices.template
        // change the cursor on hover to make it apparent the object can be interacted with
        .cursorOverStyle = [
          {
            property: 'cursor',
            value: 'pointer',
          }
        ];
  
      pieSeries.alignLabels = false;
      pieSeries.labels.template.bent = true;
      pieSeries.labels.template.radius = 3;
      pieSeries.labels.template.padding(0, 0, 0, 0);
  
      pieSeries.ticks.template.disabled = true;
  
      // Create a base filter effect (as if it's not there) for the hover to return to
      const shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
      shadow.opacity = 0;
  
      // Create hover state
      // tslint:disable-next-line: max-line-length
      const hoverState = pieSeries.slices.template.states.getKey('hover'); // normally we have to create the hover state, in this case it already exists
  
      // Slightly shift the shadow and make it more prominent on hover
      const hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
      hoverShadow.opacity = 0.7;
      hoverShadow.blur = 5;
  
      // Add a legend
      chart.legend = new am4charts.Legend();
  
      chart.data = series
      });
  
  },err=>{
    console.log(err);
  },()=>{
    console.log("Billable data got")
  })
}

ngAfterContentInit() {
  

// chart2


  am4core.ready(function() {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        const chart = am4core.create('chartdiv1', am4charts.XYChart);

        // Export
        chart.exporting.menu = new am4core.ExportMenu();

        // Data for both series
        const data = [ {
          year: '2009',
          'Number of Employees': 23,
          Profit: 21.1
        }, {
          year: '2010',
          'Number of Employees': 26,
          Profit: 30.5
        }, {
          year: '2011',
          'Number of Employees': 30,
          Profit: 34.9
        }, {
          year: '2012',
          'Number of Employees': 29,
          Profit: 31.1
        }, {
          year: '2013',
          'Number of Employees': 30,
          Profit: 28.2,
          lineDash: '5,5',
        }, {
          year: '2014',
          'Number of Employees': 34,
          Profit: 32.9,
          strokeWidth: 1,
          columnDash: '5,5',
          fillOpacity: 0.2,
          additional: '(projection)'
        } ];

        /* Create axes */
        const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = 'year';
        categoryAxis.renderer.minGridDistance = 30;

        /* Create value axis */
        const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        /* Create series */
        const columnSeries = chart.series.push(new am4charts.ColumnSeries());
        columnSeries.name = 'Total Employees';
        columnSeries.dataFields.valueY = 'Number of Employees';
        columnSeries.dataFields.categoryX = 'year';

        // tslint:disable-next-line: max-line-length
        columnSeries.columns.template.tooltipText = '[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]';
        columnSeries.columns.template.propertyFields.fillOpacity = 'fillOpacity';
        columnSeries.columns.template.propertyFields.stroke = 'stroke';
        columnSeries.columns.template.propertyFields.strokeWidth = 'strokeWidth';
        columnSeries.columns.template.propertyFields.strokeDasharray = 'columnDash';
        columnSeries.tooltip.label.textAlign = 'middle';

        const lineSeries = chart.series.push(new am4charts.LineSeries());
        lineSeries.name = 'Profit';
        lineSeries.dataFields.valueY = 'Profit';
        lineSeries.dataFields.categoryX = 'year';

        lineSeries.stroke = am4core.color('#fdd400');
        lineSeries.strokeWidth = 3;
        lineSeries.propertyFields.strokeDasharray = 'lineDash';
        lineSeries.tooltip.label.textAlign = 'middle';

        const bullet = lineSeries.bullets.push(new am4charts.Bullet());
        bullet.fill = am4core.color('#fdd400'); // tooltips grab fill from parent by default
        bullet.tooltipText = '[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]';
        const circle = bullet.createChild(am4core.Circle);
        circle.radius = 4;
        circle.fill = am4core.color('#fff');
        circle.strokeWidth = 3;

        chart.data = data;

        });






// chart3

  am4core.ready(function() {

            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

             // Create chart instance
            const chart = am4core.create('chartdiv2', am4charts.XYChart);

            // Add data
            chart.data = [{
              year: 2005,
              Fresher: 23,
              Experience: 18
            }, {
              year: 2006,
              Fresher: 26,
              Experience: 22
            }, {
              year: 2007,
              Fresher: 30,
              Experience: 23,
              click() {
                window.location.href = './table_tech_Nonbillable.html';

            }
            }, {
              year: 2008,
              Fresher: 29,
              Experience: 25
            }, {
              year: 2009,
              Fresher: 24,
              Experience: 25
            }];

            // Create axes
            const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = 'year';
            categoryAxis.numberFormatter.numberFormat = '#';
            categoryAxis.renderer.inversed = true;
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.cellStartLocation = 0.1;
            categoryAxis.renderer.cellEndLocation = 0.9;

            const  valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
            valueAxis.renderer.opposite = true;

            // Create series
            function createSeries(field, name) {
              const series = chart.series.push(new am4charts.ColumnSeries());
              series.dataFields.valueX = field;
              series.dataFields.categoryY = 'year';
              series.name = name;
              series.columns.template.tooltipText = '{name}: [bold]{valueX}[/]';
              series.columns.template.height = am4core.percent(100);
              series.sequencedInterpolation = true;

              const valueLabel = series.bullets.push(new am4charts.LabelBullet());
              valueLabel.label.text = '{valueX}';
              valueLabel.label.horizontalCenter = 'left';
              valueLabel.label.dx = 10;
              valueLabel.label.hideOversized = false;
              valueLabel.label.truncate = false;

              const categoryLabel = series.bullets.push(new am4charts.LabelBullet());
              categoryLabel.label.text = '{name}';
              categoryLabel.label.horizontalCenter = 'right';
              categoryLabel.label.dx = -10;
              categoryLabel.label.fill = am4core.color('#fff');
              categoryLabel.label.hideOversized = false;
              categoryLabel.label.truncate = false;
            }

            createSeries('Fresher', 'Fresher');
            createSeries('Experience', 'Experience');

            });

          }


  ngOnInit() {
  }

}
