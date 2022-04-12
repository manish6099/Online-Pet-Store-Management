package com.pms.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pms.pojos.AdminUser;
import com.pms.pojos.Authenticate;
import com.pms.services.AdminUserServiceImpl;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api")
public class AdminController {

	@Autowired
	private AdminUserServiceImpl adminUserServiceImpl;
	
	@PostMapping("/adminlogin")
	public AdminUser adminLogin(@RequestBody Authenticate auth ) {
		return adminUserServiceImpl.authenticateAdmin(auth.getUsername(),auth.getPassword());
	}
	
}
