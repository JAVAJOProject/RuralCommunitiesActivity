package com.javajo.sunshineRoad.model.dao.admin.members;

import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.admin.board.AdminActivityCntMapper;
import com.javajo.sunshineRoad.mappers.admin.board.AdminActivityMapper;
import com.javajo.sunshineRoad.mappers.admin.member.AdminCntMapper;
import com.javajo.sunshineRoad.mappers.admin.member.AdminSellerCntMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class AdminSellerCntDAO {

	
	private final SqlSessionTemplate sqlSession;
	

	
	//전체카운트
	public int getTotalCount() {
		AdminSellerCntMapper adminSellerCntMapper = sqlSession.getMapper(AdminSellerCntMapper.class);
		return adminSellerCntMapper.getTotalCount();
	}
	
	public int selectSellerDATECnt(ASearchDTO searchDTO) {
		AdminSellerCntMapper adminSellerCntMapper = sqlSession.getMapper(AdminSellerCntMapper.class);
		return adminSellerCntMapper.selectSellerDATECnt(searchDTO);
	}
	
	public int appSellerCnt() {
		AdminSellerCntMapper adminSellerCntMapper = sqlSession.getMapper(AdminSellerCntMapper.class);
		return adminSellerCntMapper.appSellerCnt();
	}
	
	public int wrotePostCnt(long sId) {
		AdminSellerCntMapper adminSellerCntMapper = sqlSession.getMapper(AdminSellerCntMapper.class);
		return adminSellerCntMapper.wrotePostCnt(sId);
	}
		
}