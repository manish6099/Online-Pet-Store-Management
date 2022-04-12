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

import com.pms.pojos.Authenticate;
import com.pms.pojos.Customer;
import com.pms.services.CustomerServiceImpl;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api")
public class CustomerController {

	@Autowired
	private CustomerServiceImpl customerserviceimpl;
	
	//get all customers
	@GetMapping("/customers")
	public List<Customer> getAllCustomer() {
		return customerserviceimpl.getAllCustomer();
	}
	
	//get customer by id
	@GetMapping("/customers/{customerId}")
	public Customer getCustomerById(@PathVariable String customerId) {
		return customerserviceimpl.getCustomerById(Integer.parseInt(customerId));
	}
	
	//add customer
	@PostMapping(value = "/customers/add", consumes = {"application/json"}) 
	public Customer addCustomer(@RequestBody Customer customer) {
		return customerserviceimpl.addCustomer(customer);
	}
	
	//update customer
	@PutMapping(value="/customers/update/{customerId}",consumes = {"application/json"})
	public Customer updateCustomer(@RequestBody Customer customer, @PathVariable String customerId) {
		return customerserviceimpl.updateCustomer(customer, Integer.parseInt(customerId));
	}
	//delete customer
	@DeleteMapping("/customers/delete/{customerId}")
	public ResponseEntity<HttpStatus> deleteCustomer(@PathVariable String customerId){
		try {
			customerserviceimpl.deleteCustomer(Integer.parseInt(customerId));
			return new ResponseEntity<>(HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PostMapping("/customerlogin")
	public Customer customerLogin(@RequestBody Authenticate auth ) {
		return customerserviceimpl.authenticateCustomer(auth.getUsername(),auth.getPassword());
	}
	
}
