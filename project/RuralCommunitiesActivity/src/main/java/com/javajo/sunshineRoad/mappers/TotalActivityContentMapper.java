package com.javajo.sunshineRoad.mappers;

import org.apache.ibatis.annotations.Mapper;

import com.javajo.sunshineRoad.model.dto.totalActivity.TotalActivityContentDTO;
import com.javajo.sunshineRoad.model.dto.totalActivity.TotalActivityImagesDTO;
@Mapper
public interface TotalActivityContentMapper {
	public TotalActivityContentDTO getOneActivityData(int aId);
	public TotalActivityImagesDTO getTotalActivityImagesData(int aImgId);
}
