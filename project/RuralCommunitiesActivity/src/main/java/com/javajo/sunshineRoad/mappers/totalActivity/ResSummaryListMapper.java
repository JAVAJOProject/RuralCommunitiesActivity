package com.javajo.sunshineRoad.mappers.totalActivity;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.reservation.ResSummaryListDTO;

@Mapper
public interface ResSummaryListMapper {
	public int getReservationCountData();
	public int getMyReservationCountData(int uId);
	public int getMyServiceReservationCountData(int aId);


//	Oracle
	public List<ResSummaryListDTO> getRequestPageReservationListData(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
	public List<ResSummaryListDTO> getRequestPageMyReservationListData(@Param("uId") int uId, @Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
	public List<ResSummaryListDTO> getRequestPageMyServiceReservationListData(@Param("aId") int aId, @Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);

//	MySQL
//	public List<ResSummaryListDTO> getRequestPageReservationListData(@Param("startPostNo") int startPostNo, @Param("perPagePostNo") int perPagePostNo);
//	public List<ResSummaryListDTO> getRequestPageMyReservationListData(@Param("uId") int uId, @Param("startPostNo") int startPostNo, @Param("perPagePostNo") int perPagePostNo);
//	public List<ResSummaryListDTO> getRequestPageMyServiceReservationListData(@Param("aId") int aId, @Param("startPostNo") int startPostNo, @Param("perPagePostNo") int perPagePostNo);
}