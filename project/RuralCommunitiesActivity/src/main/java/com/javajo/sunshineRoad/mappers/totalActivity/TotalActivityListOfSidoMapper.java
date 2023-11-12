package com.javajo.sunshineRoad.mappers.totalActivity;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.totalActivity.ActSummaryListDTO;
import com.javajo.sunshineRoad.model.dto.totalActivity.ActSummaryListOfSidoDTO;


@Mapper
public interface TotalActivityListOfSidoMapper {
public int getTotalActivityCountByRegionOfSidoData(int sidoId);

//	Oracle
	public List<ActSummaryListOfSidoDTO> getRequestPageTotalActivityByRegionOfSidoListData(@Param("sidoId") int sidoId, @Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);

//	MySQL
//	public List<ActSummaryListOfSidoDTO> getRequestPageTotalActivityByRegionOfSidoListData(@Param("sidoId") int sidoId, @Param("startPostNo") int startPostNo, @Param("perPagePostNo") int perPagePostNo);
}