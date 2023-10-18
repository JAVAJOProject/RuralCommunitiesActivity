package com.javajo.sunshineRoad.controller.mypageMember;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageMemberCommunityDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;
import com.javajo.sunshineRoad.model.service.IService.mypageMember.MypageMemberCommunityService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/mypage/member")
@RequiredArgsConstructor
public class MypageMemberCommunityController {

	private final MypageMemberCommunityService memCommunityService;
	

	@GetMapping("/community/list/{currentPage}")
	public List<MypageMemberCommunityDTO> getInfo(@PathVariable int currentPage /* @SessionAttribute("loginMember") MemberDTO member */) {
		int uId = 1;
//		int uId = member.getuId();
		System.out.println("MemberCommunityDAO" + uId);
		
		int communityCount = memCommunityService.getActivityCount(uId);
		PageInfo pageInfo = new PageInfo(currentPage, 5, communityCount, 3);
		List<MypageMemberCommunityDTO> selectmemCommunity = memCommunityService.getInfo(uId, pageInfo);
	    return selectmemCommunity;
	}
//	// 내가 쓴글 목록 불러오기  소통공간 
//	@GetMapping("/community/info")
//	public List<MypageMemberCommunityDTO>  getInfo( /* @SessionAttribute("loginMember") MypageMemberDTO member */ ) {
//		int uId = 1;
//		// int uId = member.getUId();
//		System.out.println("MypageMemberCommunityDTO" + uId);
//		List<MypageMemberCommunityDTO> selectCount = memCommunityService.getListInfo(uId);
//		return selectCount;
//	}
}
	