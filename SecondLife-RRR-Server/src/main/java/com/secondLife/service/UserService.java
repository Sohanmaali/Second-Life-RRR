package com.secondLife.service;

import java.security.Principal;
import java.util.Map;

import org.springframework.http.ResponseEntity;

import com.secondLife.entity.AuthRequest;
import com.secondLife.entity.User;

public interface UserService {

	public User addUser(User user);

	public User updateUser(int id);

	public User deleteUser(int id);
	
	public ResponseEntity<?> login(AuthRequest authRequest);
	
	public User getUserDitails(AuthRequest authRequest);
	
	public ResponseEntity<?> changePassword(Map<String,String> user,Principal principal);
}
