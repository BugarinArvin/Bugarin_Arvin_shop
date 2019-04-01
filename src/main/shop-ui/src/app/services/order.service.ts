import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { HttpClient } from '@angular/common/http';
import { CartItem } from '../model/cart-item';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiURL: string = 'http://localhost:8080/shop-cart';
  customer: Customer = new Customer();

  constructor(private httpClient: HttpClient) { }

  public submitOrder(customer: Customer, cartItems: CartItem[]) {
    const request = new Order();
    request.customer = customer;
    request.items = cartItems;
    return this.httpClient.post(`${this.apiURL}/cart`, request);
  }

  public getAllOrdersByCustomer(customerId: number) {
    return this.httpClient.get<Order[]>(`${this.apiURL}/carts/` + customerId);
  }
}
