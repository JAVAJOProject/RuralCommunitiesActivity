package com.javajo.sunshineRoad.controller.customerCenter.notice;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.customerCenter.notice.NoticeImgDTO;
import com.javajo.sunshineRoad.model.dto.customerCenter.notice.NoticeListInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.common.service.ImgPathToBase64Service;
import com.javajo.sunshineRoad.model.service.IService.customerCenter.notice.GetNoticeDetailService;
import com.javajo.sunshineRoad.model.service.IService.customerCenter.notice.GetNoticeImagesByImgIdService;
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
	private final GetNoticeImagesByImgIdService getNoticeImagesByImgIdService;
	private final ImgPathToBase64Service imgPathToBase64Service;
	
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
	
	@GetMapping("/total-count")
	public List<Integer> totalCount(@RequestParam int noticeTypeId) {
		int perPagePostCount = 10;
		int totalCount = getNoticeListCountService.getNoticeListCount(noticeTypeId);
		
		return new ArrayList<Integer> (Arrays.asList(perPagePostCount, totalCount));
	}
	
	@GetMapping("/detail-image/{noticeImgId}")
    public ResponseEntity<List<String>> getNoticeImage(@PathVariable int noticeImgId) {
        NoticeImgDTO noticeImg = getNoticeImagesByImgIdService.getNoticeImagesByImgId(noticeImgId);
        List<String> convertedImages = new ArrayList<String>();
        try {
            if (noticeImg.getNoticeImg1() != null) {
                convertedImages.add(imgPathToBase64Service.convertBase64(noticeImg.getNoticeImg1()));
            }
            if (noticeImg.getNoticeImg2() != null) {
                convertedImages.add(imgPathToBase64Service.convertBase64(noticeImg.getNoticeImg2()));
            }
            if (noticeImg.getNoticeImg3() != null) {
                convertedImages.add(imgPathToBase64Service.convertBase64(noticeImg.getNoticeImg3()));
            }
            if (noticeImg.getNoticeImg4() != null) {
                convertedImages.add(imgPathToBase64Service.convertBase64(noticeImg.getNoticeImg4()));
            }
            if (noticeImg.getNoticeImg5() != null) {
                convertedImages.add(imgPathToBase64Service.convertBase64(noticeImg.getNoticeImg5()));
            }
            return ResponseEntity.ok(convertedImages);
        } catch (IOException e) {
            return ResponseEntity.badRequest().build();
        }
 }
}
