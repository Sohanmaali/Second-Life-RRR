
package com.secondLife.entity;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.CascadeType;

@Entity
public class ScrapProduct {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String productName;
	private String description;

	@Enumerated(EnumType.STRING)
	private scrapCondition scrapCondition;

	public enum scrapCondition {
		GOOD, VERY_GOOD, EXCELLENT
	}

	@Enumerated(EnumType.STRING)
	private Status status;

	public enum Status {
		PENDING, ACCEPT, REJECT
	}

	private double price;
	private String thumbnail;
	private Date date;
	private String category;
	private double shippingCost;

	@OneToMany(mappedBy = "scrapProduct", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonManagedReference
	private List<Images> images;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "address_id", referencedColumnName = "id")
	@JsonManagedReference
	private Address address;

	@ManyToOne
	@JoinColumn(name = "user_id")
//	@JsonBackReference
	private User user;

	// Getters and Setters

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public scrapCondition getScrapCondition() {
		return scrapCondition;
	}

	public void setScrapCondition(scrapCondition scrapCondition) {
		this.scrapCondition = scrapCondition;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getThumbnail() {
		return thumbnail;
	}

	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public double getShippingCost() {
		return shippingCost;
	}

	public void setShippingCost(double shippingCost) {
		this.shippingCost = shippingCost;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Images> getImages() {
		return images;
	}

	public void setImages(List<Images> images) {
		this.images = images;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "ScrapProduct [id=" + id + ", productName=" + productName + ", description=" + description
				+ ", scrapCondition=" + scrapCondition + ", status=" + status + ", price=" + price + ", thumbnail="
				+ thumbnail + ", date=" + date + ", category=" + category + ", shippingCost=" + shippingCost
				+ ", images=" + images + ", address=" + address + ", user=" + user + "]";
	}

}
