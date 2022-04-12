package com.pms.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pms.pojos.Pet;
import com.pms.services.PetServiceImpl;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api")
public class PetController {

	@Autowired
	private PetServiceImpl petService;
	
	//get all pet
	@GetMapping("/pets")
	public List<Pet> getAllPet()
	{
		return petService.getAllPet();
	}
	
	//get pet By Id
	@GetMapping("/pets/category/{petCategoryId}")
	public List<Pet> getPetByCategoryId(@PathVariable String petCategoryId) 
	{
			return petService.findByPetCategoryRefId(Integer.parseInt(petCategoryId));
	}
	
	//get pet By Id
	@GetMapping("/pets/{petId}")
	public Pet getPetById(@PathVariable String petId) 
	{
		return petService.getPetById(Integer.parseInt(petId));
	}
	
	//Add pet
	@PostMapping(value="/pets/add",consumes = {"application/json"})
	public Pet addPet(@RequestBody Pet pet) 
	{
		return petService.addPet(pet);
	}
	
	//Update Pet
	@PutMapping(value="pets/update/{petId}",consumes = {"application/json"})
	public Pet updatePet(@RequestBody Pet pet,@PathVariable String petId) 
	{
		return petService.updatePet(pet, Integer.parseInt(petId));
	}
	
	//delete pet
	@DeleteMapping("/pets/delete/{petId}")
	public ResponseEntity<HttpStatus> deletePet(@PathVariable String petId){
		try {
			petService.deletePet(Integer.parseInt(petId));
			return new ResponseEntity<>(HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
