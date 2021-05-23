import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as Highcharts from 'highcharts';
import { BillableEmployeesService } from '../billable-employees.service';

@Component({
  selector: 'app-billable',
  templateUrl: './billable.component.html',
  styleUrls: ['./billable.component.css']
})

export class BillableComponent implements OnInit {
  count: any=[];
  javacount:any=[];
  datasciencecount:any=[];
  dotnetcount:any=[];
  meanstackcount:any=[];
  highcharts = Highcharts;

  year:any=[];
  constructor(private billableEmployeesService: BillableEmployeesService) {
    this.getBillableEmployeesCount();
    this.getBillableExperienceCount();
  }

  getBillableEmployeesCount(){
    let series = [];
    this.billableEmployeesService.getBillableEmployeesDetailsCount().subscribe(billableEmployeesDetailsCount=>{
      this.count = billableEmployeesDetailsCount;
      for(let i=0;i<this.count.length;i++){
        series.push({
          name:this.count[i]._id.stack,
          y:this.count[i].count
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
    
    
        var chart = Highcharts.chart('container1', {
          chart : {
            type: 'pie',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
          },
          title: {
            text: 'Technology Wise Billable Engineers',
            x: +20
          },
          tooltip: {
            pointFormat: '<b>{point.y}</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              shadow : false,
              cursor: 'pointer',
              dataLabels: {
                enabled: false
              },
              showInLegend: true
            }
          },
          series: [{
           type : 'pie',
            data: series
          }]
        })
    
    },err=>{
      console.log(err);
    },()=>{
      console.log("Billable data got")
    })
  }

  getBillableExperienceCount(){
    let year1 = [];
     this.billableEmployeesService.getBillableExperienceCount().subscribe(billableExperienceDetailsCount=>{
       this.year = billableExperienceDetailsCount;
       console.log(this.year);
       for(let i=0;i<this.year.length;i++){
         if(this.year[i]._id.yearOfExperience>=0 && this.year[i]._id.yearOfExperience<=3){
         year1.push({
           year:this.year[i]._id.yearOfExperience+'years',
           y:this.year[i].count
         });
        //  if(this.year[i]._id.yearOfExperience>3 && this.year[i]._id.yearOfExperience<=6){
        //   year1.push({
        //     year:this.year[i]._id.yearOfExperience+'years',
        //     y:this.year[i].count
        //   });
        //   if(this.year[i]._id.yearOfExperience>6 && this.year[i]._id.yearOfExperience<=9){
        //     year1.push({
        //       year:this.year[i]._id.yearOfExperience+'years',
        //       y:this.year[i].count
        //     });
        }
       }
      //  this.count.map(item=>{
      //    console.log('item',item[1]);
      //    if(item[1]._id.stack === 'Java FullStack'){
      //      this.javacount=item[1].count;
      //    }
      //    if(item[1]._id.stack === 'Mean Stack'){
      //     this.meanstackcount=item[1].count;
      //   }
      //   if(item[1]._id.stack === 'Dot Net'){
      //     this.dotnetcount=item[1].count;
      //   }
      //   if(item[1]._id.stack === 'Datascience'){
      //     this.datasciencecount=item[1].count;
      //   }
      //  })
      
     
         var chart = Highcharts.chart('container2', {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
          },
          title: {
            text: 'Experience Wise  Billable Engineers',
            x: +15
          },
          tooltip: {
                pointFormat: ' {point.year}: {series.name}: <b>{point.y:.0f}</b>'
              },
          plotOptions: {
            pie: {
              dataLabels: {
                enabled: true,
                format: '<b>{point.year}</b> ({point.y:,.0f}) ',
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
            data:year1
          }]
         })
     
     },err=>{
       console.log(err);
     },()=>{
       console.log("Billable Experience Details data got")
     })
   }

//   // chart1
//     cart11 = {
//     chart: {
//         plotBackgroundColor: null,
//         plotBorderWidth: null,
//         plotShadow: false,
//         type: 'pie'
//       },
//       title: {
//         text: 'Technology Wise Billable Engineers',
//         x: +20
//       },
//       tooltip: {
//         pointFormat: '<b>{point.y}</b>'
//       },
//       plotOptions: {
//         pie: {
//           allowPointSelect: true,
//           cursor: 'pointer',
//           dataLabels: {
//             enabled: false
//           },
//           showInLegend: true
//         }
//       },
//       series: [{

//         colorByPoint: true,
//         height: '200px',
//         width: '300px',
//         innerSize: '20%',
//         data: [{
//           name: 'Java FullStack',
//           y: 25
//         }, {
//           name: 'MEAN Stack',
//           y: 10
//         },
//         {
//           name: 'Dot Net',
//           y: 20
//         }, {
//           name: 'Data Science',
//           y: 30
//         }]
//       }]
// };


// chart2
// cart3 = {
//   chart: {
//     plotBackgroundColor: null,
//     plotBorderWidth: 0,
//     plotShadow: false
//   },
//   title: {
//     text: 'Experience Wise  Billable Engineers',
//     x: +15
//   },
//   tooltip: {
//         pointFormat: '{series.data.year} {point.year}: {series.name}: <b>{point.y:.0f}</b>'
//       },
//   plotOptions: {
//     pie: {
//       dataLabels: {
//         enabled: true,
//         format: '<b>{point.year}</b> ({point.y:,.0f}) ',
//         style: {
//           fontWeight: 'bold',
//           color: 'black'
//         }
//       },
//       startAngle: -90,
//       endAngle: 90,
//       center: ['50%', '75%'],
//       size: '150%'
//     }
//   },
//   series: [{
//     type: 'pie',
//     name: 'Number of Employees',
//     innerSize: '50%',
//     data: [

//       {
//         year: '0 Years', y : 20,
//         events : { click() {
//           window.location.href = '/billableTable';
//         }
//       }
//       },
//       {
//         year: '0-1 Years', y : 20,
//         events : { click() {
//           window.location.href = '/billableTable';
//         }
//       }
//       },
//       {
//         year: '1-2 Years', y : 20,
//         events : { click() {
//           window.location.href = '/billableTable';
//         }
//       }
//       },
//       {
//         year: '2-3 Years', y : 20,
//         events : { click() {
//           window.location.href = '/billableTable';
//         }
//       }
//       },
//       {
//         year: '>3 Years', y : 20,
//         events : { click() {
//           window.location.href = '/billableTable';
//         }
//       }
//       }
//     ]
//   }]
//   };
  ngOnInit() {
  }


//   getBillableEmployeesDetailsCount() {
//   this.billableEmployeesService.getBillableEmployeesDetailsCount().subscribe(BillableEmployeesDetailsCount => {
//     this.count = BillableEmployeesDetailsCount;
//     console.log('inside construictor', this.count);
//   }, err => {
//     console.log(err);
//   }, () => {
//     console.log('count of billable employees');
//   });
// }
}
