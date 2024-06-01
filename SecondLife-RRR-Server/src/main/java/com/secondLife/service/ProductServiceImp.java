package com.secondLife.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.secondLife.entity.Images;
import com.secondLife.entity.ScrapProduct;
import com.secondLife.repository.ScrapProductRepository;

@Service
public class ProductServiceImp implements ProductService {

	@Autowired
	private ScrapProductRepository scrapProductRepository;
//	@Autowired
//	private UserRepository userRepository;

	@Override
	public ScrapProduct addProduct(ScrapProduct scrapProduct) {

		try {
			if (scrapProduct.getAddress() != null) {
				scrapProduct.getAddress().setUser(scrapProduct.getUser());
			}
//			if (scrapProduct.getAddress() != null) {
//				scrapProduct.getAddress().setScrapProduct(scrapProduct);
//			}
			for (Images image : scrapProduct.getImages()) {
				image.setScrapProduct(scrapProduct);
			}
			return this.scrapProductRepository.save(scrapProduct);
		} catch (Exception e) {
			System.out.println(e);
			return null;
		}
	}

	@Override
	public void deleteProduct(Long id) {

		long x = id;
		this.scrapProductRepository.delete(this.scrapProductRepository.findById(x).get());
//		return null;
	}

	@Override
	public ScrapProduct updateProduct(ScrapProduct scrapProduct) {
		return null;
	}

	@Override
	public List<ScrapProduct> getProducts(Long id) {
		try {
			return this.scrapProductRepository.findAllProductsByUserId(id);
//			return this.productRepository.find
		} catch (Exception e) {
			return null;
		}
	}

	@Override
	public ScrapProduct getProduct(Long id) {
		try {

			return this.scrapProductRepository.findById(id).get();
//			return this.productRepository.find
		} catch (Exception e) {
			return null;
		}
	}

	@Override
	public List<ScrapProduct> getAllProduct() {
		try {
			System.out.println("getAllProducts() called");
//			System.out.println(productRepository.findAll());
			return scrapProductRepository.findAll();
		} catch (Exception e) {
			System.out.println("Error occurred while retrieving products: " + e.getMessage()); // Log the error
			e.printStackTrace(); // Print the stack trace for debugging purposes
		}
		return null; // Return an empty list to indicate failure
	}

}
