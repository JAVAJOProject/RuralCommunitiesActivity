package com.javajo.sunshineRoad.model.dao.admin.members;

import com.javajo.sunshineRoad.mappers.admin.AdminSellerCntMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

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
	
	public int wrotePostCnt(int sId) {
		AdminSellerCntMapper adminSellerCntMapper = sqlSession.getMapper(AdminSellerCntMapper.class);
		return adminSellerCntMapper.wrotePostCnt(sId);
	}
		
}