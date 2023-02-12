import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataContainerService {

  
  basUrl: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  getLatestProduct():Observable<Product[]> {
    return this.http.get<Product[]>(`${this.basUrl}allProduct`);
  }
  getVisitedProduct():Observable<Product[]>  {
    return this.http.get<Product[]>(`${this.basUrl}visitedProduct`);
  }
}
