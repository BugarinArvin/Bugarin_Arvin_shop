package com.bugarin.arvin.shop.service;

import com.bugarin.arvin.shop.model.Customer;
import com.bugarin.arvin.shop.model.CustomerResponse;

public interface CustomerService {

	Iterable<Customer> findAllCustomers();

	Customer saveCustomer(Customer customer);

	CustomerResponse getCustomerByName(String name);
}
