package com.javajo.sunshineRoad.model.service.impl.mypageSeller;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.mypageSeller.MypageSellerCommunityDAO;
import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageSellerCommunityDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;
import com.javajo.sunshineRoad.model.service.IService.mypageSeller.MypageSellerCommunityService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MypageSellerCommunityImpl implements MypageSellerCommunityService {

	private final MypageSellerCommunityDAO sellerCommunityDAO;

	@Override
	public List<MypageSellerCommunityDTO> getInfo(long sId, PageInfo pageInfo) {
		return sellerCommunityDAO.getInfo(sId, pageInfo);
	}

	@Override
	public int getCommunityCount(long sId) {
		return sellerCommunityDAO.getCommunityCount(sId);
	}
}