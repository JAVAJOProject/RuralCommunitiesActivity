package com.javajo.sunshineRoad.model.dao.admin.board;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.admin.board.AdminActivityCntMapper;
import com.javajo.sunshineRoad.mappers.admin.board.AdminActivityMapper;
import com.javajo.sunshineRoad.mappers.admin.board.AdminEventCntMapper;
import com.javajo.sunshineRoad.mappers.admin.board.AdminFaqCntMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class AFaqCntDAO {

	
	private final SqlSessionTemplate sqlSession;
	

	
	//전체카운트
	public int getTotalCount() {
		System.out.println("AFaqCntDAO  getTotalCount");
		
		AdminFaqCntMapper faqCntMapper = sqlSession.getMapper(AdminFaqCntMapper.class);
		return faqCntMapper.getTotalCount();
	}
	
	//선택카운트
	public int selectFaqCnt(ASearchDTO searchDTO) {
		System.out.println("AFaqCntDAO  selectFaqCnt");
		
		AdminFaqCntMapper faqCntMapper = sqlSession.getMapper(AdminFaqCntMapper.class);
		return faqCntMapper.selectFaqCnt(searchDTO);
	}	
}
