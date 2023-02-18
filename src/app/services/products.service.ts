import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private categoryEndpoint = 'https://fakestoreapi.com/products/category/'
  private productEndpoint = 'https://fakestoreapi.com/products/'
  constructor(private httpClient: HttpClient) {
    
   }
  getProducts(categoryName:string):Observable<Product[]>{
    const endpoint = this.categoryEndpoint + categoryName;
    return this.httpClient.get<Product[]>(endpoint);
  }
  getProductDetails(id:number):Observable<any>{
    const endpoint = this.productEndpoint + id;
    return this.httpClient.get<any>(endpoint);
  }
}
