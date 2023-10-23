package com.javajo.sunshineRoad.mappers.admin;;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

@Mapper
public interface AdminMemberCntMapper {

	
	//전체 카운트
	public int getTotalCount();

	public int selectMemberDATECnt(@Param("searchDTO")ASearchDTO searchDTO);
	
	public int wrotePostCnt(int uId);
	

	
}