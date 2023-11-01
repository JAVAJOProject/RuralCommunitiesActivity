package com.javajo.sunshineRoad.model.dao.admin.board;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.admin.board.AdminActivityMapper;
import com.javajo.sunshineRoad.mappers.admin.board.AdminMCommunityMapper;
import com.javajo.sunshineRoad.mappers.admin.board.AdminSCommunityMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.AMCommunityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASCommunityDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class ASCommunityDAO {

	
	private final SqlSessionTemplate sqlSession;

	//전체조회	
	
	public List<ASCommunityDTO> getAllsCommunity(int startPostNo, int endPostNo){
		System.out.println("[SCommunityDAO] getAllsCommunity()");
		
		AdminSCommunityMapper sCommunityMapper = sqlSession.getMapper(AdminSCommunityMapper.class);
		return sCommunityMapper.getAllsCommunity(startPostNo,endPostNo);
	}
	
	
	//상세조회
	public List<ASCommunityDTO> detailSCommunity (int sellerCommunityPostId){
		System.out.println("[SCommunityDAO] detailSCommunity()");
		
		AdminSCommunityMapper sCommunityMapper = sqlSession.getMapper(AdminSCommunityMapper.class);
		return sCommunityMapper.detailSCommunity(sellerCommunityPostId);
	}
	
	
	//삭제하기 객체
	public int deleteSCommunityPost(int sellerCommunityPostId) {
		System.out.println("[SCommunityDAO] deleteSCommunityPost() 객체 삭제");
		
		AdminSCommunityMapper sCommunityMapper = sqlSession.getMapper(AdminSCommunityMapper.class);
		return sCommunityMapper.deleteSCommunityPost(sellerCommunityPostId);
	}
	

	
}
