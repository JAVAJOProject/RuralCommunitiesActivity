package com.javajo.sunshineRoad.controller.admin.board;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.javajo.sunshineRoad.model.dto.admin.AdminResponseDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ANoticeDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ANoticeImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ARecActivityDTO;
import com.javajo.sunshineRoad.model.service.IService.common.service.StoreRequestImagesService;
import com.javajo.sunshineRoad.model.service.IService.common.utils.ImageInfoUploadMarker;
import com.javajo.sunshineRoad.model.service.impl.admin.board.AdminNoticeService;

@RestController
@RequestMapping("/admin/board/notice")
public class AdminNoticeController {

	private final AdminNoticeService noticeService;
	
	private final ImageInfoUploadMarker adminNoticeImageUploadMarker;
	private final StoreRequestImagesService storeRequestImagesService;
	

	public AdminNoticeController(AdminNoticeService noticeService, ImageInfoUploadMarker adminNoticeImageUploadMarker,
			StoreRequestImagesService storeRequestImagesService) {
		super();
		this.noticeService = noticeService;
		this.adminNoticeImageUploadMarker = adminNoticeImageUploadMarker;
		this.storeRequestImagesService = storeRequestImagesService;
	}
	
	
	//조회
	@GetMapping("/getAll/{requestPageNo}")
	public ResponseEntity<List<ANoticeDTO>> getAllNotice(@PathVariable int requestPageNo) {
		System.out.println("AdminNoticeController");

		List<ANoticeDTO> result = new ArrayList<>();
		try {
			int perPagePostCount = 6;

			result.addAll(noticeService.getAllNotice(requestPageNo,perPagePostCount));
			return ResponseEntity.ok(result);
				
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();//400
		}
		
	}
	//상세조회
	@Transactional
	@GetMapping("detail/{noticeId}")
	public ResponseEntity<List<ANoticeDTO>> detailNotice (@PathVariable int noticeId){
		System.out.println("detailNotice");
		List<ANoticeDTO> result = new ArrayList<>();
		try {
		result.addAll(noticeService.detailNotice(noticeId));
		
		return ResponseEntity.ok(result);
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();//400
		}
	}
	//이미지 조회
	@Transactional
	@GetMapping("detailImg/{noticeId}")
	public ResponseEntity<List<ANoticeImgDTO>> detailNoticeImg (@PathVariable int noticeId){
		System.out.println("detailNoticeImg");
		List<ANoticeImgDTO> result = new ArrayList<>();
		try {
		result.addAll(noticeService.detailNoticeImg(noticeId));
		
		return ResponseEntity.ok(result);
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();//400
		}
	}	
	
	
	//등록하기
	//{"noticeImgId" : 0,"noticeTypeId" : 3,"noticeTitle" : "새로바꿔","noticeContent" : "새로내용"}
		@Transactional
	    @PostMapping(value = "/registration",
	            consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE},
	            produces = {"application/json; charset=utf-8"})
		public ResponseEntity<AdminResponseDTO> registrationNotice (
				@RequestPart(value = "files", required = false) List<MultipartFile> imgFiles,
	            @RequestPart(value = "data") ANoticeDTO noticeDTO ){
			
			
			System.out.println("됫나");
			//이미지 5개가 넘는경우
			if(imgFiles.size() > 5) {
				AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("이미지는 5개까지 업로드 가능").build();
				return ResponseEntity.badRequest().body(response);
			}
			try {
				//파일이 없는 경우
				System.out.println("객체저장");
				noticeService.registrationNotice(noticeDTO);
			
			if(!imgFiles.isEmpty()) {
				//파일이 있는경우
				String requestPostType = "notice";
				System.out.println("파일저장");
				
				storeRequestImagesService.storeRequestImages(requestPostType, adminNoticeImageUploadMarker, imgFiles);
				}
			
			AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("추천체험 등록 완료").build();
			return ResponseEntity.ok(response);
				
			}catch(IOException e) {
				AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("추천체험 등록 실패").build();
				return ResponseEntity.unprocessableEntity().body(response);
			}
		}
		//수정하기
		@Transactional
	    @PostMapping(value = "/modify",
	            consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE},
	            produces = {"application/json; charset=utf-8"})
		public ResponseEntity<AdminResponseDTO> modifyNotice(
				@RequestPart(value = "files", required = false) List<MultipartFile> imgFiles,
	            @RequestPart(value = "data") ANoticeDTO noticeDTO ){
			
			try {
				
				System.out.println("객체수정");
				noticeService.modifyNoticePost(noticeDTO);
				
				if(!imgFiles.isEmpty()) {
					int result = 0;
					result = noticeService.deleteNoticeImg(noticeDTO.getNoticeId());//아이디 가지고 imgid조회해서 해당 테이블 삭제
					
					System.out.println(result);
					String requestPostType = "notice";
					System.out.println("파일재저장");//마커 메소드에 수정할 이미지 아이디 찾기 만들어서 store서비스에서 그거 요청해서 저장하는 메서드를 만들어야 할듯 시향이에게 물어보깅
					storeRequestImagesService.storeRequestImages(requestPostType, adminNoticeImageUploadMarker, imgFiles);
				}
				AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("추천체험 수정 완료").build();
				return ResponseEntity.ok(response);
			}catch(IOException e) {
				AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("추천체험 수정 실패").build();
				return ResponseEntity.unprocessableEntity().body(response);
			}
		}
		
		
		//삭제하기
		@DeleteMapping("/{noticeId}")
		public ResponseEntity<AdminResponseDTO> deleteNoticePost(@PathVariable int noticeId) {
			System.out.println("추천 삭제");
			try {
				
				noticeService.deleteNoticePost(noticeId);
				noticeService.deleteNoticeImg(noticeId);
				
					AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("추천체험 삭제 완료").build();
					return ResponseEntity.ok(response);
			}catch(Exception e) {
				AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("추천체험 삭제 실패").build();
				return ResponseEntity.unprocessableEntity().body(response);
			}
		}
		

}
