package com.pms.pojos;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import lombok.Data;
import lombok.NoArgsConstructor;

@MappedSuperclass // to specify that following class will not have any table , BUT will acts ias a
					// common super class for all other entities
@NoArgsConstructor
@Data
public class BaseEntity {
	//common data members
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	

}
