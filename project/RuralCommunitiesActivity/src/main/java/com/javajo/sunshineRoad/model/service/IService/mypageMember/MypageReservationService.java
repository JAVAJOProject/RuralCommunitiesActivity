package com.javajo.sunshineRoad.model.service.IService.mypageMember;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageReservationDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;

public interface MypageReservationService {
	public List<MypageReservationDTO> getListInfo(long uId, PageInfo pageInfo);

	public int getReserveCount(long uId);

	public MypageReservationDTO getInfo(int reservationId);

}