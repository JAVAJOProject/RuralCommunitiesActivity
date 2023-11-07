package com.javajo.sunshineRoad.model.service.IService.mypageMember;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageFavoriteDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;

public interface MypageFavoriteService {
	public List<MypageFavoriteDTO> getInfoEvent(int uId, PageInfo pageInfo);

	public int getActivityCountEvent(int uId);

	public List<MypageFavoriteDTO> getListInfoEvent(int uId, PageInfo pageInfo);
}