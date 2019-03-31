package com.bugarin.arvin.shop.repository;

import org.springframework.data.repository.CrudRepository;

import com.bugarin.arvin.shop.model.Customer;

public interface CustomerRepository extends CrudRepository<Customer, Long>{

}
