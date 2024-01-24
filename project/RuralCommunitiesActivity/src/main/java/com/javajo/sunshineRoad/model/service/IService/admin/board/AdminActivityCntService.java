package com.javajo.sunshineRoad.model.service.impl.admin.board;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.admin.board.AActivityCntDAO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.service.IService.admin.board.IAdminActivityCntService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminActivityCntService implements IAdminActivityCntService {

	
	private final AActivityCntDAO activityCntDAO;
	
	@Override
	public int getTotalCount() {
		System.out.println("AdminActivityCntService");
		
		return activityCntDAO.getTotalCount();
	}
	
	@Override
	public int selectStartDateActivityCnt(ASearchDTO searchDTO) {
		System.out.println("selectStartDateActivityCnt");
		return activityCntDAO.selectStartDateActivityCnt(searchDTO);
	}

	@Override
	public int selectEndDateActivityCnt(ASearchDTO searchDTO) {
		System.out.println("selectEndDateActivityCnt");
		return activityCntDAO.selectEndDateActivityCnt(searchDTO);
	}

	@Override
	public int selectDateReservationCnt(ASearchDTO searchDTO) {
		System.out.println("selectDateReservationCnt");
		return activityCntDAO.selectDateReservationCnt(searchDTO);
	}

	@Override
	public int selectActivityCnt(ASearchDTO searchDTO) {
		System.out.println("selectActivityCnt");
		return activityCntDAO.selectActivityCnt(searchDTO);
	}



}
