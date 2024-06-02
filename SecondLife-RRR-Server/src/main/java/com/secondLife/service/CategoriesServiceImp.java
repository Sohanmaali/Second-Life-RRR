package com.secondLife.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.secondLife.repository.ScrapeCategoriesRepository;
import com.secondLife.entity.ScrapeCategories;

@Service
public class CategoriesServiceImp implements CategoriesService {

	@Autowired
	private ScrapeCategoriesRepository categoriesRepository;

	@Override
	public List<ScrapeCategories> getAllCategories() {

		try {

			List<ScrapeCategories> scrapeCategories = this.categoriesRepository.findAll();
			return scrapeCategories;
		} catch (Exception e) {
			System.out.println(e);
		}
		return null;
	}

	@Override
	public void getCategory() {

	}

	@Override
	public void deleteCategory() {

	}

	@Override
	public void updateCategory() {

	}

}
