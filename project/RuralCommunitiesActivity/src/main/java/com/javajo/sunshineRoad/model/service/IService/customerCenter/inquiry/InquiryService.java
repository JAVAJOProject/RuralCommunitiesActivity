package com.javajo.sunshineRoad.model.service.IService.customerCenter.inquiry;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.customerCenter.inquiry.InquiryInfoDTO;

public interface InquiryService {
	
	//문의글 개수
	public int getInquiryListCount();
	
	//문의글 목록 페이지 요청
	public List<InquiryInfoDTO> getRequestPageInquiryList(int totalCount, int perPagePostCount, int requestPageNo);
	
	//상세 문의글
	public InquiryInfoDTO getInquiryDetail(int inquiryId);
	
	//문의글 업데이트
	public void inquiryUpdate(InquiryInfoDTO inquiryInfoDTO);
	
	//문의글 삭제
	public void inquiryDelete(InquiryInfoDTO inquiryInfoDTO);
	
	//문의글 추가
	public void inquiryInsert(InquiryInfoDTO inquiryInfoDTO);
  //public List<InquiryInfoDTO> searchInquiry(int searchingTypeId, String keyword);
	
	//문의글 '전체'로 검색
	public List<InquiryInfoDTO> searchInquiryAll(int totalCount, int perPagePostCount, int requestPageNo, String keyword);
	
	//문의글 '제목'으로 검색
	public List<InquiryInfoDTO> searchInquiryByTitle(int totalCount, int perPagePostCount, int requestPageNo, String keyword);
	
	//문의글 '내용'으로 검색
	public List<InquiryInfoDTO> searchInquiryByContent(int totalCount, int perPagePostCount, int requestPageNo, String keyword);
	
	//문의글 전체 개수
	public int getSearchInquiryAllCount(String keyword);
	
	//문의글 제목 개수
	public int getSearchInquiryTitleCount(String keyword);
	
	//문의글 내용 개수
	public int getSearchInquiryContentCount(String keyword);

	//내가 쓴 글 개수
	public int getMyInquiryCount(long memId);
	//내가 쓴 글 보기
	public List<InquiryInfoDTO> getMyInquiryDetail(int totalCount, int perPagePostCount, int requestPageNo, long memId);

}