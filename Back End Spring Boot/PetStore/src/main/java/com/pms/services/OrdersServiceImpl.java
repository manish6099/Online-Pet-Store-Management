package com.pms.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.dao.OrdersRepository;
import com.pms.exceptions.ErrorInSavingException;
import com.pms.exceptions.NotFoundException;
import com.pms.pojos.Orders;

@Service
public class OrdersServiceImpl implements IOrdersService {

	@Autowired
	private OrdersRepository OrdersRepository;

	@Override
	public List<Orders> getAllOrders() {
		List<Orders> Orders = new ArrayList<>();
		Orders = OrdersRepository.findAll();
		if (Orders.size() == 0) {
			throw new NotFoundException("Orders Not Found!!!");
		} else {
			return Orders;
		}
		
		
	}

	@Override
	public Orders getOrdersById(Integer id) {
		Optional<Orders> Orders = OrdersRepository.findById(id);
		if (Orders.isPresent())
			return Orders.get();
		else
			throw new NotFoundException("Order Not Found!!!");
	}

	@Override
	public Orders updateOrders(Orders ordersToUpdate, Integer id) {
		Optional<Orders> foundOrders = OrdersRepository.findById(id);
		if (foundOrders.isPresent()) {
			return OrdersRepository.save(ordersToUpdate);
		} else
			throw new NotFoundException("Order Not Found!!!");
	}

	@Override
	public void deleteOrders(Integer id) {
		Optional<Orders> foundOrders = OrdersRepository.findById(id);
		if (foundOrders.isPresent()) {
			OrdersRepository.deleteById(id);
		} else
			throw new NotFoundException("Orders Not Found!!!");

	}

	@Override
	public Orders addOrders(Orders orders) {
		return OrdersRepository.save(orders);
	}

}
