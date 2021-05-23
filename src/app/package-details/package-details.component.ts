import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css']
})
export class PackageDetailsComponent implements OnInit {

  constructor(private packageService:PackageService) { 
    this.getPackage();
  }
  packageitems: any = [];

  private packageDetails: any = [];

  getPackage() {
    this.packageService.getPackageDetails().subscribe(packages => {
      this.packageitems = packages;
      console.log(this.packageDetails);
    }, err => {
      console.log(err);
    }, () => {
      console.log("Packages got Successfully");
    })
  }

  ngOnInit() {
    this.packageitems = Array(168).fill(0).map((x, i) => ({ id: (i + 1), name: `${i + 1}` }));

    $(document).ready(function () {
      $(".clickable-row").click(function () {
        window.location = $(this).data("href");
      });

    });
    
  }
  
 onChangePage(packageDetails: Array<any>) {
    this.packageDetails = packageDetails;
  }
}
