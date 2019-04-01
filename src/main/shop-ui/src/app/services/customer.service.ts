import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer';
import { CustomerResponse } from '../model/customer-response';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiURL: string = 'http://localhost:8080/shop-customer/customer';
  customer: Customer = new Customer();
  
  constructor(private httpClient: HttpClient) { }

  public createCustomer(customer: Customer) {
    return this.httpClient.post<Customer>(`${this.apiURL}`, customer);
  }

  public getCustomer(customerName: string) {
    return this.httpClient.get<CustomerResponse>(`${this.apiURL}/` + customerName);
  }
}
