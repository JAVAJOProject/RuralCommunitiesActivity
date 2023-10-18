package com.javajo.sunshineRoad.controller.customerCenter.faq;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.customerCenter.faq.FaqInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.customerCenter.faq.GetFaqDetailService;
import com.javajo.sunshineRoad.model.service.IService.customerCenter.faq.GetFaqListCountService;
import com.javajo.sunshineRoad.model.service.IService.customerCenter.faq.GetRequestPageFaqListService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/faq")
@RequiredArgsConstructor
public class FaqController {

	private final GetFaqListCountService getFaqListCountService; 
	private final GetRequestPageFaqListService getRequestPageFaqListService;
	private final GetFaqDetailService getFaqDetailService;

	@GetMapping("/list/{faqTypeId}/{requestPageNo}")
	public ResponseEntity<List<FaqInfoDTO>> faqList(@PathVariable int faqTypeId, @PathVariable int requestPageNo) {
		int perPagePostCount = 8;
		
		int totalCount = getFaqListCountService.getFaqListCount(faqTypeId);
		List<FaqInfoDTO> resultPosts = getRequestPageFaqListService.getRequestPageFaqList(totalCount, perPagePostCount, requestPageNo, faqTypeId);
		return ResponseEntity.ok(resultPosts);
	}
	
	@GetMapping("/detail/{faqId}")
	public FaqInfoDTO faqDetail(@PathVariable int faqId) {
		
		return getFaqDetailService.getFaqDetail(faqId);
	}
}
