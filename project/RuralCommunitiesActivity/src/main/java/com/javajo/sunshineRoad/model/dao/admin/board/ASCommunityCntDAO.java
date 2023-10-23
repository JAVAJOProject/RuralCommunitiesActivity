package com.javajo.sunshineRoad.model.dao.admin.board;

import com.javajo.sunshineRoad.mappers.admin.AdminSCommunityCntMapper;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

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