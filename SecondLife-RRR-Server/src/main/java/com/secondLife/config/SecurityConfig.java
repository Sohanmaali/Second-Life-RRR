package com.secondLife.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.secondLife.filter.JwtAuthFilter;
import com.secondLife.service.CustomUserDetailsService;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

	@Autowired
	private JwtAuthFilter authFilter;

	@Autowired
	private JwtAuthenticationEntryPoint authenticationEntryPoint;

	// User Creation
	@Bean
	public UserDetailsService userDetailsService() {
		return new CustomUserDetailsService();
	}

	// Configuring HttpSecurity
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

		http.csrf(csrf -> csrf.disable());

		http.authorizeHttpRequests(auth -> auth
				.requestMatchers("/auth/welcome", "/auth/addNewUser", "/auth/login","/auth/get-all-products", "/auth/**").permitAll());

		http.authorizeHttpRequests(auth -> auth.requestMatchers("/auth/user/**").authenticated());

		http.authorizeHttpRequests(auth -> auth.requestMatchers("/auth/admin/**").authenticated());

		http.sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

		http.addFilterBefore(authFilter, UsernamePasswordAuthenticationFilter.class);

		http.formLogin(form -> form.usernameParameter("email"));

		http.authenticationProvider(authenticationProvider());

		http.exceptionHandling(e -> e.authenticationEntryPoint(authenticationEntryPoint));

		return http.build();
	}

	// Password Encoding
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public AuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
		authenticationProvider.setUserDetailsService(userDetailsService());
		authenticationProvider.setPasswordEncoder(passwordEncoder());
		return authenticationProvider;
	}

	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
		return config.getAuthenticationManager();
	}

	private Authentication authenticationProvider(Authentication authentication1) {
		return null;
	}

}
