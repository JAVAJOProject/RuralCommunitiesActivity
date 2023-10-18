package com.javajo.sunshineRoad.model.dao.customerCenter.inquiry;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.InquiryMapper;
import com.javajo.sunshineRoad.model.dto.customerCenter.inquiry.InquiryInfoDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class InquiryDAO {

	private final SqlSessionTemplate sqlSession;

	public int getInquiryListCount(int inquiryTypeId) {
		InquiryMapper inquiryMapper = sqlSession.getMapper(InquiryMapper.class);
		return inquiryMapper.getInquiryListCount(inquiryTypeId);
	}
	
	public List<InquiryInfoDTO> getRequestPageInquiryList(int startPostNo, int endPostNo, int inquiryTypeId){
		InquiryMapper inquiryMapper = sqlSession.getMapper(InquiryMapper.class);
		List<InquiryInfoDTO> result = inquiryMapper.getRequestPageInquiryList(startPostNo, endPostNo, inquiryTypeId);
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
	
}
