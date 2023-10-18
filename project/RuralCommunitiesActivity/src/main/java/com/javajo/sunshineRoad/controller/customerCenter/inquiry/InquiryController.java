package com.javajo.sunshineRoad.controller.customerCenter.inquiry;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.customerCenter.inquiry.InquiryInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.customerCenter.inquiry.InquiryService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/inquiry")
@RequiredArgsConstructor
public class InquiryController {
	
	private final InquiryService inquiryService;

	@GetMapping("/list/{inquiryTypeId}/{requestPageNo}")
	public ResponseEntity<List<InquiryInfoDTO>> faqList(@PathVariable int inquiryTypeId, @PathVariable int requestPageNo) {
		int perPagePostCount = 10;
		
		int totalCount = inquiryService.getInquiryListCount(inquiryTypeId);
		List<InquiryInfoDTO> resultPosts = inquiryService.getRequestPageInquiryList(totalCount, perPagePostCount, requestPageNo, inquiryTypeId);
		return ResponseEntity.ok(resultPosts);
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
	
}
