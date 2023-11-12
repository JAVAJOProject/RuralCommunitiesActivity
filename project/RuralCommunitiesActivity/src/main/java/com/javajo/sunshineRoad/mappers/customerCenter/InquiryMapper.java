package com.javajo.sunshineRoad.mappers.customerCenter;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.customerCenter.inquiry.InquiryInfoDTO;

import javax.swing.plaf.PanelUI;

@Mapper
public interface InquiryMapper {

	public int getInquiryListCount();

	public InquiryInfoDTO getInquiryDetail(int inquiryId);
	public void inquiryUpdate(InquiryInfoDTO inquiryInfoDTO);
	public void inquiryDelete(InquiryInfoDTO inquiryInfoDTO);
	public void inquiryInsert(InquiryInfoDTO inquiryInfoDTO);
  //public List<InquiryInfoDTO> searchInquiry(@Param("searchingTypeId") int searchingTypeId,@Param("keyword") String keyword);

	public int getSearchInquiryAllCount(String keyword);
	public int getSearchInquiryTitleCount(String keyword);
	public int getSearchInquiryContentCount(String keyword);

	public int getMyInquiryCount(int memId);

//	Oracle
	public List<InquiryInfoDTO> getRequestPageInquiryList(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
	public List<InquiryInfoDTO> searchInquiryAll(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo, @Param("keyword") String keyword);
	public List<InquiryInfoDTO> searchInquiryByTitle(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo, @Param("keyword") String keyword);
	public List<InquiryInfoDTO> searchInquiryByContent(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo, @Param("keyword") String keyword);
	public List<InquiryInfoDTO> getMyInquiryDetail(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo, @Param("memId") int memId);


//	MySQL
//	public List<InquiryInfoDTO> getRequestPageInquiryList(@Param("startPostNo") int startPostNo, @Param("perPagePostNo") int perPagePostNo);
//	public List<InquiryInfoDTO> searchInquiryAll(@Param("startPostNo") int startPostNo, @Param("perPagePostNo") int perPagePostNo, @Param("keyword") String keyword);
//	public List<InquiryInfoDTO> searchInquiryByTitle(@Param("startPostNo") int startPostNo, @Param("perPagePostNo") int perPagePostNo, @Param("keyword") String keyword);
//	public List<InquiryInfoDTO> searchInquiryByContent(@Param("startPostNo") int startPostNo, @Param("perPagePostNo") int perPagePostNo, @Param("keyword") String keyword);
//	public List<InquiryInfoDTO> getMyInquiryDetail(@Param("startPostNo") int startPostNo, @Param("perPagePostNo") int perPagePostNo, @Param("memId") int memId);
}