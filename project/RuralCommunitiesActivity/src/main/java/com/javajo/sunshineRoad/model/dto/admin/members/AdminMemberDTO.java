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

	@JsonProperty
	private int uId;
	private int memTypeId;//1
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
	private String uGoogle;
	@JsonProperty
	private String uNaver_login;
	@JsonProperty
	private String uKakao_login;
	

	
	
}
