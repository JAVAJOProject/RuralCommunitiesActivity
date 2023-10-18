package com.javajo.sunshineRoad.model.service.IService.customerCenter.inquiry;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.customerCenter.inquiry.InquiryInfoDTO;

public interface InquiryService {
	
	public int getInquiryListCount(int inquiryTypeId);
	public List<InquiryInfoDTO> getRequestPageInquiryList(int totalCount, int perPagePostCount, int requestPageNo, int inquiryTypeId);
	public InquiryInfoDTO getInquiryDetail(int inquiryId);
	public void  inquiryUpdate(InquiryInfoDTO inquiryInfoDTO);
	public void  inquiryDelete(InquiryInfoDTO inquiryInfoDTO);
	public void  inquiryInsert(InquiryInfoDTO inquiryInfoDTO);
}
