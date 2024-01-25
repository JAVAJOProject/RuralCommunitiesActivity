package com.javajo.sunshineRoad.controller.mypageSeller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageSellerDTO;
import com.javajo.sunshineRoad.model.service.IService.mypageSeller.MypageSellerService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/mypage/seller")
@RequiredArgsConstructor
public class MypageSellerController {
	private final MypageSellerService sellerService;

	@GetMapping("/info")
	public MypageSellerDTO getInfo(/* @SessionAttribute("loginSeller") MypageSellerDTO seller */) {
		long sId = 1;
//		long sId = seller.getSId();
		System.out.println("SellerDAO" + sId);
		MypageSellerDTO selectSeller = sellerService.getInfo(sId);
		return selectSeller;
	}

	// 개인정보 입력취소 ---> 그냥 마이페이지로 돌아가게 하기
//	@GetMapping("/cancelMember")
//	public int cancelMember(@PathVariable long uId) {
//		return cancelMemberService.cancelMember(uId);
//	}
//	
	// 회원 탈퇴하기 --> 창 뜨면서 진짜로 회원 탈퇴 하겠습니까? 로 하게끔 하기
//	@DeleteMapping("/{uId}")
//	public int DelMember(@PathVariable long uId) {
//		System.out.println("[AdminMemberController] 회원 삭제");
//		return delMemberService.delMember(uId);
//		
//	}

//	public int delMember(long uId) {
//		System.out.println("[MemberController] delMember()");
//		return delMemberService.delMember(uId); 
//		//("memberMapper.delMember" , uId);	
//	}
}