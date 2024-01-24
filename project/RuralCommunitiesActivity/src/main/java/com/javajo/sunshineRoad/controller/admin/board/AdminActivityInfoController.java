package com.javajo.sunshineRoad.controller.admin.board;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.javajo.sunshineRoad.model.dto.admin.AdminResponseDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ANoticeImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.service.IService.common.service.StoreRequestImagesService;
import com.javajo.sunshineRoad.model.service.IService.common.utils.ImageInfoUploadMarker;
import com.javajo.sunshineRoad.model.service.impl.admin.board.AdminActivityCntService;
import com.javajo.sunshineRoad.model.service.impl.admin.board.AdminActivityService;



@RestController
@RequestMapping("/admin/board/activity")
//@RequiredArgsConstructor
public class AdminActivityInfoController {


	private final AdminActivityService activityService;
	private final AdminActivityCntService activityCntService;
	
	private final ImageInfoUploadMarker adminActivityImageUploadMarker;
	private final StoreRequestImagesService storeRequestImagesService;
	

	public AdminActivityInfoController(AdminActivityService activityService,AdminActivityCntService activityCntService,
			ImageInfoUploadMarker adminActivityImageUploadMarker, StoreRequestImagesService storeRequestImagesService) {
		super();
		this.activityService = activityService;
		this.activityCntService = activityCntService;
		this.adminActivityImageUploadMarker = adminActivityImageUploadMarker;
		this.storeRequestImagesService = storeRequestImagesService;
	}


	@Transactional
	@GetMapping("/getAll/{requestPageNo}")
	public ResponseEntity<List<AActivityDTO>> getAllActivity(@PathVariable int requestPageNo) {

		List<AActivityDTO> result = new ArrayList<>();
		try {
			int perPagePostCount = 8;

			result.addAll(activityService.getAllActivity(requestPageNo,perPagePostCount));
			return ResponseEntity.ok(result);
				
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();
		}
	}
	
	//total count
	@Transactional
	@GetMapping("/totalCount")
	public List<Integer> totalCountActivity() {
		int perPagePostCount = 8;
		int totalPostNo = 0;
		
		try {
			totalPostNo = activityCntService.getTotalCount();
			
			return new ArrayList<Integer>(Arrays.asList(perPagePostCount, totalPostNo));
		} catch (Exception e) {
			return new ArrayList<Integer>(Arrays.asList(perPagePostCount, totalPostNo));
		}
	}

	//체험서비스 필터링 조회
	@Transactional
	@PostMapping(value = "/select/{requestPageNo}",
            produces = {"application/json; charset=utf-8"})
	public ResponseEntity<List<AActivityDTO>> selectActivity(@RequestBody ASearchDTO searchDTO,@PathVariable int requestPageNo){
		
		List<AActivityDTO> result = new ArrayList<>();
		
		int perPagePostCount = 8;
		try {
			if(searchDTO.getDateType() > 0 && searchDTO.getDateType() <=3) {
				result.addAll(activityService.selectDateActivity(searchDTO,requestPageNo,perPagePostCount));
			}else {
				result.addAll(activityService.selectActivity(searchDTO,requestPageNo,perPagePostCount));
			}
			return new ResponseEntity<>(result, HttpStatus.OK);
		}catch(Exception e) {
			return ResponseEntity.badRequest().build();
		}
	}

	//체험서비스 필터링 조회 cnt
	@Transactional
	@PostMapping(value = "/selectActivityCount",
            produces = {"application/json; charset=utf-8"})
	public List<Integer>  selectActivityCount(@RequestBody ASearchDTO searchDTO){

		int perPagePostCount = 8;
		int totalPostNo = 0;
		
		try {
			if(searchDTO.getDateType() > 0 && searchDTO.getDateType() <=3) {
				totalPostNo = activityService.selectDateActivityTotalCount(searchDTO);
			}else {
				totalPostNo = activityService.selectActivityTotalCount(searchDTO);
			}
			return new ArrayList<Integer>(Arrays.asList(perPagePostCount, totalPostNo));
		}catch(Exception e) {
			e.printStackTrace();
			return new ArrayList<Integer>(Arrays.asList(perPagePostCount, totalPostNo));
		}
	}
	
	
	//상세조회
	@Transactional
	@GetMapping("detail/{aId}")
	public List<AActivityDTO> detailActivity (@PathVariable int aId){
		return activityService.detailActivity(aId);
	}
	
