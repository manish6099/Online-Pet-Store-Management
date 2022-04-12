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

import com.pms.pojos.PetCategory;
import com.pms.services.PetCategoryServiceImpl;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api")
public class PetCategoryController {

	@Autowired
	private PetCategoryServiceImpl petCategoryService;
	
	//get all pet category
	@GetMapping("/petcategory")
	public List<PetCategory> getAllPetCategory()
	{
		return petCategoryService.getAllPetCategory();
	}
	
	//get pet category By Id
	@GetMapping("/petcategory/{petCategoryId}")
	public PetCategory getPetCategoryById(@PathVariable String petCategoryId) 
	{
		return petCategoryService.getPetCategoryById(Integer.parseInt(petCategoryId));
	}
	
	//Add pet category
	@PostMapping(value="/petcategory/add",consumes = {"application/json"})
	public PetCategory addPetCategory(@RequestBody PetCategory petcategory) 
	{
		return petCategoryService.addPetCategory(petcategory);
	}
	
	//Update Pet Category
	@PutMapping(value="petcategory/update/{petCategoryId}",consumes = {"application/json"})
	public PetCategory updatePet(@RequestBody PetCategory petCategory,@PathVariable String petCategoryId) 
	{
		return petCategoryService.updatePetCategory(petCategory, Integer.parseInt(petCategoryId));
	}
	
	//delete pet Category
	@DeleteMapping("/petcategory/delete/{petCategoryId}")
	public ResponseEntity<HttpStatus> deletePetCategory(@PathVariable String petCategoryId){
		try {
			petCategoryService.deletePetCategory(Integer.parseInt(petCategoryId));
			return new ResponseEntity<>(HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
