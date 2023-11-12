package com.javajo.sunshineRoad.model.dto.signUp;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Alias("SignUpSeller")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SignUpSellerDTO {
	@JsonProperty
	private Integer sId;
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
}