package com.javajo.sunshineRoad.controller.mypageMember;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageReservationDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;
import com.javajo.sunshineRoad.model.service.IService.common.service.GetOneImgFromPathService;
import com.javajo.sunshineRoad.model.service.IService.mainPage.GetOneTotalActivityService;
import com.javajo.sunshineRoad.model.service.IService.mypageMember.MypageReservationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/mypage/member")
@RequiredArgsConstructor
public class MypageReservationController {

	private final MypageReservationService reservationService;
	private final MypageReservationService mypageReservationService;
	private final GetOneImgFromPathService getOneImgFromPathService;
	
   
    private final GetOneTotalActivityService getOneTotalActivityService;
    

	@GetMapping("/reserve/{currentPage}")
	public List<MypageReservationDTO> getListInfo(
			@PathVariable("currentPage") int currentPage /* @SessionAttribute("loginMember") MemberDTO member */) {
		int uId = 1;
		System.out.println("ReservationDAO " + uId);
		System.out.println("currentPage " + currentPage);
		// 페이징 -> 페이지 당 게시글 3개, 한 화면에 페이지 최대 5개
		// 항상 최대 게시글(row) 개수를 알아야함 -> 가져와야함

		// 최대 현재 로그인 한 member의 전체 예약/결제 내역 개수
		int reservationCount = reservationService.getReserveCount(uId);
		PageInfo pageInfo = new PageInfo(currentPage, 5, reservationCount, 3);

		List<MypageReservationDTO> selectReservation = reservationService.getListInfo(uId, pageInfo);
		
		for(MypageReservationDTO reservation : selectReservation) {
			reservation.setPageInfo(pageInfo);
		}
		
		return selectReservation;
	}
	
	@GetMapping("/reserve/total-page")
	public List<Integer> getTotalPost() {
		int uId = 1;
		
		int perPagePostCount = 3;
		int totalPostNo = mypageReservationService.getReserveCount(uId);
		
		return new ArrayList<Integer>(Arrays.asList(perPagePostCount, totalPostNo));
	}

	// 예약내역 이미지 처리
//	 @GetMapping("/total-activity-image/{id}")
//	    public ResponseEntity<UrlResource> getTotalActivityData(@PathVariable int id) {
//	        MainPageTotalActivityInfoDTO totalActivityInfoDTO = getOneTotalActivityService.getOneTotalActivityData(id);
//	        System.out.println(totalActivityInfoDTO.getAThumbnailImg());
//	        try {
//	            return getOneImgFromPathService.getOneImgResourceFromPath(totalActivityInfoDTO.getAThumbnailImg());
//	        } catch (IOException e) {
//	            return ResponseEntity.badRequest().build();
//	        }
//	    }
	

	// 다른 사람의 URL 그대로 사용해야함. -> 체험상세보기
//		@GetMapping("/reserve/{reservationId}")
//		public ReservationDTO getInfo(@PathVariable int reservationId) {
//			System.out.println("reservationId " + reservationId);
//			ReservationDTO selectReservation = reservationService.getInfo(reservationId);
//			return selectReservation;
//		}
	// 결제 하러가기도 마찬가지

}
