import { Component, OnInit } from '@angular/core';
import { BillableEmployeesService } from '../billable-employees.service';
import * as $ from 'jquery';
import { PackageService } from '../package.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billableemployeesinfo',
  templateUrl: './billableemployeesinfo.component.html',
  styleUrls: ['./billableemployeesinfo.component.css']
})
export class BillableemployeesinfoComponent implements OnInit {
  private billEmployeesDetails: any = [];

  constructor(private billableEmployeesService: BillableEmployeesService,private packageService:PackageService,private router:Router) {
    this.getBillableEmployeesInfo();
   }
package:any=[]
   billable={
     _id:null,
     clientName:null,
     employeeName:null,
   }

   particularRow(billableEmployeesDetails){
     this.billable=billableEmployeesDetails;
   }

   packageDetails(employeePackage){
    this.packageService.postPackageDetails(employeePackage).subscribe(packages=>{
      console.log(packages);
     this.package=packages;
     this.packageService.getPackageDetails();
        this.router.navigateByUrl('/billableEmployeesInfo');
    },err=>{
      console.log(err);
    },()=>{
      console.log("Package sent successfully");
    })
   }

  billableEmployeesDetails: any;
  items: any;
  getBillableEmployeesInfo() {
    this.billableEmployeesService.getBillableEmployeesDetails().subscribe(billableEmployeesDetails => {
      this.billableEmployeesDetails = billableEmployeesDetails;
      this.items = billableEmployeesDetails;
    }, err => {
      console.log(err);
    }, () => {
      console.log('billableEmployeesDetails got Successfully');
    });
  }


  onChangePage(billEmployeesDetails: Array<any>) {
    this.billEmployeesDetails = billEmployeesDetails;
  }
  ngOnInit() {
    this.items = Array(168).fill(0).map((x, i) => ({ id: (i + 1), name: `${i + 1}` }));
    $(document).ready(function() {
      $('.clickable-row').click(function() {
        window.location = $(this).data('href');
      });
    });
  }

}
