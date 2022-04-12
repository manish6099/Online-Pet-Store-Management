package com.pms.services;

import java.util.List;

import com.pms.pojos.Orders;


public interface IOrdersService {
	public List<Orders> getAllOrders();
	public Orders getOrdersById(Integer id);
	public Orders updateOrders(Orders ordersToUpdate,Integer id);
	public void deleteOrders(Integer id);
	public Orders addOrders(Orders orders);
}
