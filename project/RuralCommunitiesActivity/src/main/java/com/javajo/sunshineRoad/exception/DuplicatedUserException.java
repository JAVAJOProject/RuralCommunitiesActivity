package com.javajo.sunshineRoad.exception;

import org.springframework.dao.DataIntegrityViolationException;

public class DuplicatedUserException extends DataIntegrityViolationException {
    public DuplicatedUserException(String msg) {
        super(msg);
    }
}