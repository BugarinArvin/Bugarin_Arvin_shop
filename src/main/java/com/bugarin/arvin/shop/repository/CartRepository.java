package com.bugarin.arvin.shop.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.bugarin.arvin.shop.model.Cart;
import com.bugarin.arvin.shop.model.Customer;

public interface CartRepository extends CrudRepository<Cart, Long>{
	List<Cart> findByCustomerId(Long id);
}
