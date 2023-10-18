package com.javajo.sunshineRoad.controller.customerCenter.notice;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.javajo.sunshineRoad.model.dto.customerCenter.notice.NoticeListInfoDTO;

import com.javajo.sunshineRoad.model.service.IService.customerCenter.notice.GetNoticeDetailService;
import com.javajo.sunshineRoad.model.service.IService.customerCenter.notice.GetNoticeListCountService;

import com.javajo.sunshineRoad.model.service.IService.customerCenter.notice.GetRequestPageNoticeListService;


import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/notice")
@RequiredArgsConstructor
public class NoticeController {
	
	private final GetNoticeListCountService getNoticeListCountService;
	private final GetRequestPageNoticeListService getRequestPageNoticeListService;
	private final GetNoticeDetailService getNoticeDetailService;
	
	@GetMapping("/list/{noticeTypeId}/{requestPageNo}") //나중에 ModelAttribute 공부
	public ResponseEntity<List<NoticeListInfoDTO>> noticeList(@PathVariable int noticeTypeId, @PathVariable int requestPageNo) {
		System.out.println("controller"+noticeTypeId+","+requestPageNo);
		int perPagePostCount = 10;
		
		//전체 개수는 정적으로 딱 몇개 정하는게아니라 동적으로 정해줘야한다.		
		int totalCount = getNoticeListCountService.getNoticeListCount(noticeTypeId);
		
		List<NoticeListInfoDTO> resultPosts = getRequestPageNoticeListService.getRequestPageNoticeList(totalCount, perPagePostCount, requestPageNo, noticeTypeId);
		
		return ResponseEntity.ok(resultPosts);
	    
		}
	
	@GetMapping("/detail/{noticeId}")
	public NoticeListInfoDTO noticeDetail(@PathVariable int noticeId) {
	    
		return getNoticeDetailService.getNoticeDetail(noticeId);
		}
	
	//이미지 삽입도 해주기.
}
