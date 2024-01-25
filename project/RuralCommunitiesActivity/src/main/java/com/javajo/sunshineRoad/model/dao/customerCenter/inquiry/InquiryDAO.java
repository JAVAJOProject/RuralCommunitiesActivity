package com.javajo.sunshineRoad.model.dao.customerCenter.inquiry;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.customerCenter.InquiryMapper;
import com.javajo.sunshineRoad.model.dto.customerCenter.inquiry.InquiryInfoDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class InquiryDAO {

	private final SqlSessionTemplate sqlSession;

	public int getInquiryListCount() {
		InquiryMapper inquiryMapper = sqlSession.getMapper(InquiryMapper.class);
		return inquiryMapper.getInquiryListCount();
	}
	
	public List<InquiryInfoDTO> getRequestPageInquiryList(int startPostNo, int endPostNo){
		InquiryMapper inquiryMapper = sqlSession.getMapper(InquiryMapper.class);
		List<InquiryInfoDTO> result = inquiryMapper.getRequestPageInquiryList(startPostNo, endPostNo);
		return result;
	}
	
	public InquiryInfoDTO getInquiryDetail(int inquiryId) {
		InquiryMapper inquiryMapper = sqlSession.getMapper(InquiryMapper.class);
		return inquiryMapper.getInquiryDetail(inquiryId);
	}
	
	public void inquiryUpdate(InquiryInfoDTO inquiryInfoDTO) {
		InquiryMapper inquiryMapper = sqlSession.getMapper(InquiryMapper.class);
		inquiryMapper.inquiryUpdate(inquiryInfoDTO);
	}
	
	public void inquiryDelete(InquiryInfoDTO inquiryInfoDTO) {
		InquiryMapper inquiryMapper = sqlSession.getMapper(InquiryMapper.class);
		inquiryMapper.inquiryDelete(inquiryInfoDTO);
	}
	
	public void inquiryInsert(InquiryInfoDTO inquiryInfoDTO) {
		InquiryMapper inquiryMapper = sqlSession.getMapper(InquiryMapper.class);
		inquiryMapper.inquiryInsert(inquiryInfoDTO);
	}
	
	public List<InquiryInfoDTO> searchInquiryAll(int startPostNo, int endPostNo, String keyword) {
	    // 전체 검색 구현 (예: 제목 또는 내용에 키워드가 포함되는 모든 문의 검색)
	    // SQL 쿼리를 작성하여 keyword를 포함하는 결과를 반환
		InquiryMapper inquiryMapper = sqlSession.getMapper(InquiryMapper.class);
		return inquiryMapper.searchInquiryAll(startPostNo, endPostNo, keyword);
	}

	public List<InquiryInfoDTO> searchInquiryByTitle(int startPostNo, int endPostNo, String keyword) {
	    // 제목 검색 구현 (예: 제목에 키워드가 포함된 문의 검색)
	    // SQL 쿼리를 작성하여 keyword를 포함하는 제목을 가진 결과를 반환
		InquiryMapper inquiryMapper = sqlSession.getMapper(InquiryMapper.class);
		return inquiryMapper.searchInquiryByTitle(startPostNo, endPostNo, keyword);
		
	}

	public List<InquiryInfoDTO> searchInquiryByContent(int startPostNo, int endPostNo, String keyword) {
	    // 내용 검색 구현 (예: 내용에 키워드가 포함된 문의 검색)
	    // SQL 쿼리를 작성하여 keyword를 포함하는 내용을 가진 결과를 반환
		InquiryMapper inquiryMapper = sqlSession.getMapper(InquiryMapper.class);
		return inquiryMapper.searchInquiryByContent(startPostNo, endPostNo, keyword);
	}

	public int getSearchInquiryAllCount(String keyword) {
		InquiryMapper inquiryMapper = sqlSession.getMapper(InquiryMapper.class);
	    return inquiryMapper.getSearchInquiryAllCount(keyword);
	}
	public int getSearchInquiryTitleCount(String keyword) {
		InquiryMapper inquiryMapper = sqlSession.getMapper(InquiryMapper.class);
	    return inquiryMapper.getSearchInquiryTitleCount(keyword);
	}
	public int getSearchInquiryContentCount(String keyword) {
		InquiryMapper inquiryMapper = sqlSession.getMapper(InquiryMapper.class);
	    return inquiryMapper.getSearchInquiryContentCount(keyword);
	}

	public int getMyInquiryCount(long memId) {
		InquiryMapper inquiryMapper = sqlSession.getMapper(InquiryMapper.class);
		return inquiryMapper.getMyInquiryCount(memId);
	}
	public List<InquiryInfoDTO> getMyInquiryDetail(int startPostNo, int endPostNo, long memId) {
		InquiryMapper inquiryMapper = sqlSession.getMapper(InquiryMapper.class);
		return inquiryMapper.getMyInquiryDetail(startPostNo, endPostNo, memId);
	}
}