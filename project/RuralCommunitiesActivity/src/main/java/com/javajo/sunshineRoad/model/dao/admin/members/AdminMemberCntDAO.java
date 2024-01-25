package com.javajo.sunshineRoad.model.dao.admin.members;

import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.admin.board.AdminActivityCntMapper;
import com.javajo.sunshineRoad.mappers.admin.board.AdminActivityMapper;
import com.javajo.sunshineRoad.mappers.admin.member.AdminCntMapper;
import com.javajo.sunshineRoad.mappers.admin.member.AdminMemberCntMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class AdminMemberCntDAO {

	
	private final SqlSessionTemplate sqlSession;
	

	
	//전체카운트
	public int getTotalCount() {
		AdminMemberCntMapper adminMemberCntMapper = sqlSession.getMapper(AdminMemberCntMapper.class);
		return adminMemberCntMapper.getTotalCount();
	}
	
	public int selectMemberDATECnt(ASearchDTO searchDTO) {
		AdminMemberCntMapper adminMemberCntMapper = sqlSession.getMapper(AdminMemberCntMapper.class);
		return adminMemberCntMapper.selectMemberDATECnt(searchDTO);
	}

	public int selectMemberCnt(ASearchDTO searchDTO) {
		AdminMemberCntMapper adminMemberCntMapper = sqlSession.getMapper(AdminMemberCntMapper.class);
		return adminMemberCntMapper.selectMemberCnt(searchDTO);
	}
	
	
	
	public int wrotePostCnt(long uId) {
		AdminMemberCntMapper adminMemberCntMapper = sqlSession.getMapper(AdminMemberCntMapper.class);
		return adminMemberCntMapper.wrotePostCnt(uId);
	}
	
	
}