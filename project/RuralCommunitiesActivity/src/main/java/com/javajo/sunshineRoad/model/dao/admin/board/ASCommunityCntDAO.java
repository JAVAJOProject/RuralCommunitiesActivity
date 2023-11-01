package com.javajo.sunshineRoad.model.dao.admin.board;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.admin.board.AdminActivityCntMapper;
import com.javajo.sunshineRoad.mappers.admin.board.AdminActivityMapper;
import com.javajo.sunshineRoad.mappers.admin.board.AdminMCommunityCntMapper;
import com.javajo.sunshineRoad.mappers.admin.board.AdminSCommunityCntMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class ASCommunityCntDAO {

	
	private final SqlSessionTemplate sqlSession;

	
	//전체카운트
	public int getTotalCount() {
		AdminSCommunityCntMapper sCommunityCntMapper = sqlSession.getMapper(AdminSCommunityCntMapper.class);
		return sCommunityCntMapper.getTotalCount();
	}
		
	
}
