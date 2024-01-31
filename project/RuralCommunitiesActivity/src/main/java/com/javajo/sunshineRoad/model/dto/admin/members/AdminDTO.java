package com.javajo.sunshineRoad.model.dto.admin.members;


import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("Admin")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AdminDTO {

	private long adminId;
	private int memTypeId;//3
	private String adminAuthorityId;//권한 최고1 관리자2 승인x null
	private String adminEmail;
	private String adminPw;
	private String adminRegDate;
	private String adminTel;


	private String refreshToken;

	
	
}