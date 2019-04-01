package com.bugarin.arvin.shop.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bugarin.arvin.shop.model.Customer;
import com.bugarin.arvin.shop.model.CustomerResponse;
import com.bugarin.arvin.shop.repository.CustomerRepository;
import com.bugarin.arvin.shop.service.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService {

	private static final String FAILED = "FAILED";
	private static final String SUCCESS = "SUCCESS";

	@Autowired
	CustomerRepository customerRepository;

	@Override
	public Iterable<Customer> findAllCustomers() {
		return customerRepository.findAll();
	}

	@Override
	public Customer saveCustomer(Customer customer) {
		return customerRepository.save(customer);
	}

	@Override
	public CustomerResponse getCustomerByName(String name) {
		List<Customer> customers = customerRepository.findByNameIgnoreCase(name);
		CustomerResponse customerResponse = new CustomerResponse();
		if (customers.size() > 0) {
			customerResponse.setCustomer(customers.get(0));
			customerResponse.setMessage(SUCCESS);
		} else {
			customerResponse.setMessage(FAILED);
		}
		return customerResponse;
	}

}
