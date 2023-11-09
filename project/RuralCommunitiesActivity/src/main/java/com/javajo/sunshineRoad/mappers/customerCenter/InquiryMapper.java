package com.javajo.sunshineRoad.mappers.customerCenter;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.customerCenter.inquiry.InquiryInfoDTO;

@Mapper
public interface InquiryMapper {

	public int getInquiryListCount();
	
	public List<InquiryInfoDTO> getRequestPageInquiryList(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
	
	public InquiryInfoDTO getInquiryDetail(int inquiryId);
	public void inquiryUpdate(InquiryInfoDTO inquiryInfoDTO);
	public void inquiryDelete(InquiryInfoDTO inquiryInfoDTO);
	public void inquiryInsert(InquiryInfoDTO inquiryInfoDTO);
  //public List<InquiryInfoDTO> searchInquiry(@Param("searchingTypeId") int searchingTypeId,@Param("keyword") String keyword);
	public List<InquiryInfoDTO> searchInquiryAll(String keyword);
	public List<InquiryInfoDTO> searchInquiryByTitle(String keyword);
	public List<InquiryInfoDTO> searchInquiryByContent(String keyword);

	public int getSearchInquiryAllCount(String keyword);
	public int getSearchInquiryTitleCount(String keyword);
	public int getSearchInquiryContentCount(String keyword);
	
	

	public List<InquiryInfoDTO> getRequestPageSearchInquiryList(int perPagePostCount, int requestPageNo);

	public List<InquiryInfoDTO> getRequestPageSearchInquiryListList(int startPostNo, int endPostNo, int searchingTypeId, String keyword);
	
	
	public List<InquiryInfoDTO> getMyInquiryDetail(int memId);
}
