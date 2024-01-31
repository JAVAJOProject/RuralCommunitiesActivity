package com.javajo.sunshineRoad.model.service.impl.security;

import com.javajo.sunshineRoad.model.dao.security.UserAdminDAO;
import com.javajo.sunshineRoad.model.dao.security.UserMemberDAO;
import com.javajo.sunshineRoad.model.dao.security.UserSellerDAO;
import com.javajo.sunshineRoad.model.dto.security.UserAdminDTO;
import com.javajo.sunshineRoad.model.dto.security.UserMemberDTO;
import com.javajo.sunshineRoad.model.dto.security.UserSellerDTO;
import com.javajo.sunshineRoad.model.service.IService.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RequiredArgsConstructor
public class SignInSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final JwtService jwtService;
    private final UserMemberDAO memberDAO;
    private final UserSellerDAO sellerDAO;
    private final UserAdminDAO adminDAO;

    @Value("#{securityProperties['jwt.access.expiration']}")
    private String accessTokenExpiration;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        String email = extractUsername(authentication);
        String accessToken = jwtService.createAccessToken(email);
        String refreshToken = jwtService.createRefreshToken();

        jwtService.sendAccessAndRefreshToken(response, accessToken, refreshToken);

        UserMemberDTO member = memberDAO.findByEmail(email);
        UserSellerDTO seller = sellerDAO.findByEmail(email);
        UserAdminDTO admin = adminDAO.findByEmail(email);
        if (member != null) {
            member.updateRefreshToken(refreshToken);
            memberDAO.updateRefreshToken(member);
        } else if (seller != null) {
            seller.updateRefreshToken(refreshToken);
            sellerDAO.updateRefreshToken(seller);
        } else if (admin != null) {
            admin.updateRefreshToken(refreshToken);
            adminDAO.updateRefreshToken(admin);
        }
    }

    private String extractUsername(Authentication authentication) {
        UserDetails userDetails = (UserDetails)authentication.getPrincipal();
        return userDetails.getUsername();
    }
}