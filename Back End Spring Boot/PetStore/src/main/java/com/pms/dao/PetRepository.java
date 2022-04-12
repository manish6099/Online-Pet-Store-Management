package com.pms.dao;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pms.pojos.Pet;

@Repository
public interface PetRepository extends JpaRepository<Pet, Integer> {
	@Query("select a from Pet a where a.petCategoryRef.id = :pet_category_id")
	List<Pet> findByPetCategoryRefId(@Param("pet_category_id")Integer id);
}
