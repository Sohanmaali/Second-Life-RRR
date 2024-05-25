package com.secondLife.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.secondLife.entity.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
