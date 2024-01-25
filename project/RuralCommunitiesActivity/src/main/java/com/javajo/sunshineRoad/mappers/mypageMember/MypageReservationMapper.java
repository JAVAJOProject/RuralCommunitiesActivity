package com.javajo.sunshineRoad.mappers.mypageMember;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageReservationDTO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface MypageReservationMapper {
	public int selectCount(long uId);

	public MypageReservationDTO movepage(int reservationId);

//	Oracle
//	public List<MypageReservationDTO> selectByNo(@Param("uId") long uId, @Param("start") int start, @Param("end") int end);


//	MySQL
	public List<MypageReservationDTO> selectByNo(@Param("uId") long uId, @Param("start") int start, @Param("perPagePostNo") int perPagePostNo);
}