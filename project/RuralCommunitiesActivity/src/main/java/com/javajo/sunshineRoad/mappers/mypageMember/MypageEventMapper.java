package com.javajo.sunshineRoad.mappers.mypageMember;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageEventDTO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageEventWinnerDTO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface MypageEventMapper {
	public List<MypageEventDTO> selectByNo(int eventId);

	public int updateByCancel(int reportId);

	public MypageEventWinnerDTO selectReportByNo(int reportId);

	public int updateEventByWinner(MypageEventWinnerDTO eventWinner);

	public int selectCount(long uId);

	public MypageEventDTO getEventInfo(int eventId);

//	Oracle
//	public List<MypageEventDTO> selectByMember(@Param("uId") long uId, @Param("start") int start, @Param("end") int end);

//	MySQL
	public List<MypageEventDTO> selectByMember(@Param("uId") long uId, @Param("start") int start, @Param("perPagePostNo") int perPagePostNo);
}