package com.javajo.sunshineRoad.model.service.impl.mypageSeller;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.mypageSeller.MypageSellerDAO;
import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageSellerDTO;
import com.javajo.sunshineRoad.model.service.IService.mypageSeller.MypageSellerService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MypageSellerImpl implements MypageSellerService {

	private final MypageSellerDAO sellerDAO;

	@Override
	public MypageSellerDTO getInfo(long sId) {

		return sellerDAO.getInfo(sId);
	}
}