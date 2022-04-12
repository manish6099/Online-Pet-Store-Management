package com.pms.pojos;


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
@Table(name = "pet_category")
public class PetCategory extends BaseEntity {

	@Column(length = 50, name = "pet_category_name")
	private String petCategoryName;
	
	@Lob
	@Column(name = "pet_image")
	private String petImage;


}
