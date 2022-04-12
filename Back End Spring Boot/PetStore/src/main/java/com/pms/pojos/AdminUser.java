package com.pms.pojos;

import java.time.LocalDate;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="admin_user")
public class AdminUser extends BaseEntity {
	
	
	@Column(name="admin_email", length=50, unique=true)
	private String adminEmail;
	
	@Column(name="admin_passowrd", length = 100)
	private String adminPassword;
	
	@Column(length=50, name="admin_firstname")
	private String adminFirstName;
	
	@Column(length=50, name="admin_lastname")
	private String adminLastName;
	
	@Column(name="admin_mobile", length=10)
	private String adminMobile;
	
	@Column(length=100, name="admin_address")
	private String adminAddress;
	
	@Column(name="admin_registration_date")
	private LocalDate adminRegDate;
	
	@Lob
	@Column(name="admin_image")
	private byte[] adminImage;
	
}

