package com.secondLife.service;

import java.util.List;

import com.secondLife.entity.ScrapeCategories;

public interface CategoriesService {

	public List<ScrapeCategories> getAllCategories();

	public void getCategory();

	public void deleteCategory();

	public void updateCategory();

}
