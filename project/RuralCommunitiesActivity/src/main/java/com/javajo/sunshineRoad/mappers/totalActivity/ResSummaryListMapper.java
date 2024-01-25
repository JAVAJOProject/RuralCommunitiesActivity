package com.javajo.sunshineRoad.mappers.totalActivity;

import com.javajo.sunshineRoad.model.dto.reservation.ResSummaryListDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ResSummaryListMapper {
	public int getReservationCountData();
	public int getMyReservationCountData(long uId);
	public int getMyServiceReservationCountData(int aId);


//	Oracle
//	public List<ResSummaryListDTO> getRequestPageReservationListData(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
//	public List<ResSummaryListDTO> getRequestPageMyReservationListData(@Param("uId") long uId, @Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
//	public List<ResSummaryListDTO> getRequestPageMyServiceReservationListData(@Param("aId") int aId, @Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);

//	MySQL
	public List<ResSummaryListDTO> getRequestPageReservationListData(@Param("startPostNo") int startPostNo, @Param("perPagePostNo") int perPagePostNo);
	public List<ResSummaryListDTO> getRequestPageMyReservationListData(@Param("uId") long uId, @Param("startPostNo") int startPostNo, @Param("perPagePostNo") int perPagePostNo);
	public List<ResSummaryListDTO> getRequestPageMyServiceReservationListData(@Param("aId") int aId, @Param("startPostNo") int startPostNo, @Param("perPagePostNo") int perPagePostNo);
}