package com.javajo.sunshineRoad.model.service.impl.admin.board;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.admin.board.AActivityCntDAO;
import com.javajo.sunshineRoad.model.dao.admin.board.ARecActivityCntDAO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.service.IService.admin.board.IAdminActivityCntService;
import com.javajo.sunshineRoad.model.service.IService.admin.board.IAdminRecActivityCntService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminRecActivityCntService implements IAdminRecActivityCntService {

	
	private final ARecActivityCntDAO recActivityCntDAO;

	@Override
	public int getTotalCount() {
		System.out.println("AdminRecActivityCntService  getTotalCount()");
		return recActivityCntDAO.getTotalCount();
	}
	


	
	@Override
	public int selectDateRecActivityCnt(ASearchDTO searchDTO) {
		System.out.println("AdminRecActivityCntService  selectDateRecActivityCnt()");
		return recActivityCntDAO.selectDateRecActivityCnt(searchDTO);
	}




	@Override
	public int selectRecActivityCnt(ASearchDTO searchDTO) {
		System.out.println("AdminRecActivityCntService  selectRecActivityCnt()");
		return recActivityCntDAO.selectRecActivityCnt(searchDTO);
	}
//
//	@Override
//	public int selectEndDateActivityCnt(ASearchDTO searchDTO) {
//		return activityCntDAO.selectEndDateActivityCnt(searchDTO);
//	}
//
//	@Override
//	public int selectDateReservationCnt(ASearchDTO searchDTO) {
//		return activityCntDAO.selectDateReservationCnt(searchDTO);
//	}
//


}
