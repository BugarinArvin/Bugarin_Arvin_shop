import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})

export class ShoppingBasketComponent implements OnInit {

  cartItems: CartItem[];
  totalPrice = 0;


  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.basketService.cartItems.subscribe(data => {
      this.getTotalPrice(data);
    })
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


  emptyCart() {
    this.basketService.cartItems.next([]);
  }

}
