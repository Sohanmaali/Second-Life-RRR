package com.secondLife.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;

@Service
public class CloudnaryImageServiceImp implements CloudnaryImageService {

	@Autowired
	private Cloudinary cloudinary;

	@Override
	public Map<String, String> upload(MultipartFile multipartFile) {
		try {
			@SuppressWarnings("unchecked")
			Map<String, String> data = this.cloudinary.uploader().upload(multipartFile.getBytes(), Map.of());
			return data;
		} catch (Exception e) {
			System.out.println(e);
		}
		return null;
	}

}
