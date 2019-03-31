package com.bugarin.arvin.shop.service;

import com.bugarin.arvin.shop.model.Product;

public interface ProductService {

	Iterable<Product> findAllProducts();

	Product saveProduct(Product product);

}
