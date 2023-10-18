package com.javajo.sunshineRoad.model.service.IService.mypageSeller;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageEventWinnerDTO;
import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageRequestEventDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;

public interface MypageRequestEventService {
	public List<MypageRequestEventDTO> getEventList(int sId, PageInfo pageInfo);

	//public RequestEventDTO selectBySeller(int eventId);

	public MypageRequestEventDTO getEventInfo(int eventId);

	public int cancelEventParticipant(int eventId);

	public MypageRequestEventDTO getEventModifyInfo(int eventId);

	public List<MypageEventWinnerDTO> getParticipantList(int eventId, PageInfo pageInfo);

	public List<MypageEventWinnerDTO> getWinnerList(int eventId, PageInfo pageInfo);

	public int modifyEvent(int eventId, String eventName);

	public int getEventCount(int sId);

	public int getEventParticipantCount(int eventId);

	public int getEventWinnerCount(int eventId);
}
