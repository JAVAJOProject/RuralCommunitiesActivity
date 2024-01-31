package com.javajo.sunshineRoad.model.dto.signUp;

import lombok.*;
import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;


@Alias("SignUpSeller")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SignUpSellerDTO {
	@JsonProperty
	private Long sId;
	private int accountInfoId;
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
	private String refreshToken;
}