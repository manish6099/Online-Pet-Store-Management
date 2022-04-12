package com.pms;

import java.time.LocalDate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.pms.dao.AdminUserRepository;
import com.pms.pojos.AdminUser;



@SpringBootApplication
public class PmsApplication {
	
	
	
	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(PmsApplication.class, args);
		
		
		AdminUserRepository adminRepository = context.getBean(AdminUserRepository.class);
		
		LocalDate date = LocalDate.now();
		
		
		
			AdminUser adminuser = new AdminUser();
			adminuser.setAdminEmail("admin@gmail.com");
			adminuser.setAdminPassword("admin");
			adminuser.setAdminAddress("Patna, Bihar");
			adminuser.setAdminFirstName("Manish");
			adminuser.setAdminImage(null);
			adminuser.setAdminLastName("Kumar");
			adminuser.setAdminMobile("1234567890");
			adminuser.setAdminRegDate(date);
			adminuser.setId(1);
			
			adminRepository.save(adminuser);
		
		
	}

}
