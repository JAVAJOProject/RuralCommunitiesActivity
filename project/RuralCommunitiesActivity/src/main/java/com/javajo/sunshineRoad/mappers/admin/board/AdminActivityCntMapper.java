package com.javajo.sunshineRoad.mappers.admin.board;


import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

@Mapper
public interface AdminActivityCntMapper {

	
	//전체 카운트
	public int getTotalCount();

	public int selectStartDateActivityCnt(ASearchDTO searchDTO);
	
	public int selectEndDateActivityCnt(ASearchDTO searchDTO);
	
	public int selectDateReservationCnt(ASearchDTO searchDTO);
	
	public int selectActivityCnt(@Param("searchDTO")ASearchDTO searchDTO);
	
}
