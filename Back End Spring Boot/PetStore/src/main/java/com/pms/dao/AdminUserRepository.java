package com.pms.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pms.pojos.AdminUser;

@Repository
public interface AdminUserRepository extends JpaRepository<AdminUser, Integer> {
	@Query("select a from AdminUser a where a.adminEmail=:email and a.adminPassword= :pwd")
	AdminUser findByAdminEmailAndAdminPassword(@Param("email")String email, @Param("pwd")String pwd); 
}
