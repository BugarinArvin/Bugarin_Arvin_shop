package com.bugarin.arvin.shop.controller;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bugarin.arvin.shop.model.Cart;
import com.bugarin.arvin.shop.repository.CartItemRepository;
import com.bugarin.arvin.shop.service.CartService;

@RestController
@RequestMapping("/shop-cart")
public class CartController {
	
	private Logger logger = LoggerFactory.getLogger(CartController.class);
	
	@Autowired
	CartService cartService; 
	
	@Autowired
	CartItemRepository cartItemRepository;
	
	@GetMapping("/carts")
	public Iterable<Cart> getAllCarts() {
	    return cartService.findAllCarts();
	}
	
	@PostMapping("/cart")
	public Cart createCart(@Valid @RequestBody Cart cart) {
	    return cartService.saveCart(cart);
	}
	
	@PutMapping("/cart/{id}")
	@Transactional
	public ResponseEntity<Object> updateCart(@RequestBody Cart cart, @PathVariable long id) {
		return cartService.updateCart(id, cart);
	}

}
