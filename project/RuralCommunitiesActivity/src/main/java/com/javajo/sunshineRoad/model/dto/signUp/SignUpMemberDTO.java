package com.javajo.sunshineRoad.model.dto.signUp;

import lombok.*;
import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;

@Alias("SignUpMember")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SignUpMemberDTO {
	@JsonProperty
	private Long uId;
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

	private String socialType;
	private String refreshToken;
}