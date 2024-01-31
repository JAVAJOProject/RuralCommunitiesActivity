package com.javajo.sunshineRoad.model.service.impl.security;

import com.javajo.sunshineRoad.model.dao.security.UserAdminDAO;
import com.javajo.sunshineRoad.model.dao.security.UserMemberDAO;
import com.javajo.sunshineRoad.model.dao.security.UserSellerDAO;
import com.javajo.sunshineRoad.model.dto.security.UserAdminDTO;
import com.javajo.sunshineRoad.model.dto.security.UserDTO;
import com.javajo.sunshineRoad.model.dto.security.UserMemberDTO;
import com.javajo.sunshineRoad.model.dto.security.UserSellerDTO;
import com.javajo.sunshineRoad.model.service.IService.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.mapping.GrantedAuthoritiesMapper;
import org.springframework.security.core.authority.mapping.NullAuthoritiesMapper;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RequiredArgsConstructor
public class JwtAuthenticationProcessingFilter extends OncePerRequestFilter {
    private static final String NO_CHECK_URL = "/sign-in";

    private final JwtService jwtService;
    private final UserMemberDAO userMemberDAO;
    private final UserSellerDAO userSellerDAO;
    private final UserAdminDAO userAdminDAO;

    private GrantedAuthoritiesMapper authoritiesMapper = new NullAuthoritiesMapper();

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        if (request.getRequestURI().equals(NO_CHECK_URL)) {
            filterChain.doFilter(request, response);
            return;
        }

        String refreshToken = jwtService.extractRefreshToken(request)
                .filter(jwtService::isTokenValid)
                .orElse(null);

        if (refreshToken != null) {
            checkRefreshTokenAndReIssueAccessToken(response, refreshToken);
            return;
        }

        // refreshToken == null
        checkAccessTokenAndAuthentication(request, response, filterChain);
    }

    public void checkRefreshTokenAndReIssueAccessToken(HttpServletResponse response, String refreshToken) {
        UserMemberDTO memberDTO = userMemberDAO.findByRefreshToken(refreshToken);
        UserSellerDTO sellerDTO = userSellerDAO.findByRefreshToken(refreshToken);
        UserAdminDTO adminDTO = userAdminDAO.findByRefreshToken(refreshToken);

        String reIssuedRefreshToken = null;
        String accessToken = null;
        if (memberDTO != null) {
            reIssuedRefreshToken = reIssueRefreshToken(memberDTO);
            accessToken = jwtService.createAccessToken(memberDTO.getUEmail());
        } else if (sellerDTO != null) {
            reIssuedRefreshToken = reIssueRefreshToken(sellerDTO);
            accessToken = jwtService.createAccessToken(sellerDTO.getSEmail());
        } else if (adminDTO != null) {
            reIssuedRefreshToken = reIssueRefreshToken(adminDTO);
            accessToken = jwtService.createAccessToken(adminDTO.getAdminEmail());
        }

        jwtService.sendAccessAndRefreshToken(response, accessToken, reIssuedRefreshToken);
    }

/*    private String reIssueRefreshToken(UserDTO user) throws Exception {
        String reIssuedRefreshToken = jwtService.createRefreshToken();
        user.updateRefreshToken(reIssuedRefreshToken);
        if (user instanceof UserMemberDTO) {
            userMemberDAO.updateRefreshToken((UserMemberDTO)user);
        } else if (user instanceof UserSellerDTO) {
            userSellerDAO.updateRefreshToken((UserSellerDTO)user);
        } else if (user instanceof UserAdminDTO) {
            userAdminDAO.updateRefreshToken((UserAdminDTO)user);
        } else {
            throw new Exception("Reissuing refresh token is failed");
        }
        return reIssuedRefreshToken;
    }*/
    private String reIssueRefreshToken(UserMemberDTO member) {
        String reIssuedRefreshToken = jwtService.createRefreshToken();
        member.updateRefreshToken(reIssuedRefreshToken);
        userMemberDAO.updateRefreshToken(member);
        return reIssuedRefreshToken;
    }
    private String reIssueRefreshToken(UserSellerDTO seller) {
        String reIssuedRefreshToken = jwtService.createRefreshToken();
        seller.updateRefreshToken(reIssuedRefreshToken);
        userSellerDAO.updateRefreshToken(seller);
        return reIssuedRefreshToken;
    }
    private String reIssueRefreshToken(UserAdminDTO admin) {
        String reIssuedRefreshToken = jwtService.createRefreshToken();
        admin.updateRefreshToken(reIssuedRefreshToken);
        userAdminDAO.updateRefreshToken(admin);
        return reIssuedRefreshToken;
    }
    public void checkAccessTokenAndAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        jwtService.extractAccessToken(request)
                .filter(jwtService::isTokenValid)
                .flatMap(jwtService::extractEmail)
                .ifPresent(email -> {
                    UserDTO member = userMemberDAO.findByEmail(email);
                    UserDTO seller = userSellerDAO.findByEmail(email);
                    UserDTO admin = userAdminDAO.findByEmail(email);

                    if (member != null) {
                        saveAuthentication(member);
                    } else if (seller != null) {
                        saveAuthentication(seller);
                    } else if (admin != null) {
                        saveAuthentication(admin);
                    }
                });

        filterChain.doFilter(request, response);
    }
    public void saveAuthentication(UserDTO user) {
        String username = null;
        String password = null;
        String roles = null;

        if (user instanceof UserMemberDTO) {
            UserMemberDTO member = (UserMemberDTO)user;
            username = member.getUEmail();
            password = member.getUPw();
            roles = member.getRole().name();
        } else if (user instanceof UserSellerDTO) {
            UserSellerDTO seller = (UserSellerDTO)user;
            username = seller.getSEmail();
            password = seller.getSPw();
            roles = seller.getRole().name();
        } else if (user instanceof UserAdminDTO) {
            UserAdminDTO admin = (UserAdminDTO)user;
            username = admin.getAdminEmail();
            password = admin.getAdminPw();
            roles = admin.getRole().name();
        }

        if (password == null) {
            password = PasswordUtil.generateRandomPassword();
        }

        UserDetails userDetails = User.builder()
                .username(username)
                .password(password)
                .roles(roles)
                .build();

        Authentication authentication = new UsernamePasswordAuthenticationToken(userDetails, null, authoritiesMapper.mapAuthorities(userDetails.getAuthorities()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
}