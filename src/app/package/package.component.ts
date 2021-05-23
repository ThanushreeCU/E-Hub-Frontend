import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  constructor(private packageService:PackageService,private router:Router) { }
  package:any=[];

 
  ngOnInit() {
  }
  
}
