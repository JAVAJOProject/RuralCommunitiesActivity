package com.javajo.sunshineRoad.model.dao.admin.board;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.AdminInquiryMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.AInquiryDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class AInquiryDAO {

private final SqlSessionTemplate sqlSession;
	

	//전체조회	
	public List<AInquiryDTO> getAllInquiry(int startPostNo, int endPostNo){
		System.out.println("[AInquiryDAO] getAllInquiry()");
		
		AdminInquiryMapper inquiryMapper = sqlSession.getMapper(AdminInquiryMapper.class);
		return inquiryMapper.getAllInquiry(startPostNo,endPostNo);
	}

	//status	
	public List<AInquiryDTO> selectInquiryStatus(ASearchDTO searchDTO,int startPostNo, int endPostNo){
		System.out.println("[AInquiryDAO] selectInquiryStatus()");
		
		AdminInquiryMapper inquiryMapper = sqlSession.getMapper(AdminInquiryMapper.class);
		return inquiryMapper.selectInquiryStatus(searchDTO,startPostNo,endPostNo);
	}
	
	//theme	
	public List<AInquiryDTO> selectInquiryTypes(ASearchDTO searchDTO,int startPostNo, int endPostNo){
		System.out.println("[AInquiryDAO] selectInquiryTypes()");
		
		AdminInquiryMapper inquiryMapper = sqlSession.getMapper(AdminInquiryMapper.class);
		return inquiryMapper.selectInquiryTypes(searchDTO,startPostNo,endPostNo);
	}
	
	
	//상세조회
	public List<AInquiryDTO> detailInquiry (int inquiryId){
		System.out.println("[AInquiryDAO] detailInquiry()");
		AdminInquiryMapper inquiryMapper = sqlSession.getMapper(AdminInquiryMapper.class);
		return inquiryMapper.detailInquiry(inquiryId);
	}
	
	
	
	

	//답변하기
	public void answerInquiry(AInquiryDTO inquiryDTO) {
		System.out.println("[AInquiryDAO] answerInquiry()");
		
		AdminInquiryMapper inquiryMapper = sqlSession.getMapper(AdminInquiryMapper.class);
		inquiryMapper.answerInquiry(inquiryDTO);
	}

	


	//삭제하기 객체
	public int deleteInquiryPost(int inquiryId) {
		System.out.println("[AInquiryDAO] deleteInquiryPost() 객체 삭제");
		
		AdminInquiryMapper inquiryMapper = sqlSession.getMapper(AdminInquiryMapper.class);
		return inquiryMapper.deleteInquiryPost(inquiryId);
	}
	

	
	
	
	
}
