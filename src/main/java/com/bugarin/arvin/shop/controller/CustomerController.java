package com.bugarin.arvin.shop.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bugarin.arvin.shop.model.Customer;
import com.bugarin.arvin.shop.service.CustomerService;

@RestController
@RequestMapping("/shop-customer")
public class CustomerController {
	
	
	@Autowired
	CustomerService customerService;
	
	@GetMapping("/customers")
	public Iterable<Customer> getAllCustomers() {
	    return customerService.findAllCustomers();
	}
	
	@PostMapping("/customer")
	public Customer createCustomer(@Valid @RequestBody Customer customer) {
	    return customerService.saveCustomer(customer);
	}

}
