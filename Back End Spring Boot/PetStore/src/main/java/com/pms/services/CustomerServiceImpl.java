package com.pms.services;

import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.dao.CustomerRepository;
import com.pms.exceptions.NotFoundException;
import com.pms.pojos.AdminUser;
import com.pms.pojos.Customer;

@Service
@Transactional
public class CustomerServiceImpl implements ICustomerService {

	@Autowired
	private CustomerRepository CustomerRepository;

	@Override
	public List<Customer> getAllCustomer() {
		List<Customer> Customers = new ArrayList<>();
		Customers = CustomerRepository.findAll();
		if (Customers.size() == 0) {
			throw new NotFoundException("Customer Not Found!!!");
		} else {
			return Customers;
		}
	}

	@Override
	public Customer getCustomerById(Integer id) {
		Optional<Customer> Customer = CustomerRepository.findById(id);
		if (Customer.isPresent())
			return Customer.get();
		else
			throw new NotFoundException("Customer Not Found!!!");
	}

	@Override
	public Customer updateCustomer(Customer customerToUpdate, Integer id) {
		Optional<Customer> foundCustomer = CustomerRepository.findById(id);
		if (foundCustomer.isPresent()) {
			return CustomerRepository.save(customerToUpdate);
		} else
			throw new NotFoundException("Customer Not Found!!!");
	}

	@Override
	public void deleteCustomer(Integer id) {

		Optional<Customer> foundCustomer = CustomerRepository.findById(id);
		if (foundCustomer.isPresent()) {
			CustomerRepository.deleteById(id);
		} else
			throw new NotFoundException("Customer Not Found!!!");

	}

	@Override
	public Customer addCustomer(Customer customer) {
		return CustomerRepository.save(customer);
	}

	@Override
	public Customer authenticateCustomer(String email, String password) {
		Customer customer = CustomerRepository.findByCustomerEmailAndCustomerPassword(email, password);
		if (customer==null) {
			return null;
		} else {
			return customer;
		}
	}

}
