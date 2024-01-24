package com.javajo.sunshineRoad.mappers.admin.board;


import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

@Mapper
public interface AdminActivityCntMapper {

	
	//전체 카운트
	public int getTotalCount();

	public int selectStartDateActivityCnt(@Param("searchDTO")ASearchDTO searchDTO);
	
	public int selectEndDateActivityCnt(@Param("searchDTO")ASearchDTO searchDTO);
	
	public int selectDateReservationCnt(@Param("searchDTO")ASearchDTO searchDTO);
	
	public int selectActivityCnt(@Param("searchDTO")ASearchDTO searchDTO);
	
}
