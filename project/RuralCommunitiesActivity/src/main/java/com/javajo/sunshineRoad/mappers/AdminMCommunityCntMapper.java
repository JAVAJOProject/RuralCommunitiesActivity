package com.javajo.sunshineRoad.mappers;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AdminMCommunityCntMapper {

	
	//전체 카운트
	public int getTotalCount();

}