	//이미지 조회
	@Transactional
	@GetMapping("detailImg/{aId}")
	public ResponseEntity<List<AActivityImgDTO>> detailImgActivity (@PathVariable int aId) {
		
		List<AActivityImgDTO> result = new ArrayList<>();
		try {
		result.addAll(activityService.detailImgActivity(aId));
		return ResponseEntity.ok(result);
		}catch (Exception e) {
			return ResponseEntity.badRequest().build();//400
		}
	}
	
	
	
	//등록하기
	//{"aId": 5,"sId": 5,"sigunguId": 103,"aThemeId": 2,"aStartDate": "2023-01-01","aEndDate": "2024-12-01","aAddr": "울산광역시","aName": "두부 만들기","aOneLiner": "이번에 오신 손님들이 너무 좋아하셔서 뿌듯했습니다.","aMinPeople": 10,"aMaxPeople": 30,"aCharge": 50000,"aThumbnailImg":null,"sSite": "www.doboo.co.kr","aReservationDeadline": "2024-12-25"}
	@Transactional
    @PostMapping(value = "/registration",
            consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE},
            produces = {"application/json; charset=utf-8"})
	public ResponseEntity<AdminResponseDTO> registrationActivity (
			@RequestPart(value = "files", required = false) List<MultipartFile> imgFiles,
            @RequestPart(value = "data") AActivityDTO activityDTO ){
		
		
		//이미지 5개가 넘는경우
		if(imgFiles.size() > 5) {
			AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("이미지는 5개까지 업로드 가능").build();
			return ResponseEntity.badRequest().body(response);
		}
		try {
			//파일이 없는 경우
			activityService.registrationActivity(activityDTO);
		
		if(!imgFiles.isEmpty()) {
			//파일이 있는경우
			String requestPostType = "totalActivity";
			storeRequestImagesService.storeRequestImages(requestPostType, adminActivityImageUploadMarker, imgFiles);
			}
		AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("체험서비스 등록 완료").build();
		return ResponseEntity.ok(response);
			
		}catch(IOException e) {
			AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("체험서비스 등록 실패").build();
			return ResponseEntity.unprocessableEntity().body(response);
		}
	}
	
	
	// 수정하기 update
	@Transactional
    @PutMapping(value = "/modify",
            consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE},
            produces = {"application/json; charset=utf-8"})
	public ResponseEntity<AdminResponseDTO> modifyActivity(
			@RequestPart(value = "files", required = false) List<MultipartFile> imgFiles,
            @RequestPart(value = "data") AActivityDTO activityDTO ){
		
		try {
			activityService.modifyActivityPost(activityDTO);
			
			if(!imgFiles.isEmpty()) {
				int result = 0;
				result = activityService.deleteActivityImg(activityDTO.getAId());//아이디 가지고 imgid조회해서 해당 테이블 삭제
				
				System.out.println(result);
				String requestPostType = "totalActivity";
				storeRequestImagesService.storeRequestImages(requestPostType, adminActivityImageUploadMarker, imgFiles);
			}
			AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("체험서비스 수정 완료").build();
			return ResponseEntity.ok(response);
		}catch(IOException e) {
			AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("체험서비스 수정 실패").build();
			return ResponseEntity.unprocessableEntity().body(response);
		}
	}
	
	// 삭제하기 delete
	@DeleteMapping("/{aId}")
	public ResponseEntity<AdminResponseDTO> deleteActivityPost(@PathVariable int aId) {
		System.out.println("서비스 삭제");
		int result = 0;
		try {
			
			result = activityService.deleteActivityPost(aId);
			System.out.println(result);
			result = activityService.deleteActivityImg(aId);
			System.out.println(result);	
			
				AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("체험서비스 삭제 완료").build();
				return ResponseEntity.ok(response);
		}catch(Exception e) {
			AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("체험서비스 삭제 실패").build();
			return ResponseEntity.unprocessableEntity().body(response);
		}
	}
	
	
}
