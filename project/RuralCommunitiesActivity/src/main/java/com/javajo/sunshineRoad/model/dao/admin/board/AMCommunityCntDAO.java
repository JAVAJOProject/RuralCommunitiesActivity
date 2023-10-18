package com.javajo.sunshineRoad.model.dao.admin.board;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.AdminMCommunityCntMapper;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class AMCommunityCntDAO {

	
	private final SqlSessionTemplate sqlSession;

	
	//전체카운트
	public int getTotalCount() {
		AdminMCommunityCntMapper mCommunityCntMapper = sqlSession.getMapper(AdminMCommunityCntMapper.class);
		return mCommunityCntMapper.getTotalCount();
	}
		
	
}
