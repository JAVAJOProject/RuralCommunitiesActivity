package com.javajo.sunshineRoad.model.service.impl.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.javajo.sunshineRoad.model.dao.security.UserAdminDAO;
import com.javajo.sunshineRoad.model.dao.security.UserMemberDAO;
import com.javajo.sunshineRoad.model.dao.security.UserSellerDAO;
import com.javajo.sunshineRoad.model.dto.security.UserDTO;
import com.javajo.sunshineRoad.model.service.IService.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class JwtServiceImpl implements JwtService {
    @Value("#{securityProperties['jwt.secretKey']}")
    private String secretKey;
    @Value("#{securityProperties['jwt.access.expirationsecurityProperties']}")
    private Long accessTokenExpirationPeriod;
    @Value("#{securityProperties['jwt.refresh.expiration']}")
    private Long refreshTokenExpirationPeriod;
    @Value("#{securityProperties['jwt.access.header']}")
    private String accessHeader;
    @Value("#{securityProperties['jwt.refresh.header']}")
    private String refreshHeader;

    private static final String ACCESS_TOKEN_SUBJECT = "AccessToken";
    private static final String REFRESH_TOKEN_SUBJECT = "RefreshToken";
    private static final String EMAIL_CLAIM = "email";
    private static final String BEARER = "Bearer";

    private final UserMemberDAO userMemberDAO;
    private final UserSellerDAO userSellerDAO;
    private final UserAdminDAO userAdminDAO;

    @Override
    public String createAccessToken(String email) {
        return JWT.create()
                .withSubject(ACCESS_TOKEN_SUBJECT)
                .withExpiresAt(new Date(new Date().getTime() + accessTokenExpirationPeriod))
                .withClaim(EMAIL_CLAIM, email)
                .sign(Algorithm.HMAC512(secretKey));
    }
    @Override
    public String createRefreshToken() {
        return JWT.create()
                .withSubject(REFRESH_TOKEN_SUBJECT)
                .withExpiresAt(new Date(new Date().getTime() + refreshTokenExpirationPeriod))
                .sign(Algorithm.HMAC512(secretKey));
    }

    @Override
    public void sendAccessToken(HttpServletResponse response, String accessToken) {
        response.setStatus(HttpServletResponse.SC_OK);
        response.setHeader(accessHeader, accessToken);
    }
    @Override
    public void sendAccessAndRefreshToken(HttpServletResponse response, String accessToken, String refreshToken) {
        response.setStatus(HttpServletResponse.SC_OK);
        setAccessTokenHeader(response, accessToken);
        setRefreshTokenHeader(response, refreshToken);
    }

    @Override
    public Optional<String> extractRefreshToken(HttpServletRequest request) {
        return Optional.ofNullable(request.getHeader(refreshHeader))
                .filter(refreshToken -> refreshToken.startsWith(BEARER))
                .map(refreshToken -> refreshToken.replace(BEARER, ""));
    }
    @Override
    public Optional<String> extractAccessToken(HttpServletRequest request) {
        return Optional.ofNullable(request.getHeader(accessHeader))
                .filter(refreshToken -> refreshToken.startsWith(BEARER))
                .map(refreshToken -> refreshToken.replace(BEARER, ""));
    }
    @Override
    public Optional<String> extractEmail(String accessToken) {
        try {
            return Optional.ofNullable(JWT.require(Algorithm.HMAC512(secretKey))
                    .build()
                    .verify(accessToken)
                    .getClaim(EMAIL_CLAIM)
                    .asString());
        } catch (Exception e) {
            return Optional.empty();
        }
    }

    @Override
    public void setAccessTokenHeader(HttpServletResponse response, String accessToken) {
        response.setHeader(accessHeader, accessToken);
    }
    @Override
    public void setRefreshTokenHeader(HttpServletResponse response, String refreshToken) {
        response.setHeader(refreshHeader, refreshToken);
    }

    @Override
    public void updateRefreshToken(String email, String refreshToken) throws Exception {
        UserDTO memberDTO = userMemberDAO.findByEmail(email);
        UserDTO sellerDTO = userSellerDAO.findByEmail(email);
        UserDTO adminDTO = userAdminDAO.findByEmail(email);

        if (memberDTO != null) {
            memberDTO.updateRefreshToken(refreshToken);
        } else if (sellerDTO != null) {
            sellerDTO.updateRefreshToken(refreshToken);
        } else if (adminDTO != null) {
            adminDTO.updateRefreshToken(refreshToken);
        } else {
            throw new Exception("Updating refresh token failed");
        }
    }

    @Override
    public boolean isTokenValid(String token) {
        try {
            JWT.require(Algorithm.HMAC512(secretKey))
                    .build()
                    .verify(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}