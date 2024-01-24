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
public class UserAdminDTO {
    private Long adminId;
    private int memTypeId;
    private int adminAuthorityId;
    private String adminEmail;
    private String adminPw;
    private String adminRegDate;
    private String adminTel;

    private Role role;
    private SocialType socialType;
    private String socialId;
    private String refreshToken;

    public void authorizeUser() {
        this.role = Role.ADMIN;
    }
    public void passwordEncode(PasswordEncoder passwordEncoder) {
        this.adminPw = passwordEncoder.encode(this.adminPw);
    }
    public void updateRefreshToken(String updateRefreshToken) {
        this.refreshToken = updateRefreshToken;
    }
}