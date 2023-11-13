package com.javajo.sunshineRoad.controller.mypageMember;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageActivityReviewDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;
import com.javajo.sunshineRoad.model.service.IService.common.service.GetOneImgFromPathService;
import com.javajo.sunshineRoad.model.service.IService.mainPage.GetOneTotalActivityService;
import com.javajo.sunshineRoad.model.service.IService.mypageMember.MypageActivityReviewService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/mypage/member/review")
@RequiredArgsConstructor
public class MypageActivityReviewController {
	private final MypageActivityReviewService aReviewService;
	private final GetOneImgFromPathService getOneImgFromPathService;
    private final GetOneTotalActivityService getOneTotalActivityService;

	// 체험 리뷰 -> aid로
	@GetMapping("/activity/list/{currentPage}")
	public List<MypageActivityReviewDTO> getInfo(@PathVariable int currentPage /* @SessionAttribute("loginMember") MypageMemberDTO member */) {
		int uId = 1;
//		int uId = member.getUId();
		System.out.println("uId" + uId);
		int activityCount = aReviewService.getActivityCount(uId);
		PageInfo pageInfo = new PageInfo(currentPage, 5, activityCount, 3);
		List<MypageActivityReviewDTO> selectaReview = aReviewService.getInfo(uId, pageInfo);
		return selectaReview;
	}
	
	@GetMapping("/activity/{revId}")
	public MypageActivityReviewDTO getReview(@PathVariable int revId) {
		MypageActivityReviewDTO review = aReviewService.getReview(revId);
		return review;
	}
	
	@GetMapping("/total-page")
	public List<Integer> getTotalPost() {
		int uId = 1;
		
		int perPagePostCount = 3;
		int totalPostNo = aReviewService.getActivityCount(uId);
		
		return new ArrayList<Integer>(Arrays.asList(perPagePostCount, totalPostNo));
	}

	// 후기쓰러가기 누르면 가는 페이지 -> 게시글 번호 필요
//	@GetMapping("/activity/write/{postId}")
//	public String writeRev(@PathVariable int postId) {
//		System.out.println("postId" + postId);
//		return "";
//	}

	// 후기 작성하기 누르면 폼 내용 받는 -> 게시글 번호, 멤버번호(작성자) 필요
	@PostMapping("/activity/write/{reservationId}")
	public int writeRev(@PathVariable int reservationId, MypageActivityReviewDTO review
			/*@SessionAttribute("loginMember") MemberDTO member*/) {
		System.out.println("rContent" + review.getRContent());
//		int uId = member.getUId();
		int uId = 1;
		review.setUId(uId);
		review.setReservationId(reservationId);
		/*
		 * 아래와 같은 코드 ActivityReviewDTO rev = new ActivityReviewDTO();
		 * rev.setRContent(rContent); rev.setUid(uId);
		 */
		aReviewService.writeRev(review);
		return 1;
	}

	// 후기수정하기 누르면 가는 페이지 -> 리뷰 번호 필요
//	@GetMapping("/activity/update/{revId}")
//	public String updateRev(@PathVariable int revId) {
//		System.out.println("revId" + revId);
//		return "/localhost:3000/app/myInfo/experiencer/review/edit/{revId}";
//	}

	// !!후기 수정하기 누르면 폼 내용 받는 -> 리뷰 번호 필요  -> 이걸알면 다 알아성
	@PostMapping("/activity/update")
	public int updateRev(MypageActivityReviewDTO review) {
		System.out.println("rContent" + review.getRContent());
		/*
		 * 아래와 같은 코드 ActivityReviewDTO rev = new ActivityReviewDTO();
		 * rev.setRContent(rContent);
		 */
        return aReviewService.updateRev(review);
	}
	
	@DeleteMapping("/cancel/{revId}")
	public ResponseEntity<String> cancelReview(@PathVariable int revId, @RequestParam int reservationId) {
	    // 여기에서 예약 취소 로직을 수행
	    // 취소가 성공적으로 이루어졌다고 가정하고 메시지를 반환
		String message;
		int result = aReviewService.cancel(revId, reservationId);
		if(result == 1) {
			message = "삭제하였습니다.";
		} else {
			message = "삭제에 실패하였습니다.";
		}
		
	    return ResponseEntity.ok(message);
	}

}