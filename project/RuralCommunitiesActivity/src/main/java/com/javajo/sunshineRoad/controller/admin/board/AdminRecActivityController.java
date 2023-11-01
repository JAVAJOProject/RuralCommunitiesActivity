package com.javajo.sunshineRoad.controller.admin.board;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
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
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ARecActivityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.service.IService.common.service.StoreRequestImagesService;
import com.javajo.sunshineRoad.model.service.IService.common.utils.ImageInfoUploadMarker;
import com.javajo.sunshineRoad.model.service.impl.admin.board.AdminRecActivityService;

@RestController
@RequestMapping("/admin/board/recActivity")
public class AdminRecActivityController {

	private final AdminRecActivityService recActivityService;

	private final ImageInfoUploadMarker adminRecActivityImageUploadMarker;
	private final StoreRequestImagesService storeRequestImagesService;

	
	public AdminRecActivityController(AdminRecActivityService recActivityService,
			ImageInfoUploadMarker adminRecActivityImageUploadMarker,
			StoreRequestImagesService storeRequestImagesService) {
		super();
		this.recActivityService = recActivityService;
		this.adminRecActivityImageUploadMarker = adminRecActivityImageUploadMarker;
		this.storeRequestImagesService = storeRequestImagesService;
	}

	//전체조회
	@Transactional
	@GetMapping("/getAll/{requestPageNo}")
	public ResponseEntity<List<ARecActivityDTO>> getAllRecActivity(@PathVariable int requestPageNo) {
		System.out.println("AdminRecActivityController");

		List<ARecActivityDTO> result = new ArrayList<>();
		try {
			
			int perPagePostCount = 8;

			result.addAll(recActivityService.getAllRecActivity(requestPageNo, perPagePostCount));
			
			return ResponseEntity.ok(result);
			
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.badRequest().build();//400
			//return new ResponseEntity<>(result, HttpStatus.NOT_FOUND); 404
		}
	}
	
	
	//필터링조회  작성일,키워드
	@Transactional
	@PostMapping(value = "/select/{requestPageNo}",
            produces = {"application/json; charset=utf-8"})
	public ResponseEntity<List<ARecActivityDTO>> selectRecActivity(@RequestBody ASearchDTO searchDTO,@PathVariable int requestPageNo){
		System.out.println("selectRecActivity()");

		int perPagePostCount = 6;
		
		List<ARecActivityDTO> result = new ArrayList<>();
		
		try {
			System.out.println(searchDTO.getDateType());
			
			if(searchDTO.getDateType() > 0 && searchDTO.getDateType() <= 3) {
				result.addAll(recActivityService.selectDateRecActivity(searchDTO,requestPageNo,perPagePostCount));
			}else {
				result.addAll(recActivityService.selectRecActivity(searchDTO,requestPageNo,perPagePostCount));
			}
			return ResponseEntity.ok(result);
			
		}catch(Exception e) {
			return ResponseEntity.badRequest().build();
		}
	}
	
	

	//상세조회
	@Transactional
	@GetMapping("detail/{recAPostId}")
	public List<ARecActivityDTO> detailRecActivity (@PathVariable int recAPostId){
		System.out.println("detailRecActivity");
		return recActivityService.detailRecActivity(recAPostId);
	}
	
	
	//등록하기
//	{"recAPostId" : 1,"sigunguId" : 105,"recAId" :null,"postTypeId" : 2,"recAKeywordId" : 6,"recATitle" : "새로등록","recAContent" : "새로내용","recADateCreated" :"2023-10-10","recAViewCount" : 0,"recAFavoriteCnt" : 0,"recAThumbnailImg" :null}  
//{"recAPostId" : 1,"sigunguId" : 105,"recAId" :null,"postTypeId" : 2,"recAKeywordId" : 6,"recATitle" : "재등록","recAContent" : "재내용","recADateCreated" :"2023-10-10","recAViewCount" : 0,"recAFavoriteCnt" : 0,"recAThumbnailImg" :null}
	@Transactional
    @PostMapping(value = "/registration",
            consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE},
            produces = {"application/json; charset=utf-8"})
	public ResponseEntity<AdminResponseDTO> registrationRecActivity (
			@RequestPart(value = "files", required = false) List<MultipartFile> imgFiles,
            @RequestPart(value = "data") ARecActivityDTO aRecActivityDTO ){
		
		
		System.out.println("됫나");
		//이미지 5개가 넘는경우
		if(imgFiles.size() > 5) {
			AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("이미지는 5개까지 업로드 가능").build();
			return ResponseEntity.badRequest().body(response);
		}
		try {
			//파일이 없는 경우
			System.out.println("객체저장");
			recActivityService.registrationRecActivity(aRecActivityDTO);
		
		if(!imgFiles.isEmpty()) {
			//파일이 있는경우
			String requestPostType = "recActivity";
			System.out.println("파일저장");
			
			storeRequestImagesService.storeRequestImages(requestPostType, adminRecActivityImageUploadMarker, imgFiles);
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
	public ResponseEntity<AdminResponseDTO> modifyRecActivity(
			@RequestPart(value = "files", required = false) List<MultipartFile> imgFiles,
            @RequestPart(value = "data") ARecActivityDTO aRecActivityDTO ){
		
		try {
			
			System.out.println("객체수정");
			recActivityService.modifyRecActivityPost(aRecActivityDTO);
			
			if(!imgFiles.isEmpty()) {
				int result = 0;
				result = recActivityService.deleteRecActivityImg(aRecActivityDTO.getRecAPostId());//아이디 가지고 imgid조회해서 해당 테이블 삭제
				
				System.out.println(result);
				String requestPostType = "recActivity";
				System.out.println("파일재저장");//마커 메소드에 수정할 이미지 아이디 찾기 만들어서 store서비스에서 그거 요청해서 저장하는 메서드를 만들어야 할듯 시향이에게 물어보깅
				storeRequestImagesService.storeRequestImages(requestPostType, adminRecActivityImageUploadMarker, imgFiles);
			}
			AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("추천체험 수정 완료").build();
			return ResponseEntity.ok(response);
		}catch(IOException e) {
			AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("추천체험 수정 실패").build();
			return ResponseEntity.unprocessableEntity().body(response);
		}
	}
	
	
	//삭제하기
	@DeleteMapping("/{recAPostId}")
	public ResponseEntity<AdminResponseDTO> deleteRecActivityPost(@PathVariable int recAPostId) {
		System.out.println("추천 삭제");
		try {
			
			recActivityService.deleteRecActivityPost(recAPostId);
			recActivityService.deleteRecActivityImg(recAPostId);
			
				AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("추천체험 삭제 완료").build();
				return ResponseEntity.ok(response);
		}catch(Exception e) {
			AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("추천체험 삭제 실패").build();
			return ResponseEntity.unprocessableEntity().body(response);
		}
	}
	
	
}
