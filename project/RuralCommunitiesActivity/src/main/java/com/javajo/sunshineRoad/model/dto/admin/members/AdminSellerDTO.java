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
@Alias("ASeller")
public class AdminSellerDTO {

	@JsonProperty("s_id")
	private long sId;
	private int accountInfoId;//??
	private String memTypeId;//제공자2
	@JsonProperty("s_email")
	private String sEmail;
	@JsonProperty("s_com_name")
	private String sComName;//상호
	@JsonProperty("s_pw")
	private String sPw;
	@JsonProperty("s_tel")
	private String sTel;
	@JsonProperty("s_reg_date")
	private String sRegDate;//가입일
	@JsonProperty("s_addr")
	private String sAddr;//시
	@JsonProperty("s_reg_num")
	private String sRegNum;//사업자등록번호
	@JsonProperty("s_marketing_consent")
	private String sMarketingConsent;//마케팅?
	@JsonProperty("s_approval")
	private String sApproval;//승인여부
	@JsonProperty("s_rep_name")
	private String sRepName;//대표자

	private String refreshToken;

	
	
}