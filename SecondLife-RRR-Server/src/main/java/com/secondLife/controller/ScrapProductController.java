package com.secondLife.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.secondLife.entity.Images;
import com.secondLife.entity.ScrapProduct;

import com.secondLife.entity.User;
import com.secondLife.repository.UserRepository;
import com.secondLife.service.CloudnaryImageService;
import com.secondLife.service.ProductService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
//@CrossOrigin(origins = "http://localhost:3000")
public class ScrapProductController {

	ObjectMapper objectMapper = new ObjectMapper();
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ProductService productService;

//	===================================================

	@Autowired
	private CloudnaryImageService imageService;

//			===================================================

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

	@SuppressWarnings("unchecked")
	@PostMapping("/user/add-scrap-product")
	@PreAuthorize("hasAuthority('ROLE_USER')")
	public ResponseEntity<?> addScrapProduct(@RequestPart("data") String dataString,
			@RequestPart(value = "images", required = false) List<MultipartFile> images,
			@RequestPart(value = "productThumbnail", required = true) MultipartFile productThumbnail,
			Principal principal) throws Exception {
		System.out.println("dataString    ------" + dataString);
		System.out.println(productThumbnail.getOriginalFilename());
		try {
			// Retrieve the user from the repository using the principal's name
			User user = userRepository.findByEmail(principal.getName()).orElse(null);

			// Check if the user exists
			if (user == null) {
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
			}

			// Associate the user with the scrap product
			ScrapProduct product = objectMapper.readValue(dataString, ScrapProduct.class);
			product.setUser(user);

			Map<String, String> thumb = this.imageService.upload(productThumbnail);

			if (thumb == null)
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to upload images");

			// Saving Thumbnail
			product.setThumbnail((String) thumb.get("url"));

			// Process the images (if present)
			List<Images> imageUrls = new ArrayList<>();
			Map<String, String> imageUploadStatus = null; // Default to true

			if (images != null && !images.isEmpty()) {
				for (MultipartFile image : images) {
					Images img = new Images();
					img.setImageUrl(image.getOriginalFilename());
					imageUrls.add(img);
					imageUploadStatus = this.imageService.upload(image);
					img.setImageUrl((String) imageUploadStatus.get("url"));
				}
			}

			product.setImages(imageUrls);

			if (imageUploadStatus == null) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to upload images");
			}

			ScrapProduct addedProduct = productService.addProduct(product);
			if (addedProduct != null) {
				return ResponseEntity.ok().body(addedProduct);
			} else {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to add product");
			}

		} catch (Exception e) {
			System.out.println(e);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
//		return null;
	}

//	===============================================================================
//	@PostMapping("/upload")
//	public ResponseEntity<Map<String, String>> uploadImage(@RequestParam("image") MultipartFile file) {
//
//		@SuppressWarnings("unchecked")
//		Map<String, String> map = this.imageService.upload(file);
//
//		return new ResponseEntity<>(map, HttpStatus.OK);
//
//	}

}
