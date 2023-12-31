package com.javajo.sunshineRoad.mappers.totalActivity;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.totalActivity.ActSummaryListDTO;


@Mapper
public interface TotalActivityListMapper {
	public int getTotalActivityCountData();
	public int getTotalActivityCountByThemeData(int tId);	
	public int getTotalActivityCountByRegionData(int sId);	

//	public TotalActivityContentDTO getOneActivityData(int aId);
	//public List<TotalActivityContentDTO> getAllActivityData();


//	Oracle
	public List<ActSummaryListDTO> getRequestPageTotalActivityData(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
	public List<ActSummaryListDTO> getRequestPageTotalActivityByThemeListData(@Param("tId")int tId, @Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
	public List<ActSummaryListDTO> getRequestPageTotalActivityByRegionListData(@Param("sId")int sId, @Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);


//	MySQL
//	public List<ActSummaryListDTO> getRequestPageTotalActivityData(@Param("startPostNo") int startPostNo, @Param("perPagePostNo") int perPagePostNo);
//	public List<ActSummaryListDTO> getRequestPageTotalActivityByThemeListData(@Param("tId")int tId, @Param("startPostNo") int startPostNo, @Param("perPagePostNo") int perPagePostNo);
//	public List<ActSummaryListDTO> getRequestPageTotalActivityByRegionListData(@Param("sId")int sId, @Param("startPostNo") int startPostNo, @Param("perPagePostNo") int perPagePostNo);
}