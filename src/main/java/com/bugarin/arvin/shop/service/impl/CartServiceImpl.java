package com.bugarin.arvin.shop.service.impl;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.bugarin.arvin.shop.model.Cart;
import com.bugarin.arvin.shop.model.CartItem;
import com.bugarin.arvin.shop.repository.CartItemRepository;
import com.bugarin.arvin.shop.repository.CartRepository;
import com.bugarin.arvin.shop.service.CartService;

@Service
public class CartServiceImpl implements CartService {

	private Logger logger = LoggerFactory.getLogger(CartServiceImpl.class);
	
	@Autowired
	CartRepository cartRepository;
	
	@Autowired
	CartItemRepository cartItemRepository;
	
	@Override
	public Iterable<Cart> findAllCarts() {
		return cartRepository.findAll();
	}

	@Override
	public Cart saveCart(Cart cart) {
		return cartRepository.save(cart);
	}

	@Override
	public ResponseEntity<Object> updateCart(Long cartId, Cart cart) {
	Optional<Cart> cartOptional = cartRepository.findById(cartId);
		if (!cartOptional.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		cartItemRepository.deleteByCartId(cartId);
		cart.setId(cartId);
		cartRepository.save(cart);
		logger.info("cart updated: {}", cart);

		return ResponseEntity.status(HttpStatus.OK).body("Cart Successfully Updated");
	}

}
