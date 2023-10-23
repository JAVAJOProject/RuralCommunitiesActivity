package com.javajo.sunshineRoad.model.dao.admin.members;

import com.javajo.sunshineRoad.mappers.admin.AdminCntMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

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