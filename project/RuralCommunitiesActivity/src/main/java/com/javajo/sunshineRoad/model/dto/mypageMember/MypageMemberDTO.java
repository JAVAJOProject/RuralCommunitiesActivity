package com.javajo.sunshineRoad.model.dto.mypageMember;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.ibatis.type.Alias;

import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageActivityCustomerDTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("MypageMemberDTO")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MypageMemberDTO {
	@JsonProperty
	private long uId;
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
	private int uMarkting;
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
	
	// 체험 참여자 명단에 조인할 객체
	private MypageActivityCustomerDTO activityCustomer;
	private MypageReservationDTO reservation;
}