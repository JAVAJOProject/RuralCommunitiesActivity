package com.javajo.sunshineRoad.model.dto.mypageSeller;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("SellerDTO")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MypageSellerDTO {
	@JsonProperty
	private long sId;
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
	@JsonProperty
	private String sRegCertificateImg;
}