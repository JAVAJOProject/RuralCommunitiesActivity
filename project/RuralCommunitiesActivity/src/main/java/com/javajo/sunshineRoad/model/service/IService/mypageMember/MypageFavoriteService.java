package com.javajo.sunshineRoad.model.service.IService.mypageMember;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageFavoriteDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;

public interface MypageFavoriteService {
	public List<MypageFavoriteDTO> getInfoEvent(int uId, PageInfo pageInfo);

	public int getCountEvent(int uId);

	public List<MypageFavoriteDTO> getListInfoEvent(int uId, PageInfo pageInfo);

	public int getCountActivity(int uId);

	public List<MypageFavoriteDTO> getInfoActivity(int uId, PageInfo pageInfo);

//	public List<MypageFavoriteDTO> getListInfoActivity(int uId, PageInfo pageInfo);
//
//	public List<MypageFavoriteDTO> getInfoActivity(int uId, PageInfo pageInfo);
//
//	public MypageFavoriteDTO getActivityCountActivity(int uId);
}