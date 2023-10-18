package com.javajo.sunshineRoad.model.service.impl.mypageMember;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.mypageMember.MypageReservationDAO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageReservationDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;
import com.javajo.sunshineRoad.model.service.IService.mypageMember.MypageReservationService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MypageReservationImpl implements MypageReservationService {
	
    private final MypageReservationDAO reservationDAO;

	@Override
	public int getReserveCount(int uId) {
	    return reservationDAO.getReserveCount(uId);

	}

	@Override
	public List<MypageReservationDTO> getListInfo(int uId, PageInfo pageInfo) {
		return reservationDAO.getListInfo(uId, pageInfo);
	}

	@Override
	public MypageReservationDTO getInfo(int reservationId) {
		return reservationDAO.getInfo(reservationId);
	}
    
}
