package com.javajo.sunshineRoad.mappers.admin;

import com.javajo.sunshineRoad.model.dto.admin.board.ASCommunityDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface AdminSCommunityMapper {

	//전체 조회
	public List<ASCommunityDTO> getAllsCommunity(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);


	//상세조회
	public List<ASCommunityDTO> detailSCommunity(int sellerCommunityPostId);


	//삭제하기 객체
	public int deleteSCommunityPost(int sellerCommunityPostId);

}