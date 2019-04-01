import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { Order } from 'src/app/model/order';
import { CartItem } from 'src/app/model/cart-item';

@Component({
  selector: 'app-order-pipeline',
  templateUrl: './order-pipeline.component.html',
  styleUrls: ['./order-pipeline.component.css']
})
export class OrderPipelineComponent implements OnInit {

  customer: Customer;
  orders: Order[] = [];

  constructor(
    private orderService: OrderService,
    private customerService: CustomerService
  ) { }

  ngOnInit() {

    this.getCustomer();
    this.orderService.getAllOrdersByCustomer(this.customer.id).subscribe(data => {
      this.orders = data;
    })
  }

  private getCustomer() {
    this.customer = this.customerService.customer;
    if (this.isEmpty(this.customer)) {
      this.customer = JSON.parse(sessionStorage.getItem('customer'));
      this.customerService.customer = this.customer;
    }
  }

  getTotalPrice(items: CartItem[]) {
    let totalPrice = 0;
    items.forEach(x => {
      totalPrice += x.price;
    })
    return totalPrice;
  }

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

}
