package com.javajo.sunshineRoad.mappers.admin;

import com.javajo.sunshineRoad.model.dto.admin.board.AMCommunityDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface AdminMCommunityMapper {

	//전체 조회
	public List<AMCommunityDTO> getAllmCommunity(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);


	//상세조회
	public List<AMCommunityDTO> detailMCommunity(int uCommunityPostId);


	//삭제하기 객체
	public int deleteMCommunityPost(int uCommunityPostId);



}