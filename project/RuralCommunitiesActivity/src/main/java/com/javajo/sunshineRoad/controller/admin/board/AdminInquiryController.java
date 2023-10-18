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
import com.javajo.sunshineRoad.model.dto.admin.board.AInquiryDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.service.impl.admin.board.AdminInquiryService;


@RestController
@RequestMapping("/admin/board/inquiry")
public class AdminInquiryController {

	private final  AdminInquiryService inquiryService;

	public AdminInquiryController(AdminInquiryService inquiryService) {
		super();
		this.inquiryService = inquiryService;
	}
	
	
	
	//전체조회
	@GetMapping("/getAll/{requestPageNo}")
	public ResponseEntity<List<AInquiryDTO>> getAllInquiry(@PathVariable int requestPageNo) {
		System.out.println("AdminInquiryController  getAllInquiry");

		List<AInquiryDTO> result = new ArrayList<>();
		try {
			int perPagePostCount = 6;

			result.addAll(inquiryService.getAllInquiry(requestPageNo,perPagePostCount));
			return ResponseEntity.ok(result);
				
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();//400
		}
		
	}
	//미답변상태인것
	//답변완료
	@Transactional
	@PostMapping(value = "/select/{requestPageNo}",
            produces = {"application/json; charset=utf-8"})
	public ResponseEntity<List<AInquiryDTO>> selectInquiryRequest(@RequestBody ASearchDTO searchDTO,@PathVariable int requestPageNo){
		System.out.println("selectInquiryRequest()");
		
		int perPagePostCount = 6;

		List<AInquiryDTO> result = new ArrayList<>();
		try {
			
			if(searchDTO.getStatus() > 0 && searchDTO.getStatus() <= 2) {//--1 대기 2 완료
				result.addAll(inquiryService.selectInquiryStatus(searchDTO,requestPageNo,perPagePostCount));
			}else if(searchDTO.getTheme() > 0 && searchDTO.getTheme() <= 4){//1건의 2 불편 3콜라보 4기타
				result.addAll(inquiryService.selectInquiryTypes(searchDTO,requestPageNo,perPagePostCount));
			}else {
				result.addAll(inquiryService.getAllInquiry(requestPageNo,perPagePostCount));
			}
			return ResponseEntity.ok(result);
			
		}catch(Exception e) {
			return ResponseEntity.badRequest().build();
		}
	}

	
	//미답변 카운트
		@GetMapping("/Unanswered")
		public ResponseEntity<AdminResponseDTO> UnansweredInquiryCnt() {
			System.out.println("AdminInquiryController  UnansweredInquiryCnt");

			int count = 0;
			try {
				count = inquiryService.UnansweredInquiryCnt();
				
				AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("미답변건 확인완료"+count+"건").build();
				return ResponseEntity.ok(response);	
			} catch (Exception e) {
				AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("미답변건 확인 실패").build();
				return ResponseEntity.unprocessableEntity().body(response);
			}
			
		}
	

		//상세조회
		@Transactional
		@GetMapping("detail/{inquiryId}")
		public ResponseEntity<List<AInquiryDTO>> detailInquiry (@PathVariable int inquiryId){
			System.out.println("detailInquiry");
			
			List<AInquiryDTO> result = new ArrayList<>();
			try {
			result.addAll(inquiryService.detailInquiry(inquiryId));
			
			return ResponseEntity.ok(result);
			} catch (Exception e) {
				return ResponseEntity.badRequest().build();//400
			}
		}
				
		
	//문의 답변하기 - 수정하기임
	@Transactional
    @PostMapping(value = "/answer",
            produces = {"application/json; charset=utf-8"})
	public ResponseEntity<AdminResponseDTO> answerInquiry(
            @RequestPart(value = "data") AInquiryDTO AInquiryDTO ){
		
		try {
			
			System.out.println("문의 답변");
			inquiryService.answerInquiry(AInquiryDTO);
			
			AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("문의 답변 완료").build();
			return ResponseEntity.ok(response);
		}catch(Exception e) {
			AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("문의 답변 실패").build();
			return ResponseEntity.unprocessableEntity().body(response);
		}
	}
	
	//삭제
	@DeleteMapping("/{inquiryId}")
	public ResponseEntity<AdminResponseDTO> deleteInquiryPost(@PathVariable int inquiryId) {
		System.out.println("뮨의 삭제");
		try {
			
			inquiryService.deleteInquiryPost(inquiryId);
			
			AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("문의 삭제 완료").build();
			return ResponseEntity.ok(response);
		}catch(Exception e) {
			AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("문의 삭제 실패").build();
			return ResponseEntity.unprocessableEntity().body(response);
		}
	}

}
