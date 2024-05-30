package com.secondLife.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.secondLife.entity.ScrapProduct;
import com.secondLife.entity.User;
import com.secondLife.repository.UserRepository;
import com.secondLife.service.ProductService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
//@CrossOrigin(origins = "http://localhost:3000")
public class ScrapProductController {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ProductService productService;

    @PostMapping("/user/add-scrap-product")
	@PreAuthorize("hasAuthority('ROLE_USER')")
	public ResponseEntity<ScrapProduct> addScrapProduct(@RequestBody ScrapProduct scrapProduct, Principal principal) {
		System.out.println("add-scrap-product");
		User user = userRepository.findByEmail(principal.getName()).orElse(null);
		if (user == null) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
		scrapProduct.setUser(user);
		ScrapProduct addedProduct = productService.addProduct(scrapProduct);
		if (addedProduct == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
		System.out.println("Added Product  "+ addedProduct);
		return ResponseEntity.ok(addedProduct);
	}
    
//	@PostMapping("/user/add-scrap-product")
////	@PreAuthorize("hasAuthority('ROLE_USER')")
//	public ResponseEntity<ScrapProduct> addScrapProduct() {
//		System.out.println("Entering add-scrap-product method");
//
//	
//		return ResponseEntity.ok(null);
//	}

	@GetMapping("/user/get-scrap-products")
	@PreAuthorize("hasAuthority('ROLE_USER')")
	public ResponseEntity<List<ScrapProduct>> getScrapProducts(Principal principal) {
		User user = userRepository.findByEmail(principal.getName()).orElse(null);
		if (user == null) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
		List<ScrapProduct> scrapProducts = productService.getProducts(user.getId());
		return ResponseEntity.ok(scrapProducts);
	}

	@GetMapping("/user/get-scrap-product/{id}")
	@PreAuthorize("hasAuthority('ROLE_USER')")
	public ResponseEntity<ScrapProduct> getScrapProduct(@PathVariable Long id, Principal principal) {
		User user = userRepository.findByEmail(principal.getName()).orElse(null);
		if (user == null) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
		ScrapProduct scrapProduct = productService.getProduct(id);
		if (scrapProduct == null || !scrapProduct.getUser().getId().equals(user.getId())) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.ok(scrapProduct);
	}

	@DeleteMapping("/user/delete-scrap-product/{id}")
	@PreAuthorize("hasAuthority('ROLE_USER')")
	public ResponseEntity<Void> deleteScrapProduct(@PathVariable Long id) {
		productService.deleteProduct(id);
		return ResponseEntity.noContent().build();
	}
}
