package com.javajo.sunshineRoad.model.dto.mypageSeller;

import org.apache.ibatis.type.Alias;

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
	private int sId;
	private String accountInfoId;
	private int memTypeId;
	private String sEmail;
	private String sComName;
	private String sPw;
	private String sTel;
	private String sRegDate;
	private String sAddr;
	private String sRegNum;
	private int sMarketingConsent;
	private int sApproval;
	private String sRepName;
}
