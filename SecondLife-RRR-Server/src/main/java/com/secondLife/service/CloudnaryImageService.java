package com.secondLife.service;

import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

public interface CloudnaryImageService {

	public Map<String, String> upload(MultipartFile file);
}
