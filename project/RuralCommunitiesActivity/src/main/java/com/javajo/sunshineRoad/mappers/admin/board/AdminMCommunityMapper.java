package com.javajo.sunshineRoad.mappers.admin.board;

import com.javajo.sunshineRoad.model.dto.admin.board.AMCommunityDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface AdminMCommunityMapper {

	//삭제하기 객체
	public int deleteMCommunityPost(int uCommunityPostId);


	//상세조회
	public List<AMCommunityDTO> detailMCommunity(int uCommunityPostId);

	// Oracle
//	//전체 조회
//	public List<AMCommunityDTO> getAllmCommunity(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);


	// MySQL
	//전체 조회
	public List<AMCommunityDTO> getAllmCommunity(@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int perPagePostCount);


}