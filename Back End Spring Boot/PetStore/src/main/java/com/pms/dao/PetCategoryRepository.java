package com.pms.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pms.pojos.PetCategory;

@Repository
public interface PetCategoryRepository extends JpaRepository<PetCategory, Integer> {

}
