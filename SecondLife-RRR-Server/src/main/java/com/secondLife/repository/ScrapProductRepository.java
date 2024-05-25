package com.secondLife.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.secondLife.entity.ScrapProduct;

public interface ScrapProductRepository extends JpaRepository<ScrapProduct, Long> {

	@Query("SELECT p FROM ScrapProduct p WHERE p.user.id = :userId")
	public List<ScrapProduct> findAllProductsByUserId(Long userId);
	
	@Query("SELECT p FROM ScrapProduct p")
	 List<ScrapProduct> findAllProduct();
}
