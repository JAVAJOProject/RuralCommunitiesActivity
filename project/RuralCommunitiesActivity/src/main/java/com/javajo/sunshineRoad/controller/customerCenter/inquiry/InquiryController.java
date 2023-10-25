package com.javajo.sunshineRoad.controller.customerCenter.inquiry;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.customerCenter.inquiry.InquiryInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.customerCenter.inquiry.InquiryService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/inquiry")
@RequiredArgsConstructor
public class InquiryController {
	
	private final InquiryService inquiryService;

		
	@GetMapping("/list/{requestPageNo}")
	public ResponseEntity<List<InquiryInfoDTO>> inquiryList(@PathVariable("requestPageNo") int requsetPageNo){
		int perPagePostCount = 3; // 페이지 당 표시할 항목 수
		
		    int totalCount = inquiryService.getInquiryListCount();
			List<InquiryInfoDTO> resultPosts = inquiryService.getRequestPageInquiryList(totalCount, perPagePostCount, requsetPageNo);
		    return ResponseEntity.ok(resultPosts);
	}

	    
	@GetMapping("/search/{searchingTypeId}/{requestPageNo}")
	public ResponseEntity<List<InquiryInfoDTO>> searchInquiry(
			@PathVariable int searchingTypeId,
			@RequestParam String keyword,
			@PathVariable int requestPageNo) {
		int perPagePostCount = 3; // 페이지 당 표시할 항목 수
		
		
		if (searchingTypeId == 0) { // 전체 검색
			int totalCount = inquiryService.getSearchInquiryAllCount(keyword);
			List<InquiryInfoDTO> lists = inquiryService.searchInquiryAll(totalCount,  perPagePostCount,  requestPageNo,  searchingTypeId, keyword);
			return ResponseEntity.ok(lists);
		} else if (searchingTypeId == 1) { // 제목 검색
			int totalCount = inquiryService.getSearchInquiryTitleCount(keyword);
			List<InquiryInfoDTO> lists = inquiryService.searchInquiryByTitle(totalCount,  perPagePostCount,  requestPageNo,  searchingTypeId, keyword);
			return ResponseEntity.ok(lists);
		} else if (searchingTypeId == 2) { // 내용 검색
			int totalCount = inquiryService.getSearchInquiryContentCount(keyword);
			List<InquiryInfoDTO> lists = inquiryService.searchInquiryByContent(totalCount,  perPagePostCount,  requestPageNo,  searchingTypeId, keyword);
			return ResponseEntity.ok(lists);
		} else {
			// 검색 타입이 올바르지 않을 경우 처리
//			throw new IllegalArgumentException("Invalid searchingTypeId: " + searchingTypeId);
			return ResponseEntity.badRequest().build();
		}
	  
	}
	
	@GetMapping("/detail/{inquiryId}")
	public InquiryInfoDTO inquiryDetail(@PathVariable int inquiryId) {
		
		return inquiryService.getInquiryDetail(inquiryId);
	}
	
	@PostMapping("/detail/update")
	public void inquiryUpdate(InquiryInfoDTO inquiryInfoDTO) {
		inquiryService.inquiryUpdate(inquiryInfoDTO);
		
	}
	
	@PostMapping("/detail/delete")
	public void inquiryDelete(InquiryInfoDTO inquiryInfoDTO) {
		inquiryService.inquiryDelete(inquiryInfoDTO);
		
	}
	
	@PostMapping("/detail/insert")
	public void inquiryInsert(InquiryInfoDTO inquiryInfoDTO) {
		inquiryService.inquiryInsert(inquiryInfoDTO);
		
	}
	//내가 쓴 글 보기
	@GetMapping("/view/{inquiryId}")
	public ResponseEntity<InquiryInfoDTO> viewInquiry(@PathVariable int inquiryId) {
	    InquiryInfoDTO inquiry = inquiryService.getInquiryDetail(inquiryId);
	    return ResponseEntity.ok(inquiry);
	}

	
}
