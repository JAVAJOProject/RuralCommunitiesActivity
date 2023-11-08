package com.javajo.sunshineRoad.mappers.common;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SiteAccessMapper {
	public int recordVisitation();
}