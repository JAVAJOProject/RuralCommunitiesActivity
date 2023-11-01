package com.javajo.sunshineRoad.model.service.impl.admin.board;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.admin.board.AActivityCntDAO;
import com.javajo.sunshineRoad.model.dao.admin.board.ARecTownCntDAO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.service.IService.admin.board.IAdminActivityCntService;
import com.javajo.sunshineRoad.model.service.IService.admin.board.IAdminRecTownCntService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminRecTownCntService implements IAdminRecTownCntService {

	
	private final ARecTownCntDAO recTownCntDAO;

	@Override
	public int getTotalCount() {
		System.out.println("AdminRecTownCntService  getTotalCount()");
		return recTownCntDAO.getTotalCount();
	}

	@Override
	public int selectRecTownCnt(ASearchDTO searchDTO) {
		System.out.println("AdminRecTownCntService  selectRecTownCnt()");
		return recTownCntDAO.selectRecTownCnt(searchDTO);
	}
	


}
