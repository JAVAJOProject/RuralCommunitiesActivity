package com.javajo.sunshineRoad.controller.mypageSeller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.core.io.UrlResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.mainPage.MainPageEventInfoDTO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageEventWinnerDTO;
import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageRequestEventDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;
import com.javajo.sunshineRoad.model.service.IService.common.service.GetOneImgFromPathService;
import com.javajo.sunshineRoad.model.service.IService.mainPage.GetOneEventService;
import com.javajo.sunshineRoad.model.service.IService.mypageSeller.MypageRequestEventService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/mypage/seller")
@RequiredArgsConstructor
public class MypageRequestEventController {
//내가쓴글 -> 체험자 :  소통공간 //   체험제공자 : 마을소식 
	private final MypageRequestEventService reqEventService;
	private final GetOneEventService getOneEventService;
	private final GetOneImgFromPathService getOneImgFromPathService;

	// 전체 리스트
	@GetMapping("/event/list/{currentPage}")
	public List<MypageRequestEventDTO> getEventList(@PathVariable("currentPage") int currentPage /* @SessionAttribute("loginSeller") MypageSellerDTO seller */) {
		long sId = 1;
//		long sId = seller.getSId();
		System.out.println("sId" + sId);
		
		int reservationCount = reqEventService.getEventCount(sId);
		PageInfo pageInfo = new PageInfo(currentPage, 5, reservationCount, 3);
		
		List<MypageRequestEventDTO> selectEvent = reqEventService.getEventList(sId, pageInfo);
		return selectEvent;
	}

	@GetMapping("/event/total-page")
	public ResponseEntity<List<Integer>> getTotalPost() {
		long sId = 1;
//		long sId = seller.getSId();
		System.out.println("sId" + sId);

		int perPagePostNo = 3;
		int reservationCount = reqEventService.getEventCount(sId);
		List<Integer> pageInfo = new ArrayList<Integer>(Arrays.asList(perPagePostNo, reservationCount));
		return ResponseEntity.ok(pageInfo);
	}
	// 등록한 이벤트 이미지처리
    @GetMapping("/event-image/{id}")
    public ResponseEntity<UrlResource> getMainPageEventData(@PathVariable int id) {
        MainPageEventInfoDTO eventInfoDTO = getOneEventService.getOneEventData(id);
        try {
            return getOneImgFromPathService.getOneImgResourceFromPath(eventInfoDTO.getEventThumbnailImg());
        } catch (IOException e) {
            return ResponseEntity.badRequest().build();
        }
    }
	// 상세보기
	// 시향언니꺼 URL 그대로 사용해야함.
	@GetMapping("/event/{eventId}")
	public MypageRequestEventDTO getEventInfo(@PathVariable int eventId) {
		System.out.println("eventId" + eventId);
		MypageRequestEventDTO selectEvent = reqEventService.getEventInfo(eventId);
		return selectEvent;
	}
	// 이벤트 참여자 명단
	@GetMapping("/event/participant/list/{eventId}/{currentPage}")
	public List<MypageEventWinnerDTO> getParticipantList(@PathVariable int eventId, @PathVariable("currentPage") int currentPage) {
		System.out.println("eventId" + eventId);
		int participantCount = reqEventService.getEventParticipantCount(eventId);
		PageInfo pageInfo = new PageInfo(currentPage, 5, participantCount, 3);
		List<MypageEventWinnerDTO> selectParticipant = reqEventService.getParticipantList(eventId, pageInfo);
		return selectParticipant;
	}
	// 이벤트 당첨자 명단 
	@GetMapping("/event/winner/list/{eventId}/{currentPage}")
	public List<MypageEventWinnerDTO> getWinnerList(@PathVariable int eventId, @PathVariable("currentPage") int currentPage) {
		System.out.println("eventId" + eventId);
		
		int winnerCount = reqEventService.getEventWinnerCount(eventId);
		PageInfo pageInfo = new PageInfo(currentPage, 5, winnerCount, 3);
		List<MypageEventWinnerDTO> selectWinner = reqEventService.getWinnerList(eventId, pageInfo);
		return selectWinner;
	}
	// 요청 이벤트 취소 눌렀을때
	@DeleteMapping("/event/cancel/{eventId}")
	public int cancelEventParticipant(@PathVariable int eventId) {
		int canceled = reqEventService.cancelEventParticipant(eventId);

		/*
		 * if (canceled != null) { return ResponseEntity.ok("이벤트가 삭제되었습니다."); } else {
		 * return ResponseEntity.badRequest().body("이벤트 삭제에 실패했습니다."); }
		 */
		return canceled;
	}
	// 수정 페이지 가기
	@GetMapping("/event/modify/{eventId}")
	public MypageRequestEventDTO getEventModifyInfo(@PathVariable int eventId) {
		System.out.println("eventId" + eventId);
		MypageRequestEventDTO selectEvent = reqEventService.getEventModifyInfo(eventId);
		return selectEvent;
	}
	// 수정하기
	@PostMapping("/event/modify")
	public int modifyEvent(/* @ModelAttribute("event") MypageEventDTO event */ @RequestParam int eventId, @RequestParam String eventName) {
		System.out.println("eventId" + eventId);
		
		int selectEvent = reqEventService.modifyEvent(eventId, eventName);
		return selectEvent;
	}
	// 이벤트 게재 요청 하기 (관리자한테)
	@PostMapping("/event/request/{eventId}")
	public ResponseEntity<MypageRequestEventDTO> getRequestEventInfo(@PathVariable int eventId) {
		MypageRequestEventDTO selectEvent = reqEventService.getEventInfo(eventId);

		if (selectEvent != null) {
			return ResponseEntity.ok(selectEvent); // 200
		} else {
			return ResponseEntity.notFound().build(); // 404
		}
	}
}