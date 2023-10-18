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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.javajo.sunshineRoad.model.dto.admin.AdminResponseDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AEventDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.service.IService.common.service.StoreRequestImagesService;
import com.javajo.sunshineRoad.model.service.IService.common.utils.ImageInfoUploadMarker;
import com.javajo.sunshineRoad.model.service.impl.admin.board.AdminEventService;


@RestController
@RequestMapping("/admin/board/event")
public class AdminEventController {

	private final AdminEventService eventService;

	private final ImageInfoUploadMarker adminEventImageUploadMarker;
	private final StoreRequestImagesService storeRequestImagesService;



	public AdminEventController(AdminEventService eventService, ImageInfoUploadMarker adminEventImageUploadMarker,
			StoreRequestImagesService storeRequestImagesService) {
		super();
		this.eventService = eventService;
		this.adminEventImageUploadMarker = adminEventImageUploadMarker;
		this.storeRequestImagesService = storeRequestImagesService;
	}


	// 전체게시판 조회하기
	@Transactional
	@GetMapping("/getAll/{requestPageNo}")
	public ResponseEntity<List<AEventDTO>> getAllEvent(@PathVariable int requestPageNo) {
		System.out.println("AdminBoardController");

		List<AEventDTO> result = new ArrayList<>();
		try {
			int perPagePostCount = 8;
			
			result.addAll(eventService.getAllEvent(requestPageNo,perPagePostCount));
			
			return ResponseEntity.ok(result);
			
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();
		}
		
	}


	//체험서비스 필터링 조회
	@Transactional
	@PostMapping(value = "/select/{requestPageNo}",
            produces = {"application/json; charset=utf-8"})
	public ResponseEntity<List<AEventDTO>> selectEventRequest(@RequestBody ASearchDTO searchDTO,@PathVariable int requestPageNo){
		System.out.println("selectEventRequest()");

		
		int perPagePostCount = 6;
		//date
		//지역 sido sigungu ,모집방식 theme(event_recruit_type_id)
		List<AEventDTO> result = new ArrayList<>();
		try {
			
			if(searchDTO.getDateType() > 0 && searchDTO.getDateType() <= 3) {
				result.addAll(eventService.selectEventDate(searchDTO,requestPageNo,perPagePostCount));
			}else {
				result.addAll(eventService.selectEventRequest(searchDTO,requestPageNo,perPagePostCount));
			}
			
			return ResponseEntity.ok(result);
			
		}catch(Exception e) {
			return ResponseEntity.badRequest().build();
		}
	}

	
	//상세조회
	@Transactional
	@GetMapping("detail/{eventId}")
	public List<AEventDTO> detailEvent (@PathVariable int eventId){
		System.out.println("detailEvent");
		return eventService.detailEvent(eventId);
	}
	
	
	
	
	//등록하기
	// {"sId": 3,"sigunguId": 3,"eventRecruitTypeId": 1,"eventName": "이벤트 이름 테스트","eventContent": "어쩌구 저쩌구 내용","eventRecruitStartDate": "2023-10-01","eventRecruitEndDate": "2023-10-31","eventStartDate": "2023-11-01","eventEndDate": "2023-12-31","eventMaxPeople": 200,"eventAddr": "온라인"}
    @Transactional
    @PostMapping(value = "/registration",
            consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE},
            produces = {"application/json; charset=utf-8"})
	public ResponseEntity<AdminResponseDTO> registrationEvent (
			@RequestPart(value = "files", required = false) List<MultipartFile> imgFiles,
            @RequestPart(value = "data") AEventDTO eventDTO ){
		
		
		System.out.println("됫나");
		//이미지 5개가 넘는경우
		if(imgFiles.size() > 5) {
			AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("이미지는 5개까지 업로드 가능").build();
			return ResponseEntity.badRequest().body(response);
		}
		try {
			//파일이 없는 경우
			System.out.println("객체저장");
			eventService.registrationEvent(eventDTO);
		
		if(!imgFiles.isEmpty()) {
			//파일이 있는경우
			String requestPostType = "event";
			System.out.println("파일저장");
			
			storeRequestImagesService.storeRequestImages(requestPostType, adminEventImageUploadMarker, imgFiles);
			}
		
		AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("체험서비스 등록 완료").build();
		return ResponseEntity.ok(response);
			
		}catch(IOException e) {
			AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("체험서비스 등록 실패").build();
			return ResponseEntity.unprocessableEntity().body(response);
		}
	}
	
	
	// 수정하기 update
//	@Transactional
//    @PostMapping(value = "/modify",
//            consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE},
//            produces = {"application/json; charset=utf-8"})
//	public ResponseEntity<AdminResponseDTO> modifyActivity(
//			@RequestPart(value = "files", required = false) List<MultipartFile> imgFiles,
//            @RequestPart(value = "data") AActivityDTO activityDTO ){
//		
//		try {
//			
//			System.out.println("객체수정");
//			activityService.modifyActivityPost(activityDTO);
//			
//			if(!imgFiles.isEmpty()) {
//				int result = 0;
//				result = activityService.deleteActivityImg(activityDTO.getAId());//아이디 가지고 imgid조회해서 해당 테이블 삭제
//				
//				System.out.println(result);
//				String requestPostType = "event";
//				System.out.println("파일재저장");//마커 메소드에 수정할 이미지 아이디 찾기 만들어서 store서비스에서 그거 요청해서 저장하는 메서드를 만들어야 할듯 시향이에게 물어보깅
//				storeRequestImagesService.storeRequestImages(requestPostType, adminActivityImageUploadMarker, imgFiles);
//			}
//			AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("체험서비스 수정 완료").build();
//			return ResponseEntity.ok(response);
//		}catch(IOException e) {
//			AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("체험서비스 수정 실패").build();
//			return ResponseEntity.unprocessableEntity().body(response);
//		}
//	}
//	
	// 삭제하기 delete  트리거 삭제 권한이 없다는것 같음...
	@DeleteMapping("/{eventId}")
	public ResponseEntity<AdminResponseDTO> deleteEventPost(@PathVariable int eventId) {
		System.out.println("이벤트 삭제");
		try {
			
			eventService.deleteEventPost(eventId);
			eventService.deleteEventImg(eventId);
			
			AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("체험서비스 삭제 완료").build();
			return ResponseEntity.ok(response);
		}catch(Exception e) {
			AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("체험서비스 삭제 실패").build();
			return ResponseEntity.unprocessableEntity().body(response);
		}
	}

	
}
