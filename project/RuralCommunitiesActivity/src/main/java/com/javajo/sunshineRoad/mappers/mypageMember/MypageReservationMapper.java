package com.javajo.sunshineRoad.mappers.mypageMember;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageReservationDTO;

public interface MypageReservationMapper {
	public int selectCount(int uId);

	public MypageReservationDTO movepage(int reservationId);

//	Oracle
	public List<MypageReservationDTO> selectByNo(@Param("uId") int uId, @Param("start") int start, @Param("end") int end);


//	MySQL
//	public List<MypageReservationDTO> selectByNo(@Param("uId") int uId, @Param("start") int start, @Param("perPagePostNo") int perPagePostNo);
}