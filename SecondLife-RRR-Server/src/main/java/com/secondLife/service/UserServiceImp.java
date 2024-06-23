package com.secondLife.service;

import java.security.Principal;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.secondLife.entity.AuthRequest;
import com.secondLife.entity.User;
import com.secondLife.repository.UserRepository;

@Service
public class UserServiceImp implements UserService {

	@Autowired
	private UserRepository repository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired

	private JwtService jwtService;

	@Override
	public User addUser(User user) {
		try {

			user.setActive(true);
			user.setPassword(this.passwordEncoder.encode(user.getPassword()));
			return this.repository.save(user);

		} catch (Exception e) {
			System.out.println(e);
		}
		return null;
	}

	@Override
	public User updateUser(int id) {

		return null;
	}

	@Override
	public User deleteUser(int id) {

		return null;
	}

	@Override
	public ResponseEntity<?> login(AuthRequest authRequest) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));
		if (authentication.isAuthenticated()) {
			String token = jwtService.generateToken(authRequest.getEmail());
			User user = this.repository.findByEmail(authRequest.getEmail()).orElseThrow();
			System.out.println(token + "  ------");
			user.setToken(token);
			// Only include necessary user information in the response
			User userDetails = new User();
			userDetails.setId(user.getId());
			userDetails.setName(user.getName());
			userDetails.setEmail(user.getEmail());
			userDetails.setRoles(user.getRoles());
			userDetails.setToken(token);
			HttpHeaders headers = new HttpHeaders();
			headers.add("Authorization", "Bearer " + token);
			return ResponseEntity.ok().headers(headers).body(userDetails);
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed");
		}
	}

	@Override
	public User getUserDitails(AuthRequest authRequest) {
		try {
			return this.repository.findByEmail(authRequest.getEmail()).orElseThrow();
		} catch (Exception e) {
			System.out.println(e);
		}
		return null;
	}

	@Override
	public ResponseEntity<?> changePassword(Map<String, String> user, Principal principal) {
		try {
			User u = this.repository.findByEmail(principal.getName()).orElseThrow();
			if (this.passwordEncoder.matches(user.get("oldPassword"), u.getPassword())) {
				// System.out.println("Password Match");
				u.setPassword(passwordEncoder.encode(user.get("newPassword")));
				repository.save(u);
				return ResponseEntity.ok("Password changed successfully");
			} else {
				return ResponseEntity.status(400).body("Invalid old password");
			}
		} catch (Exception e) {
			return ResponseEntity.status(500).body("An error occurred: " + e.getMessage());

		}
	}
}