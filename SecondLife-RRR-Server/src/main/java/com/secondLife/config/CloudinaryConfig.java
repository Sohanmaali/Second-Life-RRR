package com.secondLife.config;

import java.util.HashMap;
import java.util.Map;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.cloudinary.*;

@Configuration
public class CloudinaryConfig {

	@Bean
	public Cloudinary getCloudinary() {
		Map<String, String> map = new HashMap<>();

		map.put("cloud_name", "dzl6spzes");
		map.put("api_key", "661211926995314");
		map.put("api_secret", "kmAGOeRSrY96YsA6AacaI3DPT_k");
//		map.put("secure", true);

		return new Cloudinary(map);
	}

}
