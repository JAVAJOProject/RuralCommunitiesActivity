package com.javajo.sunshineRoad.model.dao.admin.board;

import com.javajo.sunshineRoad.mappers.admin.AdminNoticeCntMapper;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class ANoticeCntDAO {

	private final SqlSessionTemplate sqlSession;
	
	//전체카운트
		public int getTotalCount() {
			System.out.println("ANoticeCntDAO  getTotalCount");
			
			AdminNoticeCntMapper noticeCntMapper = sqlSession.getMapper(AdminNoticeCntMapper.class);
			return noticeCntMapper.getTotalCount();
		}

}