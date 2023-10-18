package com.javajo.sunshineRoad.model.service.impl.mypageSeller;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.mypageSeller.MypageRequestEventDAO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageEventWinnerDTO;
import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageRequestEventDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;
import com.javajo.sunshineRoad.model.service.IService.mypageSeller.MypageRequestEventService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MypageRequestEventImpl implements MypageRequestEventService {

	private final MypageRequestEventDAO requestEventDAO;

	@Override
	public List<MypageRequestEventDTO> getEventList(int sId, PageInfo pageInfo) {
		return requestEventDAO.getEventList(sId, pageInfo);
	}

	@Override
	public MypageRequestEventDTO getEventInfo(int eventId) {
		return requestEventDAO.getEventInfo(eventId);
	}

	@Override
	public int cancelEventParticipant(int eventId) {
		return requestEventDAO.cancelEventParticipant(eventId);
	}

	@Override
	public MypageRequestEventDTO getEventModifyInfo(int eventId) {
		return requestEventDAO.getEventModifyInfo(eventId);
	}

	@Override
	public List<MypageEventWinnerDTO> getParticipantList(int eventId, PageInfo pageInfo) {
		return requestEventDAO.getParticipantList(eventId, pageInfo);
	}

	@Override
	public List<MypageEventWinnerDTO> getWinnerList(int eventId, PageInfo pageInfo) {
		return requestEventDAO.getWinnerList(eventId, pageInfo);
	}

	@Override
	public int modifyEvent(int eventId, String eventName) {
		return requestEventDAO.modifyEvent(eventId, eventName);
	}

	@Override
	public int getEventCount(int sId) {
		return requestEventDAO.getEventCount(sId);

	}

	@Override
	public int getEventParticipantCount(int eventId) {
		return requestEventDAO.getEventParticipantCount(eventId);
	}

	@Override
	public int getEventWinnerCount(int eventId) {
		return requestEventDAO.getEventWinnerCount(eventId);
	}

}
