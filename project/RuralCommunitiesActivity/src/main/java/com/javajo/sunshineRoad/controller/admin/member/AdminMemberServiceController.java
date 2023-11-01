package com.javajo.sunshineRoad.controller.admin.member;

import com.javajo.sunshineRoad.model.dto.admin.AdminResponseDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AEmailDTO;
import com.javajo.sunshineRoad.model.service.impl.admin.members.AdminEmailService;
import com.javajo.sunshineRoad.model.service.impl.admin.members.AdminMemberService;
import com.javajo.sunshineRoad.model.service.impl.admin.members.AdminSellerService;
import com.javajo.sunshineRoad.model.service.impl.admin.members.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/admin/memberService")
@RequiredArgsConstructor
public class AdminMemberServiceController {

	private final AdminService adminService;
	private final AdminSellerService sellerService;
	private final AdminEmailService emailService;

	// 가입승인요청건 조회하기
	@Transactional
	@GetMapping("/checkApproval/{memType}/{requestPageNo}")
	public ResponseEntity<List<Object>> checkApproval(@PathVariable int requestPageNo, @PathVariable int memType) {

		List<Object> result = new ArrayList<>();

		int perPagePostCount = 8;
		try {
			if (memType == 2) {
				result.addAll(sellerService.appSeller(requestPageNo, perPagePostCount));
			} else if (memType == 3) {
				result.addAll(adminService.appAdmin(requestPageNo, perPagePostCount));
			} else {
				return ResponseEntity.notFound().build();
			}
			return new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.notFound().build();
		}
	}
	// 가입승인요청건 조회하기 필터링
	@Transactional
	@GetMapping("/checkApprovalTotalCount/{memType}/{requestPageNo}")
	public List<Integer> checkApprovalTotalCount(@PathVariable int requestPageNo, @PathVariable int memType) {

		int perPagePostCount = 8;
		int totalPostNo = 0;
		try {
			if (memType == 2) {
				totalPostNo = sellerService.appSellerTotalCount();
			} else if (memType == 3) {
				totalPostNo = adminService.appAdminTotalCount();
			} else {
				totalPostNo = 1;
			}
			return new ArrayList<Integer>(Arrays.asList(perPagePostCount, totalPostNo));
		} catch (Exception e) {
			e.printStackTrace();
			return new ArrayList<Integer>(Arrays.asList(perPagePostCount, totalPostNo));
		}
	}
	
	
	// 가입승인요청건 승인하기
	@Transactional
	@GetMapping("updateApproval/{memType}/{id}")
	public ResponseEntity<AdminResponseDTO> updateApproval(@PathVariable int memType, @PathVariable int id) {

		try {
			if (memType == 2) {
				sellerService.updateApp(id);
			} else if (memType == 3) {
				adminService.updateApp(id);
			} else {
				AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("요청 정보가 잘못되었습니다.").build();
				return ResponseEntity.badRequest().body(response);
			}
			AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("가입승인 완료").build();
			return ResponseEntity.ok(response);
		} catch (Exception e) {
			e.printStackTrace();
			AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("예외 발생").build();
			return ResponseEntity.badRequest().body(response);
		}
	}

	// 광고메일보내기
	@Transactional
	@PostMapping(value = "/mailWrite", produces = { "application/json; charset=utf-8" })
	public ResponseEntity<AdminResponseDTO> MailWrite(@RequestBody AEmailDTO emailDTO) throws Exception {

		try {
			emailService.sendMail(emailDTO);
			System.out.println(emailDTO.getSenderName() + emailDTO.getSenderMail() + emailDTO.getReceiveMail());
			
			AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("메일발송완료").build();
			return ResponseEntity.ok(response);
		} catch (Exception e) {
			e.printStackTrace();
			AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("메일발송완료 실패").build();
			return ResponseEntity.unprocessableEntity().body(response);
		}
	}

}