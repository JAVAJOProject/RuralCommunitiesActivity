package com.javajo.sunshineRoad.model.dao.admin.board;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.admin.board.AdminActivityCntMapper;
import com.javajo.sunshineRoad.mappers.admin.board.AdminActivityMapper;
import com.javajo.sunshineRoad.mappers.admin.board.AdminEventCntMapper;
import com.javajo.sunshineRoad.mappers.admin.board.AdminFaqCntMapper;
import com.javajo.sunshineRoad.mappers.admin.board.AdminInquiryCntMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class AInquiryCntDAO {

	
	private final SqlSessionTemplate sqlSession;
	

	
	//전체카운트
	public int getAllInquiryCnt() {
		System.out.println("AInquiryCntDAO  getAllInquiryCnt");
		
		AdminInquiryCntMapper inquiryCntMapper = sqlSession.getMapper(AdminInquiryCntMapper.class);
		return inquiryCntMapper.getAllInquiryCnt();
	}
	
	//선택카운트
	public int selectInquiryStatusCnt(ASearchDTO searchDTO) {
		System.out.println("AInquiryCntDAO  selectInquiryStatusCnt");
		
		AdminInquiryCntMapper inquiryCntMapper = sqlSession.getMapper(AdminInquiryCntMapper.class);
		return inquiryCntMapper.selectInquiryStatusCnt(searchDTO);
	}	
	
	//선택카운트
	public int selectInquiryTypesCnt(ASearchDTO searchDTO) {
		System.out.println("AInquiryCntDAO  selectInquiryTypesCnt");
		
		AdminInquiryCntMapper inquiryCntMapper = sqlSession.getMapper(AdminInquiryCntMapper.class);
		return inquiryCntMapper.selectInquiryTypesCnt(searchDTO);
	}	
	
	
	//선택카운트
	public int unansweredInquiryCnt() {
		System.out.println("AInquiryCntDAO  unansweredInquiryCnt");
		
		AdminInquiryCntMapper inquiryCntMapper = sqlSession.getMapper(AdminInquiryCntMapper.class);
		return inquiryCntMapper.unansweredInquiryCnt();
	}	
}
