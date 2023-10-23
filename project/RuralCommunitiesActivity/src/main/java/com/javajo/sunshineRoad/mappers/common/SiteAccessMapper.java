package com.javajo.sunshineRoad.mappers.common;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SiteAccessMapper {

	//전체 카운트
	public int getTotalCount();
	
}