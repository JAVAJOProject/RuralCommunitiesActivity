package com.javajo.sunshineRoad.model.dto.admin.board;

import org.apache.ibatis.type.Alias;
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
@Alias("AInquiry")
public class AInquiryDTO {

	private int inquiryId;
	private int inquiryStatusId;
	private String inquiryStatus;
	private int inquiryTypeId;
	private String inquiryTypeName;
	private int memId;
	private String inquiryTitle;
	private String inquiryContent;
	private String inquiryDateCreated;
	private String inquiryA;
}
