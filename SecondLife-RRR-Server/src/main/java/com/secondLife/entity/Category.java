//package com.secondLife.entity;
//
//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.Table;
//
//@Entity
//@Table(name = "category") // Specify the table name if it's different from the class name
//public class Category {
//
//	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
//	private Long id;
//
//	@Column(nullable = false, unique = true)
//	private String categoryName;
//
//	public Long getId() {
//		return id;
//	}
//
//	public void setId(Long id) {
//		this.id = id;
//	}
//
//	public String getCategoryName() {
//		return categoryName;
//	}
//
//	public void setCategoryName(String categoryName) {
//		this.categoryName = categoryName;
//	}
//
//}
