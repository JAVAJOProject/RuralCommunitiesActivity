package com.javajo.sunshineRoad.model.service.IService.mypageSeller;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageSellerCommunityDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;

public interface MypageSellerCommunityService {
	public List<MypageSellerCommunityDTO> getInfo(int sId, PageInfo pageInfo);

	public int getCommunityCount(int sId);
}
