package com.javajo.sunshineRoad.mappers.mypageMember;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageEventWinnerDTO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageEventDTO;

public interface MypageEventMapper {
	public List<MypageEventDTO> selectByNo(int eventId);

	public List<MypageEventWinnerDTO> selectByMember(@Param("uId") int uId, @Param("start") int start, @Param("end") int end);

	public int updateByCancel(int reportId);

	public MypageEventWinnerDTO selectReportByNo(int reportId);

	public int updateEventByWinner(MypageEventWinnerDTO eventWinner);

	public int selectCount(int uId);

	public MypageEventDTO getEventInfo(int eventId);
}