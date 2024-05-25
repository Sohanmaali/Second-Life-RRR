package com.secondLife.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.secondLife.entity.User;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  
	Optional<User> findByName(String username);
	Optional<User> findByEmail(String email);
}
