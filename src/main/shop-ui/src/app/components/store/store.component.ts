import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/product';
import { BasketService } from 'src/app/services/basket.service';
import { CartItem } from 'src/app/model/cart-item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  public products: Product[];
  public cartItems: CartItem[];

  constructor(private productService: ProductService, private basketService: BasketService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    });

    this.basketService.cartItems.subscribe((data) => {
      this.cartItems = data;
    })
  }

  addProductToBasket(product: Product) {
    let productExists = false;
    this.cartItems.forEach(x => {
      if (x.product.name === product.name) {
        x.quantity += 1;
        x.price += product.price;
        productExists = true;
      }
    })
    if(!productExists){
      const cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      cartItem.price = product.price;
      this.cartItems.push(cartItem);
    }
    this.basketService.cartItems.next(this.cartItems);
  }

}
