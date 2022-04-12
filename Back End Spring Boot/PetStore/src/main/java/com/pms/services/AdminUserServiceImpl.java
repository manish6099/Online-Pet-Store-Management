package com.pms.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.pojos.AdminUser;
import com.pms.dao.AdminUserRepository;

@Service
@Transactional
public class AdminUserServiceImpl implements IAdminUserService  {
	
	@Autowired
	private AdminUserRepository AdminUserRepository;
	
	@Override
	public AdminUser signUpAdmin(AdminUser adminuser){
		
		//save admin details
		return AdminUserRepository.save(adminuser);
	}
	@Override
	public AdminUser authenticateAdmin(String email, String pwd){
		
		AdminUser adminuser = AdminUserRepository.findByAdminEmailAndAdminPassword(email, pwd);
		if (adminuser==null) {
			return null;
		} else {
			return adminuser;
		}
		
		
	}

}
