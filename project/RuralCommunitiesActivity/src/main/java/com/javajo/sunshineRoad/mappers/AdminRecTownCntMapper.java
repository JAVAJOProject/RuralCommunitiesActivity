package com.javajo.sunshineRoad.mappers;

import org.apache.ibatis.annotations.Mapper;

import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

@Mapper
public interface AdminRecTownCntMapper {

	
	//전체 카운트
	public int getTotalCount();
	
	public int selectRecTownCnt(ASearchDTO searchDTO);
	
}
