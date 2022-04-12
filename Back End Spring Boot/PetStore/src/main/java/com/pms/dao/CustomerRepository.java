package com.pms.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pms.pojos.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	@Query("select a from Customer a where a.customerEmail=:email and a.customerPassword= :pwd")
	Customer findByCustomerEmailAndCustomerPassword(@Param("email")String email, @Param("pwd")String pwd); 
}
