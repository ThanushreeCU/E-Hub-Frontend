import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http:HttpClient) { }

  backendUrl='http://localhost:4000';

 
  postPackageDetails(packages){
    return this.http.post(`${this.backendUrl}/postBillablePackage`,packages);
  }
  
  getPackageDetails(){
   return this.http.get(`${this.backendUrl}/getBillablePackage`);
  }
}
