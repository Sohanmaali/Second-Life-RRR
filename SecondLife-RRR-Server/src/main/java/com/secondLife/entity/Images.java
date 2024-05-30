package com.secondLife.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Images {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String imageUrl;
	@ManyToOne
	@JoinColumn(name = "scrapProduct_id")
	@JsonBackReference
	private ScrapProduct scrapProduct;

	public Long getId() {
		return id;
	}

	public Images() {
		super();
	}

	public Images(Long id, String imageUrl, ScrapProduct scrapProduct) {
		super();
		this.id = id;
		this.imageUrl = imageUrl;
		this.scrapProduct = scrapProduct;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public ScrapProduct getScrapProduct() {
		return scrapProduct;
	}

	public void setScrapProduct(ScrapProduct scrapProduct) {
		this.scrapProduct = scrapProduct;
	}

}
