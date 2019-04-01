import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  customer: Customer;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private customerService: CustomerService,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      customerName: ['', Validators.required],
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const name = this.f.customerName.value;
    this.customerService.getCustomer(name.trim()).subscribe(data => {
      if (data.message === "SUCCESS") {
        this.customer = data.customer;
        this.saveSessionNavigate();
      } else {
        let customer = new Customer();
        customer.name = name.trim();
        this.customerService.createCustomer(customer).subscribe(data => {
          this.customer =data;
          this.saveSessionNavigate();
        }, error => {
          console.log("error in saving customer");
        })
      }
     
    },
      error => {
        console.log("error in getting customer data");
      })
  }

  private saveSessionNavigate() {
    sessionStorage.setItem('customer', JSON.stringify(this.customer));
    this.customerService.customer =this.customer;
    this.router.navigate(["store"]);
  }
}
