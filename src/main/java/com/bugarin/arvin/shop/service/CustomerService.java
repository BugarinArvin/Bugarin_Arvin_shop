package com.bugarin.arvin.shop.service;

import com.bugarin.arvin.shop.model.Customer;

public interface CustomerService {

	Iterable<Customer> findAllCustomers();

	Customer saveCustomer(Customer customer);
}
