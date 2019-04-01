import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';
import { nextContext } from '@angular/core/src/render3';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.basketService.cartItems.next([]);
  }

}
