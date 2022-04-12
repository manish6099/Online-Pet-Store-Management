package com.pms.services;

import java.util.List;

import com.pms.pojos.Customer;


public interface ICustomerService {
	public List<Customer> getAllCustomer();
	public Customer getCustomerById(Integer id);
	public Customer updateCustomer(Customer customerToUpdate,Integer id);
	public void deleteCustomer(Integer id);
	public Customer addCustomer(Customer customer);
	public Customer authenticateCustomer(String email, String password);
}
