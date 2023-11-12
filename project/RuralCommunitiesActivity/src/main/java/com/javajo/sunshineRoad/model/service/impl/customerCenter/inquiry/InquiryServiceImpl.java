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
	public int getInquiryListCount() {
		return inquiryDAO.getInquiryListCount();
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

	@Override
	public int getSearchInquiryAllCount(String keyword) {
	    return inquiryDAO.getSearchInquiryAllCount(keyword);
	}
	@Override
	public int getSearchInquiryTitleCount(String keyword) {
	    return inquiryDAO.getSearchInquiryTitleCount(keyword);
	}
	@Override
	public int getSearchInquiryContentCount(String keyword) {
	    return inquiryDAO.getSearchInquiryContentCount(keyword);
	}

	@Override
	public int getMyInquiryCount(int memId) {
		return inquiryDAO.getMyInquiryCount(memId);
	}



//	Oracle
	@Override
	public List<InquiryInfoDTO> getRequestPageInquiryList(int totalCount, int perPagePostCount, int requestPageNo) {
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
	    int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);

	    return inquiryDAO.getRequestPageInquiryList(startPostNo, endPostNo);
	}
	@Override
	public List<InquiryInfoDTO> searchInquiryAll(int totalCount, int perPagePostCount, int requestPageNo, String keyword) {
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
		int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);

		return inquiryDAO.searchInquiryAll(startPostNo, endPostNo, keyword);
	}
	@Override
	public List<InquiryInfoDTO> searchInquiryByTitle(int totalCount, int perPagePostCount, int requestPageNo, String keyword) {
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
		int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);

	    return inquiryDAO.searchInquiryByTitle(startPostNo, endPostNo, keyword);
	}

	@Override
	public List<InquiryInfoDTO> searchInquiryByContent(int totalCount, int perPagePostCount, int requestPageNo, String keyword) {
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
		int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);

		return inquiryDAO.searchInquiryByContent(startPostNo, endPostNo, keyword);
	}
	@Override
	public List<InquiryInfoDTO> getMyInquiryDetail(int totalCount, int perPagePostCount, int requestPageNo, int memId) {
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
		int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);

		return inquiryDAO.getMyInquiryDetail(startPostNo, endPostNo, memId);
	}


//	MySQL
//	@Override
//	public List<InquiryInfoDTO> getRequestPageInquiryList(int totalCount, int perPagePostCount, int requestPageNo) {
//		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
//
//		return inquiryDAO.getRequestPageInquiryList(startPostNo - 1, perPagePostCount);
//	}
//	@Override
//	public List<InquiryInfoDTO> searchInquiryAll(int totalCount, int perPagePostCount, int requestPageNo, String keyword) {
//		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
//
//		return inquiryDAO.searchInquiryAll(startPostNo - 1, perPagePostCount, keyword);
//	}
//	@Override
//	public List<InquiryInfoDTO> searchInquiryByTitle(int totalCount, int perPagePostCount, int requestPageNo, String keyword) {
//		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
//
//		return inquiryDAO.searchInquiryByTitle(startPostNo - 1, perPagePostCount, keyword);
//	}
//	@Override
//	public List<InquiryInfoDTO> searchInquiryByContent(int totalCount, int perPagePostCount, int requestPageNo, String keyword) {
//		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
//
//		return inquiryDAO.searchInquiryByContent(startPostNo - 1, perPagePostCount, keyword);
//	}
//	@Override
//	public List<InquiryInfoDTO> getMyInquiryDetail(int totalCount, int perPagePostCount, int requestPageNo, int memId) {
//		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
//
//		return inquiryDAO.getMyInquiryDetail(startPostNo - 1, perPagePostCount, memId);
//	}
}