package com.javajo.sunshineRoad.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.customerCenter.inquiry.InquiryInfoDTO;

@Mapper
public interface InquiryMapper {

	public int getInquiryListCount(int inquiryTypeId);
	
	public List<InquiryInfoDTO> getRequestPageInquiryList(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo, @Param("inquiryTypeId") int inquiryTypeId);
	
	public InquiryInfoDTO getInquiryDetail(int inquiryId);
	public void inquiryUpdate(InquiryInfoDTO inquiryInfoDTO);
	public void inquiryDelete(InquiryInfoDTO inquiryInfoDTO);
	public void inquiryInsert(InquiryInfoDTO inquiryInfoDTO);
}
