package com.javajo.sunshineRoad.model.service.IService.mypageMember;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageFavoriteDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;

public interface MypageFavoriteService {
    public List<MypageFavoriteDTO> getInfo(int uId, PageInfo pageInfo);

	public int getActivityCount(int uId);

	public List<MypageFavoriteDTO> getListInfo(int uId);
}
