import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { BasketService } from 'src/app/services/basket.service';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})

export class ShoppingBasketComponent implements OnInit {

  cartItems: CartItem[];
  totalPrice = 0;
  customer: Customer;

  constructor(
    private basketService: BasketService,
    private customerService: CustomerService,
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.basketService.cartItems.subscribe(data => {
      this.getTotalPrice(data);
    })
    this.getCustomer();
  }

  private getCustomer() {
    this.customer = this.customerService.customer;
    if (this.isEmpty(this.customer)) {
      this.customer = JSON.parse(sessionStorage.getItem('customer'));
      this.customerService.customer = this.customer;
    }
  }

  private getTotalPrice(data: CartItem[]) {
    let price = 0;
    this.cartItems = data;
    this.cartItems.forEach(x => {
      price += x.price;
    });
    this.totalPrice = price;
  }

  removeItem(cartItem: CartItem) {
    if (cartItem.quantity === 1) {
      this.basketService.cartItems.next(this.cartItems.filter(x => x.product.name != cartItem.product.name));
    }
    cartItem.quantity -= 1;
    cartItem.price -= cartItem.product.price;
    this.getTotalPrice(this.cartItems);
  }

  addItem(cartItem: CartItem) {
    cartItem.quantity += 1;
    cartItem.price += cartItem.product.price;
    this.getTotalPrice(this.cartItems);
  }


  emptyCart() {
    this.basketService.cartItems.next([]);
  }

  submitOrder() {
    this.orderService.submitOrder(this.customerService.customer, this.cartItems).subscribe(data => {
    })
    this.router.navigate(["checkout"]);
  }

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

}
