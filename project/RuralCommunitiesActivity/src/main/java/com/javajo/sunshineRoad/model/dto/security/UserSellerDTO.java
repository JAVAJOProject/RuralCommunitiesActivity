package com.javajo.sunshineRoad.model.dto.security;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.apache.ibatis.type.Alias;
import org.springframework.security.crypto.password.PasswordEncoder;

@Alias("UserSeller")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserSellerDTO {
    @JsonProperty
    private Long sId;
    private String accountInfoId;
    private int memTypeId;
    @JsonProperty
    private String sEmail;
    @JsonProperty
    private String sComName;
    @JsonProperty
    private String sPw;
    @JsonProperty
    private String sTel;
    @JsonProperty
    private String sRegDate;
    @JsonProperty
    private String sAddr;
    @JsonProperty
    private String sRegNum;
    @JsonProperty
    private int sMarketingConsent;
    @JsonProperty
    private int sApproval;
    @JsonProperty
    private String sRepName;

    private Role role;
    private SocialType socialType;
    private String socialId;
    private String refreshToken;

    public void authorizeUser() {
        this.role = Role.SELLER;
    }
    public void passwordEncode(PasswordEncoder passwordEncoder) {
        this.sPw = passwordEncoder.encode(this.sPw);
    }
    public void updateRefreshToken(String updateRefreshToken) {
        this.refreshToken = updateRefreshToken;
    }
}