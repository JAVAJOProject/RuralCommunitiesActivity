package com.javajo.sunshineRoad.model.dao.admin.board;

import com.javajo.sunshineRoad.mappers.admin.AdminRecActivityCntMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class ARecActivityCntDAO {
	
	private final SqlSessionTemplate sqlSession;
	
	//전체 조회
	public int getTotalCount() {
		System.out.println("ARecActivityCntDAO  getTotalCount()");
		AdminRecActivityCntMapper recActivityCntMapper = sqlSession.getMapper(AdminRecActivityCntMapper.class);
		return recActivityCntMapper.getTotalCount();
	}
	//날짜 조회 -작성일
	public int selectDateRecActivityCnt(ASearchDTO searchDTO){
		System.out.println("ARecActivityCntDAO  selectDateRecActivityCnt()");
		AdminRecActivityCntMapper recActivityCntMapper = sqlSession.getMapper(AdminRecActivityCntMapper.class);
		return recActivityCntMapper.selectDateRecActivityCnt(searchDTO);
	}
	
	public int selectRecActivityCnt(ASearchDTO searchDTO){
		System.out.println("ARecActivityCntDAO  selectRecActivityCnt()");
		AdminRecActivityCntMapper recActivityCntMapper = sqlSession.getMapper(AdminRecActivityCntMapper.class);
		return recActivityCntMapper.selectRecActivityCnt(searchDTO);
	}
	
}