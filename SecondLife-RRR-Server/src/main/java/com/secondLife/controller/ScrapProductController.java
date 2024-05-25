package com.secondLife.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.secondLife.entity.ScrapProduct;
import com.secondLife.entity.User;
import com.secondLife.repository.UserRepository;
import com.secondLife.service.ProductService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/auth")

//@CrossOrigin(origins = "*")
@CrossOrigin(origins = "http://localhost:3000")
public class ScrapProductController {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private ProductService productService;

	// ADD PRODUCT

	@PostMapping("/user/add-scrap-product")
	@PreAuthorize("hasAuthority('ROLE_USER')")
	public ResponseEntity<ScrapProduct> addScrapProduct(@RequestBody ScrapProduct scrapProduct, Principal principal) {
		System.out.println(principal.getName() + "   user name");
		User user = this.userRepository.findByEmail(principal.getName()).get();

		System.out.println("Scrap Products user " + user);
		scrapProduct.setUser(user);
		ScrapProduct p = this.productService.addProduct(scrapProduct);
		if (p == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
		return ResponseEntity.ok(p);
	}

	// GET USER ALL PRODUCT

	@GetMapping("/user/get-scrap-products")
	@PreAuthorize("hasAuthority('ROLE_USER')")
	public ResponseEntity<List<ScrapProduct>> getScrapProducts(Principal principal) {
		try {
			// Find the user by email
			String userEmail = principal.getName();
			User user = userRepository.findByEmail(userEmail).orElse(null);

			if (user == null) {
				return ResponseEntity.notFound().build();
			}

			// Get products for the user
			List<ScrapProduct> scrapProducts = productService.getProducts(user.getId());

			if (scrapProducts.isEmpty()) {
				return ResponseEntity.noContent().build(); // Return 204 No Content
			}

			return ResponseEntity.ok().body(scrapProducts); // Return products
		} catch (Exception e) {
			e.printStackTrace(); // Log the exception
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build(); // Return 500 Internal Server Error
		}
	}

	// GET ONE PRODUCT

	@GetMapping("/user/get-scrap-product/{id}")
	@PreAuthorize("hasAuthority('ROLE_USER')")
	public ResponseEntity<ScrapProduct> getScrapProduct(@PathVariable Long id, Principal principal) {
		// Get authenticated user
		User user = this.userRepository.findByEmail(principal.getName()).orElse(null);

		// Check if the user is authenticated
		if (user == null) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}

		// Retrieve the product by ID
		ScrapProduct scrapProduct = this.productService.getProduct(id);

		// Check if the product exists
		if (scrapProduct == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}

		// Check if the product belongs to the authenticated user
		if (!scrapProduct.getUser().getId().equals(user.getId())) {
			System.out.println("YOU ARE NOT AUTHENTICATED");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}

		// Return the product if it belongs to the authenticated user
		return ResponseEntity.ok(scrapProduct);
	}

	// DELETE PRODUCT

	@DeleteMapping("/user/delete-scrap-product/{id}")
	@PreAuthorize("hasAuthority('ROLE_USER')")
	public void deleteScrapProduct(@PathVariable Long id) {
		this.productService.deleteProduct(id);
//		return ResponseEntity.ok(p);
	}

}
