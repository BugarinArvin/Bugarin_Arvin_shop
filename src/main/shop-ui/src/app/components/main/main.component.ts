import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private basketService: BasketService,
    private customerService: CustomerService,
    private router: Router
  ) { }
  ngOnInit() {
  }

  signout(){
    sessionStorage.clear();
    this.basketService.cartItems.next([]);
    this.customerService.customer=undefined;
    this.router.navigate(['login']);
  }

  hasSession(){
    if(sessionStorage.getItem('customer')){
      return true
    }
    return false;
  }

}
