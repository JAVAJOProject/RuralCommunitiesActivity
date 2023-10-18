package com.javajo.sunshineRoad.model.dto.mypageMember;

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

	private int uId;
	private int memTypeId;
	private String uName;
	private String eMail;
	private String uNick;
	private String uPw;
	private String uTel;
	private String uRegDate;
	private int uMarkting;
	private String uGender;
	private String uBirth;
	private String uGoogleLogin;
	private String uNaverLogin;
	private String uKakaoLogin; 
	
	// 체험 참여자 명단에 조인할 객체
	private MypageActivityCustomerDTO activityCustomer;
	private MypageReservationDTO reservation;
}
