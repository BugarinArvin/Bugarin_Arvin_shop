package com.bugarin.arvin.shop.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bugarin.arvin.shop.model.Product;
import com.bugarin.arvin.shop.service.ProductService;

@RestController
@RequestMapping("/shop-product")
public class ProductController {
	
	
	@Autowired
	ProductService productService;
	
	@GetMapping("/products")
	public List<Product> getAllProducts() {
	    return (List<Product>) productService.findAllProducts();
	}
	
	@PostMapping("/product")
	public Product createProduct(@Valid @RequestBody Product product) {
	    return productService.saveProduct(product);
	}

}
