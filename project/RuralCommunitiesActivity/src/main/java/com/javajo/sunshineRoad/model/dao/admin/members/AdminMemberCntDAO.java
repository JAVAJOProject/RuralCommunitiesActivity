package com.javajo.sunshineRoad.model.dao.admin.members;

import com.javajo.sunshineRoad.mappers.admin.AdminMemberCntMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

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
	
	public int wrotePostCnt(int uId) {
		AdminMemberCntMapper adminMemberCntMapper = sqlSession.getMapper(AdminMemberCntMapper.class);
		return adminMemberCntMapper.wrotePostCnt(uId);
	}
	
	
}