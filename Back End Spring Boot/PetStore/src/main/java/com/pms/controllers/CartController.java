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

import com.pms.pojos.Cart;
import com.pms.services.CartServiceImpl;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api")
public class CartController {

	@Autowired
	private CartServiceImpl cartService;
	
	//get all cart
	@GetMapping("/cart")
	public List<Cart> getAllCart()
	{
		return cartService.getAllCart();
	}
	
	//get cart By id
	@GetMapping("/cart/{cartId}")
	public Cart getCartById(@PathVariable String cartId) 
	{
		return cartService.getCartById(Integer.parseInt(cartId));
	}
	
	//Add cart
	@PostMapping(value="/cart/add",consumes = {"application/json"})
	public Cart addCart(@RequestBody Cart cart) 
	{
		return cartService.addCart(cart);
	}
	
	//Update cart
	@PutMapping(value="cart/update/{cartId}",consumes = {"application/json"})
	public Cart updateCart(@RequestBody Cart cart,@PathVariable String cartId) 
	{
		return cartService.updateCart(cart, Integer.parseInt(cartId));
	}
	
	//delete cart
	@DeleteMapping("/cart/delete/{cartId}")
	public ResponseEntity<HttpStatus> deleteCart(@PathVariable String cartId){
		try {
			cartService.deleteCart(Integer.parseInt(cartId));
			return new ResponseEntity<>(HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
