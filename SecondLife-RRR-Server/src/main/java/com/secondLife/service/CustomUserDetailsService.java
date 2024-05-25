package com.secondLife.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.secondLife.entity.User;
import com.secondLife.repository.UserRepository;

import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository repository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		Optional<User> userDetail = repository.findByEmail(username);

		// Converting userDetail to UserDetails
		return userDetail.map(CustomUserDetails::new)
				.orElseThrow(() -> new UsernameNotFoundException("User not found " + username));
	}
}
