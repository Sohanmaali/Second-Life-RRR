package com.secondLife.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.secondLife.entity.ScrapeCategories;
import com.secondLife.service.CategoriesService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class CategoriesController {

	@Autowired
	CategoriesService categoriesService;

	@GetMapping("/user/get-product-categories")

//	@PreAuthorize("hasAnyAuthority('ROLE_USER', 'ROLE_ADMIN')")
	public ResponseEntity<List<?>> getScrapProducts() {
		System.out.println("Calling ");
		List<ScrapeCategories> scrapeCategories = this.categoriesService.getAllCategories();
		if (scrapeCategories == null)
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		return ResponseEntity.ok().body(scrapeCategories);
	}
}
