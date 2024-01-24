package com.javajo.sunshineRoad.model.dto.security;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.apache.ibatis.type.Alias;
import org.springframework.security.crypto.password.PasswordEncoder;

@Alias("UserMember")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserMemberDTO {
    @JsonProperty
    private Integer uId;
    private int memTypeId;
    @JsonProperty
    private String uName;
    @JsonProperty
    private String uEmail;
    @JsonProperty
    private String uNick;
    @JsonProperty
    private String uPw;
    @JsonProperty
    private String uTel;
    @JsonProperty
    private String uRegDate;
    @JsonProperty
    private int uMarketing;
    @JsonProperty
    private String uGender;
    @JsonProperty
    private String uBirth;
    @JsonProperty
    private String uGoogleLogin;
    @JsonProperty
    private String uNaverLogin;
    @JsonProperty
    private String uKakaoLogin;

    private Role role;
    private SocialType socialType;
    private String socialId;
    private String refreshToken;

    public void authorizeUser() {
        this.role = Role.MEMBER;
    }
    public void passwordEncode(PasswordEncoder passwordEncoder) {
        this.uPw = passwordEncoder.encode(this.uPw);
    }
    public void updateRefreshToken(String updateRefreshToken) {
        this.refreshToken = updateRefreshToken;
    }
}