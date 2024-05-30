package com.secondLife.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
//@CrossOrigin(origins = "http://localhost:3000")

public class Controller {
	@GetMapping("/testone")
	public String logout() {
		System.out.println("user logout");

	return "Its working";
	}
}
