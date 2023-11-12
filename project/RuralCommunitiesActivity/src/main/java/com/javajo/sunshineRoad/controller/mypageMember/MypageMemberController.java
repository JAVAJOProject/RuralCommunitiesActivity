package com.javajo.sunshineRoad.controller.mypageMember;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageMemberDTO;
import com.javajo.sunshineRoad.model.service.IService.mypageMember.MypageMemberService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/mypage/member")
@RequiredArgsConstructor
public class MypageMemberController { // 수정 , 입력취소, 탈퇴하기
	private final MypageMemberService memberService;

	// 로그인 한 사람의 개인정보 뽑기
	@GetMapping("/info")
	public MypageMemberDTO getInfo( /* @SessionAttribute("loginMember") MypageMemberDTO member */ ) {
		int uId = 1;
		// int uId = member.getUId();
		System.out.println("MypageMemberDTO" + uId);
		MypageMemberDTO selectMember = memberService.getInfo(uId);
		return selectMember;
	}

	// 수정하기
	@PostMapping("/info/change")
	public int changeInfo(
			/* @ModelAttribute("member") MypageMemberDTO memberChange */ @RequestParam("uName") String uName
	/* @SessionAttribute("loginMember") MypageMemberDTO member */) { //
		System.out.println("uName" + uName);
		int uId = 1;
//		int uId = member.getUId();
		int result = memberService.changeInfo(uName, uId);

		return result;
	}

//	@GetMapping("/info/change")
//	public String changeInfo() {
//		return "잘못된접근입니다.";
//	}
//	 

	// 회원 탈퇴하기 --> 창 뜨면서 진짜로 회원 탈퇴 하겠습니까? 로 하게끔 하기
	@DeleteMapping("/del")
	public ResponseEntity<String> delMember(
			/* @SessionAttribute("loginMember") MypageMemberDTO member */ HttpServletRequest req) {
		int uId = 1;
		// int uId = loginMember.getUId(); // 로그인한 사용자의 uId 가져오기
		boolean deleted = memberService.delMember(uId);
		if (deleted) {
//			HttpSession session = req.getSession();
//			session.invalidate(); //세션 무효화
			return ResponseEntity.ok("회원 탈퇴가 완료되었습니다.");
		} else {
			return ResponseEntity.badRequest().body("회원 탈퇴에 실패했습니다.");
		}
	}

	@GetMapping("/cancel")
	public RedirectView cancel() {
		// 입력 취소 버튼을 클릭하면 메인 페이지로 리다이렉트
		return new RedirectView("/mainpage");

	}

}