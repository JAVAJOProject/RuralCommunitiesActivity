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
	public List<MypageFavoriteDTO> getInfoEvent(int uId, PageInfo pageInfo) {
		return favoriteDAO.getInfoEvent(uId, pageInfo);
	}

	@Override
	public int getCountEvent(int uId) {
		return favoriteDAO.getEventCount(uId);
	}

	@Override
	public List<MypageFavoriteDTO> getListInfoEvent(int uId, PageInfo pageInfo) {
		return favoriteDAO.getListInfoEvent(uId, pageInfo);
	}

	@Override
	public int getCountActivity(int uId) {
		return favoriteDAO.getActivityCount(uId);
	}

	@Override
	public List<MypageFavoriteDTO> getInfoActivity(int uId, PageInfo pageInfo) {
		return favoriteDAO.getInfoActivity(uId, pageInfo);
	}

//	@Override
//	public List<MypageFavoriteDTO> getListInfoActivity(int uId, PageInfo pageInfo) {
//		return favoriteDAO.getListInfoEvent(uId, pageInfo);
//	}
//
//	@Override
//	public List<MypageFavoriteDTO> getInfoActivity(int uId, PageInfo pageInfo) {
//		return favoriteDAO.getInfoActivity(uId, pageInfo);
//	}
//
//	@Override
//	public MypageFavoriteDTO getActivityCountActivity(int uId) {
//		return favoriteDAO.getActivityCountActivity(uId);
//	}
}