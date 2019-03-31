import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../model/cart-item';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  public cartItems: BehaviorSubject<CartItem[]> = new BehaviorSubject([]);

  constructor() { }

  
}
