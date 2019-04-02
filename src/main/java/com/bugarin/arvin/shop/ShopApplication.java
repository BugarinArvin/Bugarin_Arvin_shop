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
			productService.saveProduct(new Product("Hanes Men's 4-Pack Comfortblend Dyed Briefs",
					"58% Cotton, 37% Polyester, 5% Spandex<br>\n" + "Imported<br>" + "Pull On closure<br>"
							+ "Machine Wash<br>" + "Comfort flex waistband keeps its shape wash after wash<br>",
					1000, "brief.jpg"));
			productService.saveProduct(new Product("Apple iPhone X (64GB) - Silver",
					"5. 8-inch Super Retina display (OLED) with HDR<br>"
							+ "IP67 water and dust resistant (max depth of 1m up to 30 mines)<br>"
							+ "Wireless charging—works with Qi chargers <br>"
							+ "iOS 12 with Emoji, Screen Time, Siri Shortcuts, and Group FaceTime",
					44950, "iphone.jpg"));
			productService.saveProduct(new Product("Garmin (010-01755-10 vivosmart 3)",
					"Smart Activity Tracker - Small/Medium, Black<br>"
							+ "Monitor wellness with all-day stress tracking and the relaxation-based breathing timer<br>"
							+ "1 Year Extended Warranty in Addition to the Included Full Manufacturer Warranty",
					3699.99, "garmin.jpg"));
			productService.saveProduct(new Product("Gillette Fusion5 ProGlide Men's Razor Blades",
					"12 blade refills<br>"
							+ "Gillette razors for men with 5 Anti-Friction blades. A shave you barely feel<br>"
							+ "Men's razor with Precision Trimmer on back—great for hard-to-reach areas and styling facial hair",
					2000, "gillette.jpg"));
			productService.saveProduct(new Product(
					"TOPMELON Women's Bustier Corset Sexy Girdle Waist Cincher with Garter Belt",
					"97%polyester，3%spandex.<br>"
							+ "Adjustable straps, hooks and eye closure.Comes with corset and adjustable garters( G-string and stockings not included).<br>"
							+ "Sexy Bustier and Corset with garter Belt.Perfect for party, celebration, wedding, birthday, dinner and show.",
					1000000, "topmelon.jpg"));
			productService.saveProduct(new Product("Diapers Pampers Swaddlers",
					"Size 1 (8-14 lb), 198 Count<br>" + "Disposable Baby Diapers Size 1<br>"
							+ "Newborn, 198 Count, ONE MONTH SUPPLY <br>"
							+ "2x softer with up to 12 hours of protection (vs. the every-day-of-the-year brand)",
					2499.5, "pampers.jpg"));
			productService.saveProduct(new Product("Nintendo Switch - Gray Joy-Con",
					"Introducing Nintendo Switch! In addition to providing single and multiplayer thrills at home, the Nintendo Switch system also enables gamers to play the same title wherever, whenever and with whomever they choose."
							+ "",
					15950, "nintendo.jpg"));
			productService.saveProduct(
					new Product("Top Secret Product", "This product is the best product in the world", 1, "none.jpg"));
		};
	}

}
