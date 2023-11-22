package com.javajo.sunshineRoad.controller.mypageMember;

import java.io.IOException;
import java.util.List;

import org.springframework.core.io.UrlResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.javajo.sunshineRoad.model.dto.mainPage.MainPageEventInfoDTO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageEventDTO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageEventWinnerDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;
import com.javajo.sunshineRoad.model.service.IService.common.service.GetOneImgFromPathService;
import com.javajo.sunshineRoad.model.service.IService.mainPage.GetOneEventService;
import com.javajo.sunshineRoad.model.service.IService.mypageMember.MypageEventService;


import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/mypage/member")
@RequiredArgsConstructor
public class MypageEventController {
	private final MypageEventService eventService;
    private final GetOneEventService getOneEventService;
    private final GetOneImgFromPathService getOneImgFromPathService;
    
	@GetMapping("/event/list/page/{currentPage}")
	public List<MypageEventDTO> getEventList(@PathVariable int currentPage /* @SessionAttribute("loginMember") MemberDTO member */) {
//		int uId = member.getUId();
		System.out.println("--------------");
		int uId = 1;
		int eventCount = eventService.getEventCount(uId);
		PageInfo pageInfo = new PageInfo(currentPage, 5, eventCount, 3);
		List<MypageEventDTO> eventpageList = eventService.getEventList(uId, pageInfo);
		return eventpageList;
	}
	// 이벤트 목록 
	@GetMapping("/event/list/all")
	public List<MypageEventDTO> getInfo(/* @SessionAttribute("loginMember") MemberDTO member */) {
//		int uId = member.getUId();
		int eventId = 1;
		System.out.println("MypageEventDTO" + eventId);
		List<MypageEventDTO> eventList = eventService.getInfo(eventId);
		return eventList;
	}
	// 이미지처리
    @GetMapping("/event-image/{id}")
    public ResponseEntity<UrlResource> getMainPageEventData(@PathVariable int id) {
        MainPageEventInfoDTO eventInfoDTO = getOneEventService.getOneEventData(id);
        try {
            return getOneImgFromPathService.getOneImgResourceFromPath(eventInfoDTO.getEventThumbnailImg());
        } catch (IOException e) {
            return ResponseEntity.badRequest().build();
        }
    }
	//이벤트 참여 취소 , 응모 취소 
	@GetMapping("/event/cancel/{reportId}")
	public int cancelEvent(@PathVariable int reportId) {
		System.out.println("reportId" + reportId);
		int selectEvent = eventService.cancelEvent(reportId);
		return selectEvent;
	}
	
	//이벤트 사연 수정 페이지 가기
	@GetMapping("/event/modify/{reportId}")
	public MypageEventWinnerDTO getReport(@PathVariable int reportId) {
		System.out.println("reportId" + reportId);
		MypageEventWinnerDTO selectEvent = eventService.getReport(reportId);
		return selectEvent;
	}
	
	// 이벤트 사연 수정하기 버튼
	@PostMapping("/event/modify")
	public int modifyEvent(@ModelAttribute("eventWinner") MypageEventWinnerDTO eventWinner) {
		System.out.println("eventWinner" + eventWinner);
		int selectEvent = eventService.modifyEvent(eventWinner);
		return selectEvent;
	}

	// 상세보기
//	@GetMapping("/event/{eventId}")
//	public MypageEventDTO getEventInfo(@PathVariable int eventId) {
//		System.out.println("eventId" + eventId);
//		MypageEventDTO selectEvent = eventService.getEventInfo(eventId);
//		return selectEvent;
//	}
	
	//위에 아니며 아래 껄로 처리 하기 
//	 @PostMapping("/event/cancel")
//	    public ResponseEntity<String> cancelEvent(@RequestParam int reportId) {
//	        try {
//	            // 이벤트 취소 작업을 수행하고 성공한 경우 응답을 반환합니다.
//	            int result = eventService.cancelEvent(reportId);
//	            if (result > 0) {
//	                return ResponseEntity.ok("이벤트가 취소되었습니다.");
//	            } else {
//	                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("이벤트 취소에 실패했습니다.");
//	            }
//	        } catch (Exception e) {
//	            // 예외가 발생한 경우 에러 응답을 반환합니다.
//	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("서버 오류가 발생했습니다.");
//	        }
//	    }
}