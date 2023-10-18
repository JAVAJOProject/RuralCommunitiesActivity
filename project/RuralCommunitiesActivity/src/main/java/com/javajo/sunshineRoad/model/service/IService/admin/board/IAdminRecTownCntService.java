package com.javajo.sunshineRoad.model.service.IService.admin.board;

import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

public interface IAdminRecTownCntService {

	//전체 조회
	public int getTotalCount();

	//필터링 조회
	public int selectRecTownCnt(ASearchDTO searchDTO);
}
