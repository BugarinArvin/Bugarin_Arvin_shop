package com.bugarin.arvin.shop.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.bugarin.arvin.shop.model.CartItem;

public interface CartItemRepository extends CrudRepository<CartItem, Long> {
	List<CartItem> findByCartId(Long id);

	List<CartItem> deleteByCartId(Long id);
}
