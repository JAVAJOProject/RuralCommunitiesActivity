package com.javajo.sunshineRoad.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.javajo.sunshineRoad.model.dto.totalActivity.TotalActivityContentDTO;
import com.javajo.sunshineRoad.model.dto.totalActivity.TotalActivityImagesDTO;

@Mapper
public interface RegTotalActivityMapper {
	public List<TotalActivityContentDTO> getRegActivityData();

	public int getTotalActivityCurrentIdData();
	public int getTotalActivityImgCurrentIdData();
	
	public int insertTotalActivityInfoData(TotalActivityContentDTO totalActivityContentDTO);	
	public int insertTotalActivityPostData(TotalActivityContentDTO totalActivityContentDTO);	

	public int insertTotalActivityImagesData(TotalActivityImagesDTO totalActivityImagesDTO);	
	
	public int updateTotalActivityImagesIdInfoData(TotalActivityContentDTO totalActivityContentDTO);	
	
	public int updateTotalActivityInfoData(TotalActivityContentDTO totalActivityContentDTO);
	public int updateTotalActivityPostData(TotalActivityContentDTO totalActivityContentDTO);
	public int updateTotalActivityImgData(TotalActivityContentDTO totalActivityContentDTO);
	
	public int deleteTotalActivityInfoData(int aImgId); //<< i_img_id (모든 테이블 공통 컬럼)
	public int deleteTotalActivityPostData(int aImgId);
	public int deleteTotalActivityImgData(int aImgId);
	
}