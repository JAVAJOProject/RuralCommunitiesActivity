package com.javajo.sunshineRoad.model.dto.security;

import org.springframework.security.crypto.password.PasswordEncoder;

public interface UserDTO {
    public void authorizeUser();
    public void passwordEncode(PasswordEncoder passwordEncoder);
    public void updateRefreshToken(String updateRefreshToken);
}