package com.javajo.sunshineRoad.model.dao.admin.board;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.AdminActivityCntMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class AActivityCntDAO {

	
	private final SqlSessionTemplate sqlSession;
	

	
	//전체카운트
	public int getTotalCount() {
		AdminActivityCntMapper activityCntMapper = sqlSession.getMapper(AdminActivityCntMapper.class);
		return activityCntMapper.getTotalCount();
	}
	
	public int selectStartDateActivityCnt(ASearchDTO searchDTO) {
		AdminActivityCntMapper activityCntMapper = sqlSession.getMapper(AdminActivityCntMapper.class);
		return activityCntMapper.selectStartDateActivityCnt(searchDTO);
	}
	
	public int selectEndDateActivityCnt(ASearchDTO searchDTO) {
		AdminActivityCntMapper activityCntMapper = sqlSession.getMapper(AdminActivityCntMapper.class);
		return activityCntMapper.selectEndDateActivityCnt(searchDTO);
	}
	
	public int selectDateReservationCnt(ASearchDTO searchDTO) {
		AdminActivityCntMapper activityCntMapper = sqlSession.getMapper(AdminActivityCntMapper.class);
		return activityCntMapper.selectDateReservationCnt(searchDTO);
	}
	
	
	public int SelectActivityCnt(ASearchDTO searchDTO) {
		AdminActivityCntMapper activityCntMapper = sqlSession.getMapper(AdminActivityCntMapper.class);
		int totalCnt = activityCntMapper.selectActivityCnt(searchDTO);
		System.out.println(totalCnt);
		return totalCnt;
	}
	
	
	
}
