package com.pms.services;

import java.util.List;

import com.pms.pojos.Pet;

public interface IPetService {
	public List<Pet> getAllPet();//customer and admin 
	public Pet getPetById(Integer id);//customer and admin
	public Pet updatePet(Pet petToUpdate,Integer id);//admin
	public void deletePet(Integer id);//admin
	public Pet addPet(Pet pet);//admin
	public List<Pet> findByPetCategoryRefId(Integer id);//search pet by category
}
