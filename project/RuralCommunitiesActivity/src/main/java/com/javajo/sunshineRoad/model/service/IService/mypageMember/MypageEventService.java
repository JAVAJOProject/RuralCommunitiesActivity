package com.javajo.sunshineRoad.model.service.IService.mypageMember;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageEventWinnerDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageEventDTO;

public interface MypageEventService {
	public List<MypageEventDTO> getEventList(int uId, PageInfo pageInfo);

	public int cancelEvent(int reportId);

	public MypageEventWinnerDTO getReport(int reportId);

	public int modifyEvent(MypageEventWinnerDTO eventWinner);

	public int getEventCount(int uId);

	public List<MypageEventDTO> getInfo(int eventId);
}