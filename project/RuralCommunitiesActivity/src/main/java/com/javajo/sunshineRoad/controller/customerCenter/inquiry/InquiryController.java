package com.javajo.sunshineRoad.controller.customerCenter.inquiry;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.customerCenter.inquiry.InquiryInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.common.memInfoToSearch.SearchMemIdByUserIdService;
import com.javajo.sunshineRoad.model.service.IService.customerCenter.inquiry.InquiryService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/inquiry")
@RequiredArgsConstructor
public class InquiryController {
	
	private final InquiryService inquiryService;
	private final SearchMemIdByUserIdService searchMemIdByUserIdService;

	
	@GetMapping("/list/{requestPageNo}")
	public ResponseEntity<List<InquiryInfoDTO>> inquiryList(@PathVariable("requestPageNo") int requsetPageNo){
		int perPagePostCount = 3; // 페이지 당 표시할 항목 수
		
		    int totalCount = inquiryService.getInquiryListCount();
			List<InquiryInfoDTO> resultPosts = inquiryService.getRequestPageInquiryList(totalCount, perPagePostCount, requsetPageNo);
		    return ResponseEntity.ok(resultPosts);
	}
	@GetMapping("/list/total-count")
	public ResponseEntity<List<Integer>> inquiryListTotalCount() {
		int perPagePostCount = 3; // 페이지 당 표시할 항목 수
		int totalCount = inquiryService.getInquiryListCount();
		
		return ResponseEntity.ok(new ArrayList<Integer>(Arrays.asList(perPagePostCount, totalCount)));
	}

	    
	@GetMapping("/search/{searchingTypeId}/{requestPageNo}")
	public ResponseEntity<List<InquiryInfoDTO>> searchInquiry(
			@PathVariable int searchingTypeId,
			@RequestParam String keyword,
			@PathVariable int requestPageNo) {
		int perPagePostCount = 3; // 페이지 당 표시할 항목 수

		if (searchingTypeId == 0) { // 전체 검색
			int totalCount = inquiryService.getSearchInquiryAllCount(keyword);
			List<InquiryInfoDTO> lists = inquiryService.searchInquiryAll(totalCount,  perPagePostCount, requestPageNo, keyword);
			return ResponseEntity.ok(lists);
		} else if (searchingTypeId == 1) { // 제목 검색
			int totalCount = inquiryService.getSearchInquiryTitleCount(keyword);
			List<InquiryInfoDTO> lists = inquiryService.searchInquiryByTitle(totalCount,  perPagePostCount, requestPageNo, keyword);
			return ResponseEntity.ok(lists);
		} else if (searchingTypeId == 2) { // 내용 검색
			int totalCount = inquiryService.getSearchInquiryContentCount(keyword);
			List<InquiryInfoDTO> lists = inquiryService.searchInquiryByContent(totalCount,  perPagePostCount, requestPageNo, keyword);
			return ResponseEntity.ok(lists);
		} else {
			// 검색 타입이 올바르지 않을 경우 처리
//			throw new IllegalArgumentException("Invalid searchingTypeId: " + searchingTypeId);
			return ResponseEntity.badRequest().build();
		}
	}
	
	@GetMapping("/search/total-count/{searchingTypeId}")
	public ResponseEntity<List<Integer>> searchInquiryTotalCount(@PathVariable int searchingTypeId, @RequestParam String keyword) {
		int perPagePostCount = 3; // 페이지 당 표시할 항목 수
		int totalCount = 0;
		
		if (searchingTypeId == 0) { // 전체 검색
			totalCount = inquiryService.getSearchInquiryAllCount(keyword);
		} else if (searchingTypeId == 1) { // 제목 검색
			totalCount = inquiryService.getSearchInquiryTitleCount(keyword);
		} else if (searchingTypeId == 2) { // 내용 검색
			totalCount = inquiryService.getSearchInquiryContentCount(keyword);
		} else {
			// 검색 타입이 올바르지 않을 경우 처리
//			throw new IllegalArgumentException("Invalid searchingTypeId: " + searchingTypeId);
			return ResponseEntity.badRequest().build();
		}
		
		return ResponseEntity.ok(new ArrayList<Integer>(Arrays.asList(perPagePostCount, totalCount)));
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
	public ResponseEntity<String> inquiryInsert(InquiryInfoDTO inquiryInfoDTO, @RequestParam int memTypeId, @RequestParam(required = false) Integer uId, @RequestParam(required = false) Integer sId) {
		int memId = 0;
		try {
			memId = getMemId(memTypeId, uId, sId);
		} catch (IllegalArgumentException e) {
			return ResponseEntity.badRequest().body("잘못된 요청");
		}
		
		inquiryInfoDTO.setMemId(memId);
		inquiryService.inquiryInsert(inquiryInfoDTO);
		return ResponseEntity.ok("등록 완료");
	}

	//내가 쓴 글 보기
	@GetMapping("/view/{requestPageNo}")
	public ResponseEntity<List<InquiryInfoDTO>> viewInquiry(@PathVariable int requestPageNo, @RequestParam int memTypeId, @RequestParam(required = false) Integer uId, @RequestParam(required = false) Integer sId) {
		int memId = 0;
		try {
			memId = getMemId(memTypeId, uId, sId);
		} catch (IllegalArgumentException e) {
			return ResponseEntity.badRequest().build();
		}

		int perPagePostCount = 3; // 페이지 당 표시할 항목 수
		int totalCount = inquiryService.getMyInquiryCount(memId);
		List<InquiryInfoDTO> inquiry = inquiryService.getMyInquiryDetail(totalCount, perPagePostCount, requestPageNo, memId);
	    return ResponseEntity.ok(inquiry);
	}

	private int getMemId(int memTypeId, Integer uId, Integer sId) throws IllegalArgumentException {
		int userId;
		if (uId == null || uId < 1) {
		    userId = sId;
		} else if (sId == null || sId < 1) {
		    userId = uId;
		} else {
		    throw new IllegalArgumentException("잘못된 인자");
		}
		
		return searchMemIdByUserIdService.searchMemIdByUserId(memTypeId, userId);
	}
}