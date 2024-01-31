package com.javajo.sunshineRoad.model.dto.admin.members;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Alias("AMember")
public class AdminMemberDTO {

	@JsonProperty("u_id")
	private long uId;
	private int memTypeId;//1
	@JsonProperty("u_name")
	private String uName;
	@JsonProperty("u_email")
	private String uEmail;
	@JsonProperty("u_nick")
	private String uNick;
	@JsonProperty("u_pw")
	private String uPw;
	@JsonProperty("u_tel")
	private String uTel;
	@JsonProperty("u_reg_date")
	private String uRegDate;
	@JsonProperty("u_marketing")
	private int uMarketing;
	@JsonProperty("u_gender")
	private String uGender;
	@JsonProperty("u_birth")
	private String uBirth;
	@JsonProperty("u_google")
	private String uGoogle;
	@JsonProperty("u_naver_login")
	private String uNaverLogin;
	@JsonProperty("u_kakao_login")
	private String uKakaoLogin;

	private String socialType;
	private String refreshToken;

	
	
}