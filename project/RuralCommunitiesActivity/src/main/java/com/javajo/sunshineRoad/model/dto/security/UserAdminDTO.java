package com.javajo.sunshineRoad.model.dto.security;

import lombok.*;
import org.apache.ibatis.type.Alias;
import org.springframework.security.crypto.password.PasswordEncoder;

@Alias("UserAdmin")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserAdminDTO implements UserDTO {
    private Long adminId;
    private int memTypeId;
    private int adminAuthorityId;
    private String adminEmail;
    private String adminPw;
    private String adminRegDate;
    private String adminTel;

    private Role role;
//    private SocialType socialType;
//    private String socialId;
    private String refreshToken;

    // 언제 호출되는 건가. 이때 adminAuthorityId 값이 있는걸까.
    public void authorizeUser() {
        setRole(this.adminAuthorityId);
    }
    public void passwordEncode(PasswordEncoder passwordEncoder) {
        this.adminPw = passwordEncoder.encode(this.adminPw);
    }
    public void updateRefreshToken(String updateRefreshToken) {
        this.refreshToken = updateRefreshToken;
    }

    public void setRole(int adminAuthorityId) {
        switch (adminAuthorityId) {
            case 1: this.role = Role.ADMIN; break;
            case 2: this.role = Role.SUPERADMIN; break;
            default: this.role = Role.GUEST; break;
        }
    }
    public void setRole(Role role) {
        this.role = role;
    }
    public void setAdminAuthorityId(int adminAuthorityId) {
        this.adminAuthorityId = adminAuthorityId;
        setRole(adminAuthorityId);
    }
}