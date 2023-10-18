package com.javajo.sunshineRoad.controller.mypageMember;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.core.io.UrlResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.mainPage.MainPageEventInfoDTO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageEventDTO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageFavoriteDTO;
import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageActivityInfoDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;
import com.javajo.sunshineRoad.model.service.IService.common.service.GetOneImgFromPathService;
import com.javajo.sunshineRoad.model.service.IService.mainPage.GetOneEventService;
import com.javajo.sunshineRoad.model.service.IService.mypageMember.MypageFavoriteService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/mypage/member")
@RequiredArgsConstructor
public class MypageFavoriteController {
	private final MypageFavoriteService favoriteService;
	private final GetOneEventService getOneEventService;
	private final GetOneImgFromPathService getOneImgFromPathService;
	
	// 찜 목록 
	@GetMapping("/favorite/list")
	public List<MypageEventDTO> getListInfo(/* @SessionAttribute("loginMember") MypageMemberDTO member */) {
		int uId = 1;
//		int uId = member.getUId();
		System.out.println("FavoriteDAO" + uId);
		int favoriteCount = favoriteService.getActivityCount(uId);
		List<MypageFavoriteDTO> favoriteMember = favoriteService.getListInfo(uId);

		Iterator<MypageFavoriteDTO> itr = favoriteMember.iterator();
		List<MypageActivityInfoDTO> actList = new ArrayList<>();
		List<MypageEventDTO> eventList = new ArrayList<>();

		// 체험, 이벤트 찜 같이 가져가서 따로 list for 문
		while (itr.hasNext()) {
			MypageFavoriteDTO act = itr.next();

			// 체험 찜
			if (act.getActivityInfo() != null) {
				actList.add(act.getActivityInfo());
			}

			// 이벤트 찜
			else {
				eventList.add(act.getMypageEvent());
			}
		}

		return eventList;
	}
	
	
	
//페이징처리 
	@GetMapping("/favorite/list/{currentPage}")
	public List<MypageEventDTO> getInfo(
			@PathVariable int currentPage /* @SessionAttribute("loginMember") MypageMemberDTO member */) {
		int uId = 1;
//		int uId = member.getUId();
		System.out.println("FavoriteDAO" + uId);

		int favoriteCount = favoriteService.getActivityCount(uId);
		PageInfo pageInfo = new PageInfo(currentPage, 5, favoriteCount, 6);
		List<MypageFavoriteDTO> favoriteMember = favoriteService.getInfo(uId, pageInfo);

		Iterator<MypageFavoriteDTO> itr = favoriteMember.iterator();
		List<MypageActivityInfoDTO> actList = new ArrayList<>();
		List<MypageEventDTO> eventList = new ArrayList<>();

		// 체험, 이벤트 찜 같이 가져가서 따로 list for 문
		while (itr.hasNext()) {
			MypageFavoriteDTO act = itr.next();

			// 체험 찜
			if (act.getActivityInfo() != null) {
				actList.add(act.getActivityInfo());
			}

			// 이벤트 찜
			else {
				eventList.add(act.getMypageEvent());
			}
		}

		return eventList;
	}
	

	
	
// 찜 이미지 처리 
	@GetMapping("/favorite-image/{id}")
	public ResponseEntity<UrlResource> getMainPageEventData(@PathVariable int id) {
		MainPageEventInfoDTO eventInfoDTO = getOneEventService.getOneEventData(id);
		try {
			return getOneImgFromPathService.getOneImgResourceFromPath(eventInfoDTO.getEventThumbnailImg());
		} catch (IOException e) {
			return ResponseEntity.badRequest().build();
		}
	}
	
	
}