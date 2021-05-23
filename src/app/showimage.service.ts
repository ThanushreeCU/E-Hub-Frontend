import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowimageService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {
    this.showImage();
   }

  showImage(): Observable<any> {
    return this.http.get(`${this.uri}/getimage`);
  }
  // deleteProduct(id) {
  //   return this.http.delete(`${this.uri}/deleteProduct/${id}`);
  // }
}
