package com.pms.services;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.dao.PetRepository;
import com.pms.exceptions.NotFoundException;
import com.pms.pojos.Pet;

@Service
public class PetServiceImpl implements IPetService{
	@Autowired
	private PetRepository PetRepository;

	@Override
	//Can be accessed by admin and Customer
	public List<Pet> getAllPet() {
		List<Pet> Pet = new ArrayList<>();
		Pet = PetRepository.findAll();
		if (Pet.size() == 0) {
			throw new NotFoundException("Pet Not Found!!!");
		} else {
			return Pet;
		}
	}

	@Override
	//Can be accessed by admin and Customer by Id
	public Pet getPetById(Integer id) {
		Optional<Pet> Pet = PetRepository.findById(id);
		if (Pet.isPresent())
			return Pet.get();
		else
			throw new NotFoundException("Pet Not Found!!!");
	}

	@Override
	public Pet updatePet(Pet petToUpdate, Integer id) {
		Optional<Pet> foundPet = PetRepository.findById(id);
		if (foundPet.isPresent()) {
			return PetRepository.save(petToUpdate);
		} else
			throw new NotFoundException("Pet Not Found!!!");

	}

	@Override
	public void deletePet(Integer id) {
		Optional<Pet> foundPet = PetRepository.findById(id);
		if (foundPet.isPresent()) {
			PetRepository.deleteById(id);
		} else
			throw new NotFoundException("Pet Not Found!!!");
		
	}

	@Override
	public Pet addPet(Pet pet) {
		return PetRepository.save(pet);
	}

	@Override
	public List<Pet> findByPetCategoryRefId(Integer id) {
		
		List<Pet> Pet = new ArrayList<>();
		Pet = PetRepository.findByPetCategoryRefId(id);
		if (Pet.size() == 0) {
			throw new NotFoundException("Pet Category Not Found!!!");
		} else {
			return Pet;
		}
	}

}
