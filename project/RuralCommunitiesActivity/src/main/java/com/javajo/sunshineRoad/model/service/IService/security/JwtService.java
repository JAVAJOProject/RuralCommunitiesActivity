package com.javajo.sunshineRoad.model.service.IService.security;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Optional;

public interface JwtService {
    public String createAccessToken(String email);
    public String createRefreshToken();
    public void sendAccessToken(HttpServletResponse response, String accessToken);
    public void sendAccessAndRefreshToken(HttpServletResponse response, String accessToken, String refreshToken);
    public Optional<String> extractRefreshToken(HttpServletRequest request);
    public Optional<String> extractAccessToken(HttpServletRequest request);
    public Optional<String> extractEmail(String accessToken);
    public void setAccessTokenHeader(HttpServletResponse response, String accessToken);
    public void setRefreshTokenHeader(HttpServletResponse response, String refreshToken);
    public void updateRefreshToken(String email, String refreshToken) throws Exception;
    public boolean isTokenValid(String token);
}