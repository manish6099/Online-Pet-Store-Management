package com.pms.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.dao.CartRepository;
import com.pms.exceptions.NotFoundException;
import com.pms.pojos.Cart;

@Service
public class CartServiceImpl implements ICartService {

	@Autowired
	private CartRepository CartRepository;

	@Override
	public List<Cart> getAllCart() {
		List<Cart> Cart = new ArrayList<>();
		Cart = CartRepository.findAll();
		if (Cart.size() == 0) {
			throw new NotFoundException("Cart Not Found!!!");
		} else {
			return Cart;
		}
	}

	@Override
	public Cart getCartById(Integer id) {
		Optional<Cart> Cart = CartRepository.findById(id);
		if (Cart.isPresent())
			return Cart.get();
		else
			throw new NotFoundException("Cart Not Found!!!");
	}

	@Override
	public Cart updateCart(Cart cartToUpdate, Integer id) {
		Optional<Cart> foundCart = CartRepository.findById(id);
		if (foundCart.isPresent()) {
			return CartRepository.save(cartToUpdate);
		} else
			throw new NotFoundException("Cart Not Found!!!");
		
	}
		

	@Override
	public void deleteCart(Integer id) {
		Optional<Cart> foundCart = CartRepository.findById(id);
		if (foundCart.isPresent()) {
			CartRepository.deleteById(id);
		} else
			throw new NotFoundException("Cart Not Found!!!");
	}

	@Override
	public Cart addCart(Cart cart) {
		return CartRepository.save(cart);
	}

}
