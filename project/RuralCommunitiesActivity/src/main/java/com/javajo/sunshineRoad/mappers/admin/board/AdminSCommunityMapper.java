package com.javajo.sunshineRoad.mappers.admin.board;

import com.javajo.sunshineRoad.model.dto.admin.board.ASCommunityDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface AdminSCommunityMapper {


	//삭제하기 객체
	public int deleteSCommunityPost(int sellerCommunityPostId);

	//상세조회
	public List<ASCommunityDTO> detailSCommunity(int sellerCommunityPostId);


	// Oracle
//	//전체 조회
//	public List<ASCommunityDTO> getAllsCommunity(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);

	// MySQL

	//전체 조회
	public List<ASCommunityDTO> getAllsCommunity(@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int perPagePostCount);
}