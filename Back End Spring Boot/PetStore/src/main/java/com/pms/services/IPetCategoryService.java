package com.pms.services;

import java.util.List;

import com.pms.pojos.PetCategory;

public interface IPetCategoryService {
	public List<PetCategory> getAllPetCategory();
	public PetCategory getPetCategoryById(Integer id);
	public PetCategory updatePetCategory(PetCategory petCategoryToUpdate,Integer id);
	public void deletePetCategory(Integer id);
	public PetCategory addPetCategory(PetCategory petcategory);
}
