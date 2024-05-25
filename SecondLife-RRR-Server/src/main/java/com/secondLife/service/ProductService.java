package com.secondLife.service;

import java.util.List;

import com.secondLife.entity.ScrapProduct;

public interface ProductService {

	public ScrapProduct addProduct(ScrapProduct scrapProduct);

	public List<ScrapProduct> getProducts(Long id);

	public void deleteProduct(Long id);

	public ScrapProduct updateProduct(ScrapProduct scrapProduct);
//	public Product addProduct(Product product);

	public ScrapProduct getProduct(Long id);

	public List<ScrapProduct> getAllProduct();
}
