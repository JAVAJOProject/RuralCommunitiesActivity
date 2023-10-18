package com.javajo.sunshineRoad.controller.mypageSeller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageSellerCommunityDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;
import com.javajo.sunshineRoad.model.service.IService.mypageSeller.MypageSellerCommunityService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/mypage/seller")
@RequiredArgsConstructor
public class MypageSellerCommunityController {
	private final MypageSellerCommunityService sellerCommunityService;

	@GetMapping("/community/info/{currentPage}")
	public List<MypageSellerCommunityDTO> getInfo(
			@PathVariable int currentPage/* , @SessionAttribute("loginSeller") MypageSellerDTO seller */) {
		int sId = 1;
//		int sId = seller.getSId();
		System.out.println("SellerCommunityDAO" + sId);
		
		int communityCount = sellerCommunityService.getCommunityCount(sId);
		PageInfo pageInfo = new PageInfo(currentPage, 5, communityCount, 3);
		
		List<MypageSellerCommunityDTO> selectSeller = sellerCommunityService.getInfo(sId, pageInfo);
		return selectSeller;
	}
}
