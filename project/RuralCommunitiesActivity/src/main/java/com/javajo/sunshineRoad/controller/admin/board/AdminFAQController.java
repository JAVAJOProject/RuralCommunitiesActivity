package com.javajo.sunshineRoad.controller.admin.board;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.admin.AdminResponseDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AFaqDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.service.impl.admin.board.AdminFaqService;

@RestController
@RequestMapping("/admin/board/faq")
public class AdminFAQController {

	private final AdminFaqService faqService;
	
	
	public AdminFAQController(AdminFaqService faqService) {
		super();
		this.faqService = faqService;
	}
	//조회
	@GetMapping("/getAll/{requestPageNo}")
	public ResponseEntity<List<AFaqDTO>> getAllFaq(@PathVariable int requestPageNo) {
		System.out.println("AdminFAQService  getAllFaq");

		List<AFaqDTO> result = new ArrayList<>();
		try {
			int perPagePostCount = 6;

			result.addAll(faqService.getAllFaq(requestPageNo,perPagePostCount));
			return ResponseEntity.ok(result);
				
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();//400
		}
		
	}
	
//	1	개인정보
//	2	예약 및 결제
//	3	이벤트
//	4	기타
	
	//FAQ 필터링 조회  필요 없을수 있지만 만듬
	@Transactional
	@PostMapping(value = "/select/{requestPageNo}",
            produces = {"application/json; charset=utf-8"})
	public ResponseEntity<List<AFaqDTO>> selectFaqRequest(@RequestBody ASearchDTO searchDTO,@PathVariable int requestPageNo){
		System.out.println("selectFaqRequest()");

		
		int perPagePostCount = 6;
		//theme별

		List<AFaqDTO> result = new ArrayList<>();
		try {
			
			if(searchDTO.getTheme() > 0 && searchDTO.getTheme() <= 4) {
				result.addAll(faqService.selectFaq(searchDTO,requestPageNo,perPagePostCount));
			}else {
				result.addAll(faqService.getAllFaq(requestPageNo,perPagePostCount));
			}
			return ResponseEntity.ok(result);
			
		}catch(Exception e) {
			return ResponseEntity.badRequest().build();
		}
	}
	//상세조회
	@Transactional
	@GetMapping("detail/{noticeId}")
	public ResponseEntity<List<AFaqDTO>> detailFaq (@PathVariable int noticeId){
		System.out.println("detailFaq");
		
		List<AFaqDTO> result = new ArrayList<>();
		try {
		result.addAll(faqService.detailFaq(noticeId));
		
		return ResponseEntity.ok(result);
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();//400
		}
	}
	
	
	//등록하기
	//{"noticeImgId" : 0,"noticeTypeId" : 3,"noticeTitle" : "새로바꿔","noticeContent" : "새로내용"}
		@Transactional
	    @PostMapping(value = "/registration",
	            produces = {"application/json; charset=utf-8"})
		public ResponseEntity<AdminResponseDTO> registrationFaq (
	            @RequestPart(value = "data") AFaqDTO faqDTO ){
			
			
			System.out.println("registrationFaq");
			//이미지 5개가 넘는경우

			try {

				System.out.println("객체저장");
				faqService.registrationFaq(faqDTO);

				AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("faq 등록 완료").build();
				return ResponseEntity.ok(response);
				
			}catch(Exception e) {
				AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("faq 등록 실패").build();
				return ResponseEntity.unprocessableEntity().body(response);
			}
		}
		//수정하기
		@Transactional
	    @PostMapping(value = "/modify",
	            produces = {"application/json; charset=utf-8"})
		public ResponseEntity<AdminResponseDTO> modifyFaq(
	            @RequestPart(value = "data") AFaqDTO faqDTO ){
			
			try {
				
				System.out.println("faq 수정");
				faqService.modifyFaqPost(faqDTO);
				
				AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("faq 수정 완료").build();
				return ResponseEntity.ok(response);
			}catch(Exception e) {
				AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("faq 수정 실패").build();
				return ResponseEntity.unprocessableEntity().body(response);
			}
		}
		
		
		//삭제하기
		@DeleteMapping("/{faqId}")
		public ResponseEntity<AdminResponseDTO> deleteFaqPost(@PathVariable int faqId) {
			System.out.println("faq 삭제");
			try {
				
				faqService.deleteFaqPost(faqId);
				
				AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("faq 삭제 완료").build();
				return ResponseEntity.ok(response);
			}catch(Exception e) {
				AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("faq 삭제 실패").build();
				return ResponseEntity.unprocessableEntity().body(response);
			}
		}
		

}
