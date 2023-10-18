package com.javajo.sunshineRoad.model.dao.admin.board;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.AdminMCommunityMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.AMCommunityDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class AMCommunityDAO {

	
	private final SqlSessionTemplate sqlSession;
	
	//전체조회	
	public List<AMCommunityDTO> getAllmCommunity(int startPostNo, int endPostNo){
		System.out.println("[MCommunityDAO] getAllmCommunity()");
		
		AdminMCommunityMapper mCommunityMapper = sqlSession.getMapper(AdminMCommunityMapper.class);
		return mCommunityMapper.getAllmCommunity(startPostNo,endPostNo);
	}
	
	//상세조회
	public List<AMCommunityDTO> detailMCommunity (int uCommunityPostId){
		System.out.println("[MCommunityDAO] detailMCommunity()");
		
		AdminMCommunityMapper mCommunityMapper = sqlSession.getMapper(AdminMCommunityMapper.class);
		return mCommunityMapper.detailMCommunity(uCommunityPostId);
	}
	
	
	//삭제하기 객체
	public int deleteMCommunityPost(int uCommunityPostId) {
		System.out.println("[MCommunityDAO] deleteMCommunityPost() 객체 삭제");
		
		AdminMCommunityMapper mCommunityMapper = sqlSession.getMapper(AdminMCommunityMapper.class);
		return mCommunityMapper.deleteMCommunityPost(uCommunityPostId);
	}
	

	
}
