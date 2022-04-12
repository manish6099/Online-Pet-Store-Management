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

import com.pms.pojos.Orders;
import com.pms.services.OrdersServiceImpl;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api")
public class OrdersController {

	@Autowired
	private OrdersServiceImpl ordersService;
	
	//get all orders
	@GetMapping("/orders")
	public List<Orders> getAllOrders()
	{
		return ordersService.getAllOrders();
	}
	
	//get orders By Id
	@GetMapping("/orders/{orderId}")
	public Orders getOrdersById(@PathVariable String orderId) 
	{
		return ordersService.getOrdersById(Integer.parseInt(orderId));
	}
	
	//Add order
	@PostMapping(value="/orders/add",consumes = {"application/json"})
	public Orders addOrders(@RequestBody Orders orders) 
	{
		return ordersService.addOrders(orders);
	}
	
	//Update order
	@PutMapping(value="orders/update/{orderId}",consumes = {"application/json"})
	public Orders updateOrders(@RequestBody Orders orders,@PathVariable String orderId) 
	{
		return ordersService.updateOrders(orders, Integer.parseInt(orderId));
	}
	
	//delete order
	@DeleteMapping("/orders/delete/{orderId}")
	public ResponseEntity<HttpStatus> deleteOrders(@PathVariable String orderId){
		try {
			ordersService.deleteOrders(Integer.parseInt(orderId));
			return new ResponseEntity<>(HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
