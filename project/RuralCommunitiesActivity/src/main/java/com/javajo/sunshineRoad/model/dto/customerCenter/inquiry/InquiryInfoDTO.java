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
	private long memId;
	private String inquiryTitle;
	private String inquiryContent;
	private String inquiryDateCreated;
	private String inquiryA;
	private String inquiryStatus;
	private int memTypeId;
	@JsonProperty
	private long uId;
	@JsonProperty
	private String uNick;
	@JsonProperty
	private long sId;
	@JsonProperty
	private String sComName;
}