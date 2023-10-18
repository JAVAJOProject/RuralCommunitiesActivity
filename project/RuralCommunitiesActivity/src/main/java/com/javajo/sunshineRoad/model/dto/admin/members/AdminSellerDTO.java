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

	@JsonProperty
	private int sId;
	private int accountInfoId;//??
	private String memTypeId;//제공자2
	@JsonProperty
	private String sEmail;
	@JsonProperty
	private String sComName;//상호
	@JsonProperty
	private String sPw;
	@JsonProperty
	private String sTel;
	@JsonProperty
	private String sRegDate;//가입일
	@JsonProperty
	private String sAddr;//시
	@JsonProperty
	private String sRegNum;//사업자등록번호
	@JsonProperty
	private String sMargetingConsent;//마케팅?
	@JsonProperty
	private String sApproval;//승인여부
	@JsonProperty
	private String sRepName;//대표자


	
	
}