package com.javajo.sunshineRoad.mappers.admin;

import org.apache.ibatis.annotations.Mapper;

import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

@Mapper
public interface AdminFaqCntMapper {

	
	//전체 카운트
	public int getTotalCount();
	
	public int selectFaqCnt(ASearchDTO searchDTO);
	

}