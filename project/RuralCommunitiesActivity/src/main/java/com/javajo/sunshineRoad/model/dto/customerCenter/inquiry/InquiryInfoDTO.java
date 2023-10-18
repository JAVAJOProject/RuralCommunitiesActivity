package com.javajo.sunshineRoad.model.dto.customerCenter.inquiry;

import org.apache.ibatis.type.Alias;

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
	private String name;
	private String inquiryStatus;
	
}
