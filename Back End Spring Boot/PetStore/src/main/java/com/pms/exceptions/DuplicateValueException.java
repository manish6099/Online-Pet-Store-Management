package com.pms.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class DuplicateValueException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	public DuplicateValueException(String errMsg) {
		super(errMsg);
	}

}
