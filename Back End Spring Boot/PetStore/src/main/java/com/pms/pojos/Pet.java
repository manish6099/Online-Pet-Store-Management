package com.pms.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "pet")
public class Pet extends BaseEntity {

	@Column(length = 100, name = "pet_breed")
	private String petBreed;

	@Lob
	@Column(name = "pet_image")
	private String petImage;

	@Column(length = 20, name = "pet_color")
	private String petColor;

	@Column(name = "pet_age")
	private int petAge;

	@Column(length = 100, name = "pet_description")
	private String petDescription;

	@Column(name = "pet_cost_price")
	private double petCostPrice;
	
	@Column(name = "pet_MRP")
	private double petMRP;

	@Column(name="pet_quantity")
	private double petQuantity;
	
	@Column(name = "pet_discount")
	private double petDiscount;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "pet_category")
	private PetCategory petCategoryRef;
	

}
