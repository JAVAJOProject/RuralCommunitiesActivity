package com.javajo.sunshineRoad.model.dao.admin.members;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.AdminCntMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class AdminCntDAO {


	private final SqlSessionTemplate sqlSession;



	//전체카운트
	public int getTotalCount() {
		AdminCntMapper adminCntMapper = sqlSession.getMapper(AdminCntMapper.class);
		return adminCntMapper.getTotalCount();
	}

	public int selectAdminDATECnt(ASearchDTO searchDTO) {
		AdminCntMapper adminCntMapper = sqlSession.getMapper(AdminCntMapper.class);
		return adminCntMapper.selectAdminDATECnt(searchDTO);
	}

	public int appAdminCnt() {
		AdminCntMapper adminCntMapper = sqlSession.getMapper(AdminCntMapper.class);
		return adminCntMapper.appAdminCnt();
	}


}