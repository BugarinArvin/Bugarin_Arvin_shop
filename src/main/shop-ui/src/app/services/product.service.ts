import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiURL: string = 'http://localhost:8080/shop-product';

  constructor(private httpClient: HttpClient) { }

  public getProducts() {
    return this.httpClient.get<Product[]>(`${this.apiURL}/products`);
  }
}
