package com.javajo.sunshineRoad.model.service.impl.mypageMember;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.mypageMember.MypageFavoriteDAO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageFavoriteDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;
import com.javajo.sunshineRoad.model.service.IService.mypageMember.MypageFavoriteService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MypageFavoriteImpl implements MypageFavoriteService {

	private final MypageFavoriteDAO favoriteDAO;

	@Override
	public List<MypageFavoriteDTO> getInfoEvent(long uId, PageInfo pageInfo) {
		return favoriteDAO.getInfoEvent(uId, pageInfo);
	}

	@Override
	public int getCountEvent(long uId) {
		return favoriteDAO.getEventCount(uId);
	}

	@Override
	public List<MypageFavoriteDTO> getListInfoEvent(long uId, PageInfo pageInfo) {
		return favoriteDAO.getListInfoEvent(uId, pageInfo);
	}

	@Override
	public int getCountActivity(long uId) {
		return favoriteDAO.getActivityCount(uId);
	}

	@Override
	public List<MypageFavoriteDTO> getInfoActivity(long uId, PageInfo pageInfo) {
		return favoriteDAO.getInfoActivity(uId, pageInfo);
	}

//	@Override
//	public List<MypageFavoriteDTO> getListInfoActivity(long uId, PageInfo pageInfo) {
//		return favoriteDAO.getListInfoEvent(uId, pageInfo);
//	}
//
//	@Override
//	public List<MypageFavoriteDTO> getInfoActivity(long uId, PageInfo pageInfo) {
//		return favoriteDAO.getInfoActivity(uId, pageInfo);
//	}
//
//	@Override
//	public MypageFavoriteDTO getActivityCountActivity(long uId) {
//		return favoriteDAO.getActivityCountActivity(uId);
//	}
}