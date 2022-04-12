package com.pms.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pms.pojos.Orders;

@Repository
public interface OrdersRepository extends JpaRepository<Orders, Integer> {

}
