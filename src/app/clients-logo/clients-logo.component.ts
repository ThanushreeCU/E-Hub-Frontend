import { Component, OnInit } from '@angular/core';
import { ShowimageService } from '../showimage.service';
import { Router } from '@angular/router';
import { BillableEmployeesService } from '../billable-employees.service';
import { ClientsDetailsService } from '../clients-details.service';

@Component({
  selector: 'app-clients-logo',
  templateUrl: './clients-logo.component.html',
  styleUrls: ['./clients-logo.component.css']
})
export class ClientsLogoComponent implements OnInit {
  
  constructor(private showimageservice: ShowimageService,private clientsService:ClientsDetailsService, private router: Router) {this.getBillableToClient()}
  images: any;
  billableClientsCount:any=[]

  ngOnInit() {
    this.showimageservice.showImage()
    // tslint:disable-next-line: variable-name
    .subscribe((result_imagename) => {
      this.images = result_imagename.imagename;
      console.log(this.images);
    },
    (err) => {
      console.log(err);
    });
  }
getBillableToClient(){
  this.clientsService.getBillableToClientCount().subscribe(billableCount=>{
    console.log(billableCount);
    this.billableClientsCount=billableCount;
  },err=>{
    console.log(err);
  },()=>{
    console.log("Billable Count ")
  })
}

  }


