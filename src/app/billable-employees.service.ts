import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillableEmployeesService {
  count: any;
  backendUrl = 'http://localhost:4000';
  constructor(private http: HttpClient) {
    this.getBillableEmployeesDetailsCount();
    this.getBillableExperienceCount();
  }


  postBillableEmployeesDetails(BillableEmployeesDetails) {
    return this.http.post(`${this.backendUrl}/postBillableEmployeesDetails`, BillableEmployeesDetails);
  }

  getBillableEmployeesDetails() {
    return this.http.get(`${this.backendUrl}/getBillableEmployeesDetails`);
  }

  getBillableEmployeesDetailsCount() {
    return this.http.get(`${this.backendUrl}/getBillableEmployeesDetailsCount`);
  }

  

  getBillableExperienceCount(){
    return this.http.get(`${this.backendUrl}/getBillableExperienceCount`);
  }

  postBillableEmployeesPackageDetails(BillableEmployeesPackageDetails) {
    return this.http.post(`${this.backendUrl}/postBillableEmployeesPackageDetails`, BillableEmployeesPackageDetails);
  }
}
