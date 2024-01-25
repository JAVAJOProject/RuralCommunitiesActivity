package com.javajo.sunshineRoad.controller.mypageSeller;

import java.io.IOException;
import java.util.List;

import org.springframework.core.io.UrlResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.mainPage.MainPageEventInfoDTO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageActivityPostDTO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageMemberDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;
import com.javajo.sunshineRoad.model.service.IService.common.service.GetOneImgFromPathService;
import com.javajo.sunshineRoad.model.service.IService.mainPage.GetOneEventService;
import com.javajo.sunshineRoad.model.service.IService.mypageSeller.MypageActivityPostService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/mypage/seller")
@RequiredArgsConstructor
public class MypageActivityPostController {

	private final MypageActivityPostService activityInfoService;
	private final GetOneEventService getOneEventService;
	private final GetOneImgFromPathService getOneImgFromPathService;

	// 체험 게시글 내역
	@GetMapping("/activity/list/{currentPage}")
	public List<MypageActivityPostDTO> getInfo(
			@PathVariable int currentPage /* @SessionAttribute("loginSeller") MypageSellerDTO seller */) {
		long sId = 1;
//		long sId = seller.getSId();
		System.out.println("ActivityInfoDAO" + sId);

		int activityCount = activityInfoService.getActivityCount(sId);
		PageInfo pageInfo = new PageInfo(currentPage, 5, activityCount, 3);
		List<MypageActivityPostDTO> selectActivityInfo = activityInfoService.getInfo(sId, pageInfo);
		return selectActivityInfo;
	}

	// 체험 참여자 명단
	@GetMapping("/activity/participant/list/{postId}/{currentPage}")
	public List<MypageMemberDTO> getList(@PathVariable int postId, @PathVariable int currentPage) {
		System.out.println("postId" + postId);

		int participantCount = activityInfoService.getActivityParticipantCount(postId);
		PageInfo pageInfo = new PageInfo(currentPage, 5, participantCount, 3);

		List<MypageMemberDTO> memberList = activityInfoService.getList(postId, pageInfo);
		return memberList;
	}

	// 등록한 체험 이미지 처리
	@GetMapping("/activity-image/{id}")
	public ResponseEntity<UrlResource> getMainPageEventData(@PathVariable int id) {
		MainPageEventInfoDTO eventInfoDTO = getOneEventService.getOneEventData(id);
		try {
			return getOneImgFromPathService.getOneImgResourceFromPath(eventInfoDTO.getEventThumbnailImg());
		} catch (IOException e) {
			return ResponseEntity.badRequest().build();
		}
	}

	// 체험 상세 보기
	// URL 그대로 사용 해야함. -> 규하오빠 주소 ==> 규하오빠 이거 aId 로 잡았어? postId 로 잡아야하는거아닌강 몰뢍몰뢍
//	@GetMapping("/activity/{postId}")
//	public List<MypageActivityInfoDTO> getDetailsInfo(@PathVariable int postId) {
//		System.out.println("ActivityInfoDTO" + postId);
//		List<MypageActivityInfoDTO> selectActivityDetailsInfo = activityInfoService.getDetailsInfo(postId);
//		return selectActivityDetailsInfo;
//	}
}