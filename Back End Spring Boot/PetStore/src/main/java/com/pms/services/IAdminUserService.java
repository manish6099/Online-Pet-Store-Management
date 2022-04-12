package com.pms.services;

import com.pms.pojos.AdminUser;

public interface IAdminUserService {
	
	public AdminUser signUpAdmin(AdminUser adminuser);//signup to add new admin 
	public AdminUser authenticateAdmin(String email, String password);
}
