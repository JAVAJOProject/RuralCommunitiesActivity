package com.javajo.sunshineRoad.model.dao.admin.board;

import com.javajo.sunshineRoad.mappers.admin.AdminMCommunityCntMapper;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

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