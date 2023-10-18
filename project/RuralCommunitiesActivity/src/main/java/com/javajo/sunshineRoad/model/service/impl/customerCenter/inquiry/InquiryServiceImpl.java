package com.javajo.sunshineRoad.model.service.impl.customerCenter.inquiry;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.model.dao.customerCenter.inquiry.InquiryDAO;
import com.javajo.sunshineRoad.model.dto.customerCenter.inquiry.InquiryInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;
import com.javajo.sunshineRoad.model.service.IService.customerCenter.inquiry.InquiryService;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class InquiryServiceImpl implements InquiryService {
	private final InquiryDAO inquiryDAO;
	private final OffSetBasedPaginationUtils offSetBasedPaginationUtils;

	@Override
	public int getInquiryListCount(int inquiryTypeId) {
		
		return inquiryDAO.getInquiryListCount(inquiryTypeId);
	}

	@Override
	public List<InquiryInfoDTO> getRequestPageInquiryList(int totalCount, int perPagePostCount, int requestPageNo,
			int inquiryTypeId) {
		
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
	    int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
	    
	    return inquiryDAO.getRequestPageInquiryList(startPostNo, endPostNo, inquiryTypeId);
	}

	@Override
	public InquiryInfoDTO getInquiryDetail(int inquiryId) {
		return inquiryDAO.getInquiryDetail(inquiryId);
	}

	@Override
	public void inquiryUpdate(InquiryInfoDTO inquiryInfoDTO) {
		
		inquiryDAO.inquiryUpdate(inquiryInfoDTO);
		
	}

	@Override
	public void inquiryDelete(InquiryInfoDTO inquiryInfoDTO) {

		inquiryDAO.inquiryDelete(inquiryInfoDTO);
		
	}
	
	@Override
	public void inquiryInsert(InquiryInfoDTO inquiryInfoDTO) {

		inquiryDAO.inquiryInsert(inquiryInfoDTO);
		
	}

}
