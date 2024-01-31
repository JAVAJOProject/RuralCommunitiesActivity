package com.javajo.sunshineRoad.model.service.impl.security;

import com.javajo.sunshineRoad.model.dao.security.UserAdminDAO;
import com.javajo.sunshineRoad.model.dao.security.UserMemberDAO;
import com.javajo.sunshineRoad.model.dao.security.UserSellerDAO;
import com.javajo.sunshineRoad.model.dto.security.UserAdminDTO;
import com.javajo.sunshineRoad.model.dto.security.UserMemberDTO;
import com.javajo.sunshineRoad.model.dto.security.UserSellerDTO;
import com.javajo.sunshineRoad.model.service.IService.security.SignInService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SignInServiceImpl implements SignInService {
    private final UserMemberDAO userMemberDAO;
    private final UserSellerDAO userSellerDAO;
    private final UserAdminDAO userAdminDAO;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserMemberDTO member = userMemberDAO.findByEmail(email);
        UserSellerDTO seller = userSellerDAO.findByEmail(email);
        UserAdminDTO admin = userAdminDAO.findByEmail(email);

        if (member != null) {
            return User.builder()
                    .username(member.getUEmail())
                    .password(member.getUPw())
                    .roles(member.getRole().name())
                    .build();
        } else if (seller != null) {
            return User.builder()
                    .username(seller.getSEmail())
                    .password(seller.getSPw())
                    .roles(seller.getRole().name())
                    .build();
        } else if (admin != null) {
            return User.builder()
                    .username(admin.getAdminEmail())
                    .password(admin.getAdminPw())
                    .roles(admin.getRole().name())
                    .build();
        } else {
            throw new UsernameNotFoundException("not found user");
        }
    }
}