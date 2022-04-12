package com.pms.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.dao.PetCategoryRepository;
import com.pms.exceptions.NotFoundException;
import com.pms.pojos.PetCategory;

@Service
public class PetCategoryServiceImpl implements IPetCategoryService {

	@Autowired
	private PetCategoryRepository PetCategoryRepository;

	@Override
	public List<PetCategory> getAllPetCategory() {
		List<PetCategory> PetCategory = new ArrayList<>();
		PetCategory = PetCategoryRepository.findAll();
		if (PetCategory.size() == 0) {
			throw new NotFoundException("Pet Category Not Found!!!");
		} else {
			return PetCategory;
		}
	}

	@Override
	public PetCategory getPetCategoryById(Integer id) {
		Optional<PetCategory> PetCategory = PetCategoryRepository.findById(id);
		if (PetCategory.isPresent())
			return PetCategory.get();
		else
			throw new NotFoundException("Pet Category Not Found!!!");
	}

	@Override
	public PetCategory updatePetCategory(PetCategory petCategoryToUpdate, Integer id) {
		Optional<PetCategory> foundPetCategory = PetCategoryRepository.findById(id);
		if (foundPetCategory.isPresent()) {
			return PetCategoryRepository.save(petCategoryToUpdate);
		} else
			throw new NotFoundException("Pet Category Not Found!!!");
	}

	@Override
	public void deletePetCategory(Integer id) {
		Optional<PetCategory> foundPetCategory = PetCategoryRepository.findById(id);
		if (foundPetCategory.isPresent()) {
			PetCategoryRepository.deleteById(id);
		} else
			throw new NotFoundException("Pet Category Not Found!!!");

	}

	@Override
	public PetCategory addPetCategory(PetCategory petcategory) {
		return PetCategoryRepository.save(petcategory);
	}

}
