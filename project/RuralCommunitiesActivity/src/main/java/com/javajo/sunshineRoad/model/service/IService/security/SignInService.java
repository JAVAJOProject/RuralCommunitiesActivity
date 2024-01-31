package com.javajo.sunshineRoad.model.service.IService.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface SignInService {
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException;
}