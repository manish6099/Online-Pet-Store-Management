package com.pms.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class ErrorInSavingException extends RuntimeException {
private static final long serialVersionUID = 1L;
	
	public ErrorInSavingException(String errMsg) {
		super(errMsg);
	}
}
