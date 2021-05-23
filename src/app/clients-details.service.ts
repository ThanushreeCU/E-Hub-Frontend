import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsDetailsService {
  clientsDetails: any;
  backendUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) {
 this.getBillableToClientCount();
   }

  postClientDetails(details, imagename): Observable<any> {
    const obj = {
      details,
      imagename
    };
    return this.http.post(`${this.backendUrl}/postClientDetails`, obj);
  }



  getClientsDetails() {
   return this.http.get(`${this.backendUrl}/getClientDetails`);
      }

  updateClientDetails(clientsDetails): Observable<any> {
  
    return this.http.post(`${this.backendUrl}/updateClientDetails`, clientsDetails);
      }

      deleteClientdetails(id) {
        return this.http.delete(`${this.backendUrl}/deleteClientDetails/${id}`);

      }
      getBillableToClientCount(){
          return this.http.get(`${this.backendUrl}/getBillEmployeesBasedOnClient`);
      }
}
