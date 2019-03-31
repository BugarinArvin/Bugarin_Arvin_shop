package com.bugarin.arvin.shop.service;

import org.springframework.http.ResponseEntity;

import com.bugarin.arvin.shop.model.Cart;

public interface CartService {

	Iterable<Cart> findAllCarts();

	Cart saveCart(Cart cart);

	ResponseEntity<Object> updateCart(Long cartId, Cart cart);
}
