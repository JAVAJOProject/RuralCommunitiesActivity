package com.javajo.sunshineRoad.model.dto.customerCenter.inquiry;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("InquiryInfo")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InquiryInfoDTO {

	private int inquiryId;
	private int inquiryStatusId;
	private int inquiryTypeId;
	private int memId;
	private String inquiryTitle;
	private String inquiryContent;
	private String inquiryDateCreated;
	private String inquiryA;
	@JsonProperty
	private int uId;
	@JsonProperty
	private String uNick;
	private String inquiryStatus;
	@JsonProperty
	private int sId;
	@JsonProperty
	private String sComName;
}
