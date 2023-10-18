package com.javajo.sunshineRoad.model.dao.admin.board;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.AdminRecTownCntMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class ARecTownCntDAO {
	
	private final SqlSessionTemplate sqlSession;
	
	//전체 조회
	public int getTotalCount() {
		System.out.println("ARecActivityCntDAO  getTotalCount()");
		AdminRecTownCntMapper recTownCntMapper = sqlSession.getMapper(AdminRecTownCntMapper.class);
		return recTownCntMapper.getTotalCount();
	}
	
	public int selectRecTownCnt(ASearchDTO searchDTO){
		System.out.println("ARecActivityCntDAO  selectRecActivityCnt()");
		AdminRecTownCntMapper recTownCntMapper = sqlSession.getMapper(AdminRecTownCntMapper.class);
		return recTownCntMapper.selectRecTownCnt(searchDTO);
	}
	
}
