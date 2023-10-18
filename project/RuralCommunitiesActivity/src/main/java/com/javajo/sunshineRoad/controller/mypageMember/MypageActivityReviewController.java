package com.javajo.sunshineRoad.controller.mypageMember;

import java.util.List;

import org.springframework.http.ResponseEntity;
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
	


	// 후기쓰러가기 누르면 가는 페이지 -> 게시글 번호 필요
	@GetMapping("/activity/write/{postId}")
	public String writeRev(@PathVariable int postId) {
		System.out.println("postId" + postId);
		return "";
	}

	// 후기 작성하기 누르면 폼 내용 받는 -> 게시글 번호, 멤버번호(작성자) 필요
	@PostMapping("/activity/write/{postId}")
	public int writeRev(@PathVariable int postId, @RequestParam("rContent") String rContent
			/*@SessionAttribute("loginMember") MemberDTO member*/) {
		System.out.println("rContent" + rContent);
//		int uId = member.getUId();
		int uId = 1;
		MypageActivityReviewDTO rev = MypageActivityReviewDTO.builder().rContent(rContent).uId(uId).aPostId(postId).rStarRating(5).rTitle("제목").build();
		/*
		 * 아래와 같은 코드 ActivityReviewDTO rev = new ActivityReviewDTO();
		 * rev.setRContent(rContent); rev.setUid(uId);
		 */
		aReviewService.writeRev(rev);
		return 1;
	}

	// 후기수정하기 누르면 가는 페이지 -> 리뷰 번호 필요
	@GetMapping("/activity/update/{revId}")
	public String updateRev(@PathVariable int revId) {
		System.out.println("revId" + revId);
		return "http://localhost:8080/어찌고저찌고";
	}

	// !!후기 수정하기 누르면 폼 내용 받는 -> 리뷰 번호 필요  -> 이걸알면 다 알아성
	@PostMapping("/activity/update/{revId}")
	public int updateRev(@PathVariable int revId, @RequestParam("rContent") String rContent) {
		System.out.println("rContent" + rContent);
		MypageActivityReviewDTO rev = MypageActivityReviewDTO.builder().rContent(rContent).revId(revId).build();
		/*
		 * 아래와 같은 코드 ActivityReviewDTO rev = new ActivityReviewDTO();
		 * rev.setRContent(rContent);
		 */
		int result = aReviewService.updateRev(rev);
		return result;
	}
	
	@PostMapping("/cancelReservation")
	public ResponseEntity<String> cancelReservation(@RequestParam("revId") int revId) {
	    // 여기에서 예약 취소 로직을 수행합니다.
	    // 취소가 성공적으로 이루어졌다고 가정하고 메시지를 반환합니다.
	    
	    String message = "취소하였습니다.";
	    return ResponseEntity.ok(message);
	}

}
