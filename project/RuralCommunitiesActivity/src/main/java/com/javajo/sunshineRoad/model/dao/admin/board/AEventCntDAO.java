package com.javajo.sunshineRoad.model.dao.admin.board;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.admin.board.AdminActivityCntMapper;
import com.javajo.sunshineRoad.mappers.admin.board.AdminActivityMapper;
import com.javajo.sunshineRoad.mappers.admin.board.AdminEventCntMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class AEventCntDAO {

	
	private final SqlSessionTemplate sqlSession;
	

	
	//전체카운트
	public int getTotalCount() {
		System.out.println("AEventCntDAO  getTotalCount");
		
		AdminEventCntMapper eventCntMapper = sqlSession.getMapper(AdminEventCntMapper.class);
		return eventCntMapper.getTotalCount();
	}
	
	public int selectEventRecruitDateCnt(ASearchDTO searchDTO) {
		System.out.println("AEventCntDAO  selectEventRecruitDateCnt");
		
		AdminEventCntMapper eventCntMapper = sqlSession.getMapper(AdminEventCntMapper.class);
		int result = eventCntMapper.selectEventRecruitDateCnt(searchDTO);
		System.out.println(result);
		return result;
	}
	
	public int selectEventStartDateCnt(ASearchDTO searchDTO) {
		System.out.println("AEventCntDAO  selectEventStartDateCnt");
		
		AdminEventCntMapper eventCntMapper = sqlSession.getMapper(AdminEventCntMapper.class);
		return eventCntMapper.selectEventStartDateCnt(searchDTO);
	}
	
	public int selectEventCreatedDateCnt(ASearchDTO searchDTO) {
		System.out.println("AEventCntDAO  selectEventCreatedDateCnt");
		
		AdminEventCntMapper eventCntMapper = sqlSession.getMapper(AdminEventCntMapper.class);
		return eventCntMapper.selectEventCreatedDateCnt(searchDTO);
	}
	
	
	public int selectEventCnt(ASearchDTO searchDTO) {
		System.out.println("AEventCntDAO  selectEventCnt");
		
		AdminEventCntMapper eventCntMapper = sqlSession.getMapper(AdminEventCntMapper.class);
		int totalCnt = eventCntMapper.selectEventCnt(searchDTO);
		System.out.println(totalCnt);
		return totalCnt;
	}
	
	
	
}
