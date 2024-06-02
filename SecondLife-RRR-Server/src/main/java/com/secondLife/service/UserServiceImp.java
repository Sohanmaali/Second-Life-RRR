package com.secondLife.service;

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
//			AuthRequest newAuthRequest = new AuthRequest();
			user.setToken(token);
			HttpHeaders headers = new HttpHeaders();
			headers.add("Authorization", "Bearer " + token);
			// Send the token as part of the response body
//			return ResponseEntity.ok().headers(headers).body(user);
			return ResponseEntity.ok().headers(headers).body(user);
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

}