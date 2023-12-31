package com.javajo.sunshineRoad.mappers.admin.board;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.admin.board.AActivityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

@Mapper
public interface AdminEventCntMapper {

	
	//전체 카운트
	public int getTotalCount();

	public int selectEventRecruitDateCnt(ASearchDTO searchDTO);
	
	public int selectEventStartDateCnt(ASearchDTO searchDTO);
	
	public int selectEventCreatedDateCnt(ASearchDTO searchDTO);
	
	public int selectEventCnt(ASearchDTO searchDTO);
	
}
