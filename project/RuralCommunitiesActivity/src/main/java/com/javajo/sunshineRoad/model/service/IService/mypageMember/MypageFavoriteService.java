package com.javajo.sunshineRoad.model.service.IService.mypageMember;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageFavoriteDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;

public interface MypageFavoriteService {
	public List<MypageFavoriteDTO> getInfoEvent(long uId, PageInfo pageInfo);

	public int getCountEvent(long uId);

	public List<MypageFavoriteDTO> getListInfoEvent(long uId, PageInfo pageInfo);

	public int getCountActivity(long uId);

	public List<MypageFavoriteDTO> getInfoActivity(long uId, PageInfo pageInfo);

//	public List<MypageFavoriteDTO> getListInfoActivity(long uId, PageInfo pageInfo);
//
//	public List<MypageFavoriteDTO> getInfoActivity(long uId, PageInfo pageInfo);
//
//	public MypageFavoriteDTO getActivityCountActivity(long uId);
}