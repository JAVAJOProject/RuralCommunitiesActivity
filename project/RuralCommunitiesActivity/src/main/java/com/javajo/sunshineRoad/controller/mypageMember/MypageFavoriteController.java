package com.javajo.sunshineRoad.controller.mypageMember;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

import org.springframework.core.io.UrlResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.mainPage.MainPageEventInfoDTO;
import com.javajo.sunshineRoad.model.dto.mainPage.MainPageTotalActivityInfoDTO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageEventDTO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageFavoriteDTO;
import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageActivityInfoDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;
import com.javajo.sunshineRoad.model.service.IService.common.service.GetOneImgFromPathService;
import com.javajo.sunshineRoad.model.service.IService.mainPage.GetOneEventService;
import com.javajo.sunshineRoad.model.service.IService.mainPage.GetOneTotalActivityService;
import com.javajo.sunshineRoad.model.service.IService.mypageMember.MypageFavoriteService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/mypage/member")
@RequiredArgsConstructor
public class MypageFavoriteController {
	private final MypageFavoriteService favoriteService;
	private final GetOneTotalActivityService getOneTotalActivityService;
	private final GetOneEventService getOneEventService;
	private final GetOneImgFromPathService getOneImgFromPathService;

	// 이벤트 찜 목록
	@GetMapping("/favorite/list/event/all")
	public List<MypageFavoriteDTO> getListInfoEvent(/* @SessionAttribute("loginMember") MypageMemberDTO member */) {
		long uId = 1;
//		long uId = member.getUId();
		System.out.println("FavoriteDAO" + uId);
		int favoriteCount = favoriteService.getCountEvent(uId);
		PageInfo pageInfo = new PageInfo(1, 5, favoriteCount, 6);
		List<MypageFavoriteDTO> favoriteMember = favoriteService.getListInfoEvent(uId, pageInfo);

//		Iterator<MypageFavoriteDTO> itr = favoriteMember.iterator();
//		List<MypageActivityInfoDTO> actList = new ArrayList<>();
//		List<MypageEventDTO> eventList = new ArrayList<>();
//
//		// 체험, 이벤트 찜 같이 가져가서 따로 list for 문
//		while (itr.hasNext()) {
//			MypageFavoriteDTO act = itr.next();
//
//			// 체험 찜
//			if (act.getActivityInfo() != null) {
//				actList.add(act.getActivityInfo());
//			}
//
//			// 이벤트 찜
//			else {
//				eventList.add(act.getMypageEvent());
//			}
//		}

		return favoriteMember;
	}



	@GetMapping("/favorite/list/event/total-count")
	public List<Integer> getEventTotalCount() {
		long uId = 1;

		int perPagePostNo = 6;
		int totalCount = favoriteService.getCountEvent(uId);

		return new ArrayList<Integer>(Arrays.asList(perPagePostNo, totalCount));
	}
	//페이징처리
	@GetMapping("/favorite/list/event/{currentPage}")
	public List<MypageFavoriteDTO> getInfoEvent(
			@PathVariable int currentPage /* @SessionAttribute("loginMember") MypageMemberDTO member */) {
		long uId = 1;
//		long uId = member.getUId();
		System.out.println("FavoriteDAO " + uId);

		int favoriteCount = favoriteService.getCountEvent(uId);
		PageInfo pageInfo = new PageInfo(currentPage, 5, favoriteCount, 6);
		List<MypageFavoriteDTO> favoriteMember = favoriteService.getInfoEvent(uId, pageInfo);

//		Iterator<MypageFavoriteDTO> itr = favoriteMember.iterator();
//		List<MypageActivityInfoDTO> actList = new ArrayList<>();
//		List<MypageEventDTO> eventList = new ArrayList<>();
//
//		// 체험, 이벤트 찜 같이 가져가서 따로 list for 문
//		while (itr.hasNext()) {
//			MypageFavoriteDTO act = itr.next();
//
//			// 체험 찜
//			if (act.getActivityInfo() != null) {
//				actList.add(act.getActivityInfo());
//			}
//
//			// 이벤트 찜
//			else {
//				eventList.add(act.getMypageEvent());
//			}
//		}

		return favoriteMember;
	}


	@GetMapping("/favorite/list/activity/total-count")
	public List<Integer> getActivityTotalCount() {
		long uId = 1;

		int perPagePostNo = 6;
		int totalCount = favoriteService.getCountActivity(uId);

		return new ArrayList<Integer>(Arrays.asList(perPagePostNo, totalCount));
	}
	// 체험 페이징처리
	@GetMapping("/favorite/list/activity/{currentPage}")
	public List<MypageFavoriteDTO> getInfoActivity(
			@PathVariable int currentPage /* @SessionAttribute("loginMember") MypageMemberDTO member */) {
		long uId = 1;
//			long uId = member.getUId();
		System.out.println("favoriteActivity " + uId);
		int favoriteCount = favoriteService.getCountActivity(uId);
		PageInfo pageInfo = new PageInfo(currentPage, 5, favoriteCount, 6);
		List<MypageFavoriteDTO> favoriteMember = favoriteService.getInfoActivity(uId, pageInfo);
		return favoriteMember;
	}


	// 찜 이미지 처리
	@GetMapping("/favorite-image/{postTypeId}/{uId}")
	public ResponseEntity<UrlResource> getMainPageEventData(@PathVariable int postTypeId, @PathVariable long uId) {
		uId = 1;
		System.out.println("postTypeId " + postTypeId);
		System.out.println("uIdCheck " + uId);
		try {
			if (postTypeId == 1) {
				MainPageTotalActivityInfoDTO activityInfoDTO = getOneTotalActivityService.getOneTotalActivityData(uId);
				return getOneImgFromPathService.getOneImgResourceFromPath(activityInfoDTO.getAThumbnailImg());
			} else if (postTypeId == 4) {
				MainPageEventInfoDTO eventInfoDTO = getOneEventService.getOneEventData(uId);
				return getOneImgFromPathService.getOneImgResourceFromPath(eventInfoDTO.getEventThumbnailImg());
			} else {
				return ResponseEntity.badRequest().build();
			}
		} catch (IOException e) {
			return ResponseEntity.badRequest().build();
		}
	}
}