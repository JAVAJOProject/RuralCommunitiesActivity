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
	public List<MypageFavoriteDTO> getInfo(int uId, PageInfo pageInfo) {
		return favoriteDAO.getInfo(uId, pageInfo);
	}

	@Override
	public int getActivityCount(int uId) {
		return favoriteDAO.getActivityCount(uId);
	}

	@Override
	public List<MypageFavoriteDTO> getListInfo(int uId) {
		return favoriteDAO.getListInfo(uId);
	}
}
