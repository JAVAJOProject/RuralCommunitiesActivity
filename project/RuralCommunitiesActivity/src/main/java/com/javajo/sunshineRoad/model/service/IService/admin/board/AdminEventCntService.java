package com.javajo.sunshineRoad.model.service.impl.admin.board;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.admin.board.AActivityCntDAO;
import com.javajo.sunshineRoad.model.dao.admin.board.AEventCntDAO;
import com.javajo.sunshineRoad.model.dao.admin.board.AEventDAO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.service.IService.admin.board.IAdminActivityCntService;
import com.javajo.sunshineRoad.model.service.IService.admin.board.IAdminEventCntService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminEventCntService implements IAdminEventCntService {

	
	private final AEventCntDAO eventCntDAO;
	
	@Override
	public int getTotalCount() {
		return eventCntDAO.getTotalCount();
	}
	
	@Override
	public int selectEventRecruitDateCnt(ASearchDTO searchDTO) {
		return eventCntDAO.selectEventRecruitDateCnt(searchDTO);
	}

	@Override
	public int selectEventStartDateCnt(ASearchDTO searchDTO) {
		return eventCntDAO.selectEventStartDateCnt(searchDTO);
	}

	@Override
	public int selectEventCreatedDateCnt(ASearchDTO searchDTO) {
		return eventCntDAO.selectEventCreatedDateCnt(searchDTO);
	}

	@Override
	public int selectEventCnt(ASearchDTO searchDTO) {
		return eventCntDAO.selectEventCnt(searchDTO);
	}



}
