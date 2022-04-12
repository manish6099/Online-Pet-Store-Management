package com.pms.services;

import java.util.List;

import com.pms.pojos.Cart;

public interface ICartService {
	public List<Cart> getAllCart();
	public Cart getCartById(Integer id);
	public Cart updateCart(Cart cartToUpdate,Integer id);
	public void deleteCart(Integer id);
	public Cart addCart(Cart cart);
}
