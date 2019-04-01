import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { HttpClient } from '@angular/common/http';
import { CartItem } from '../model/cart-item';
import { OrderRequest } from '../model/order-request';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiURL: string = 'http://localhost:8080/shop-cart/cart';
  customer: Customer = new Customer();

  constructor(private httpClient: HttpClient) { }

  public submitOrder(customer: Customer, cartItems: CartItem[]) {
    const request = new OrderRequest();
    request.customer = customer;
    request.items = cartItems;
    return this.httpClient.post(`${this.apiURL}`, request);
  }
}
