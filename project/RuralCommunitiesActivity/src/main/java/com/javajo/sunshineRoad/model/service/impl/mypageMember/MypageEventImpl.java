package com.javajo.sunshineRoad.model.service.impl.mypageMember;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.mypageMember.MypageEventDAO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageEventDTO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageEventWinnerDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;
import com.javajo.sunshineRoad.model.service.IService.mypageMember.MypageEventService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MypageEventImpl implements MypageEventService {

	private final MypageEventDAO eventDAO;

	@Override
	public List<MypageEventDTO> getEventList(int uId, PageInfo pageInfo) {
		return eventDAO.getEventList(uId, pageInfo);
	}

	@Override
	public int cancelEvent(int reportId) {
		return eventDAO.cancelEvent(reportId);
	}

	@Override
	public MypageEventWinnerDTO getReport(int reportId) {
		return eventDAO.getReport(reportId);
	}

	@Override
	public int modifyEvent(MypageEventWinnerDTO eventWinner) {
		return eventDAO.modifyEvent(eventWinner);
	}

	@Override
	public int getEventCount(int uId) {
		return eventDAO.getEventCount(uId);
	}

	@Override
	public List<MypageEventDTO> getInfo(int eventId) {
		return eventDAO.getInfo(eventId);
	}

}