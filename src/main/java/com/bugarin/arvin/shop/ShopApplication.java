package com.bugarin.arvin.shop;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.bugarin.arvin.shop.model.Product;
import com.bugarin.arvin.shop.service.ProductService;

@SpringBootApplication
public class ShopApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShopApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(ProductService productService) {
		return args -> {
			productService.saveProduct(new Product("TV", "Sony", 5000, "tv.jpeg"));
		};
	}

}
