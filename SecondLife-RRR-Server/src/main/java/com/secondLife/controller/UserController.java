package com.secondLife.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.secondLife.entity.AuthRequest;
import com.secondLife.entity.ScrapProduct;
import com.secondLife.entity.User;
import com.secondLife.service.ProductService;
import com.secondLife.service.UserService;

@RestController
@RequestMapping("/auth")

@CrossOrigin(origins = "*")
//@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	private UserService userService;
	@Autowired
	private ProductService productService;
	
	@GetMapping("/welcome")
	public String welcome() {
		return "Welcome this endpoint is not secure";
	}

	@PostMapping("/add-user")
	public ResponseEntity<User> addNewUser(@RequestBody User user) {
		user.setRoles("ROLE_USER");
		System.out.println(user);
		user.setActive(true);
		return ResponseEntity.ok(userService.addUser(user));

	}

	
	@GetMapping("/admin/adminProfile")
	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	public String adminProfile() {
		return "Welcome to Admin Profile";
	}

	@PostMapping("/login")
	public ResponseEntity<?> userLogin(@RequestBody AuthRequest authRequest) {
		System.out.println(authRequest);
		return this.userService.login(authRequest);
	}

	@PostMapping("/user/user-ditails")
	public ResponseEntity<?> userDitails(@RequestBody AuthRequest authRequest) {
		System.out.println("user-ditails" + authRequest);

		User user = this.userService.getUserDitails(authRequest);
		System.out.println(user);
		if (user == null)
			ResponseEntity.badRequest();
		return ResponseEntity.ok().body(user);
	}

	
	@GetMapping("/get-scrap-products")
	public ResponseEntity<List<ScrapProduct>> getScrapProducts() {
		
		System.out.println("getScrapProducts");
		List<ScrapProduct> scrapProducts = productService.getAllProduct();
//		System.out.println(scrapProducts);
		return ResponseEntity.ok().body(scrapProducts);
	}
}
