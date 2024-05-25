package com.secondLife.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.secondLife.entity.Images;

public interface ImageRepository extends JpaRepository<Images, Long> {

}
