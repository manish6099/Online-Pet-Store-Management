package com.pms.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "customer")
public class Customer extends BaseEntity { 

	@Column(name = "cust_email", length = 50, unique = true)
	private String customerEmail;

	@Column(name = "cust_passowrd", length = 100)
	private String customerPassword;

	@Column(length = 50, name = "cust_firstname")
	private String customerFirstName;
	
	@Column(length = 50, name = "cust_lastname")
	private String customerLastName;

	@Column(name = "cust_mobile", length = 10)
	private String customerMobile;

	@Column(length = 100, name = "cust_address")
	private String customerAddress;

	@Column(name = "cust_registration_date")
	private LocalDate customerRegDate;

	@Lob
	@Column(name = "cust_image")
	private String customerImage;


}
