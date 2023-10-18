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
import com.javajo.sunshineRoad.model.dto.admin.board.ARecTownDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.service.IService.common.service.StoreRequestImagesService;
import com.javajo.sunshineRoad.model.service.IService.common.utils.ImageInfoUploadMarker;
import com.javajo.sunshineRoad.model.service.impl.admin.board.AdminRecTownService;


@RestController
@RequestMapping("/admin/board/recTown")
//@RequiredArgsConstructor
public class AdminRecTownController {


	private final AdminRecTownService recTownService;

	private final ImageInfoUploadMarker adminRecTownImageUploadMarker;
	private final StoreRequestImagesService storeRequestImagesService;
	


	public AdminRecTownController(AdminRecTownService recTownService,
			ImageInfoUploadMarker adminRecTownImageUploadMarker, StoreRequestImagesService storeRequestImagesService) {
		super();
		this.recTownService = recTownService;
		this.adminRecTownImageUploadMarker = adminRecTownImageUploadMarker;
		this.storeRequestImagesService = storeRequestImagesService;
	}




	// 전체게시판 조회하기
	@Transactional
	@GetMapping("/getAll/{requestPageNo}")
	public ResponseEntity<List<ARecTownDTO>> getAllActivity(@PathVariable int requestPageNo) {
		System.out.println("AdminBoardController");

		List<ARecTownDTO> result = new ArrayList<>();
		
		try {
			int perPagePostCount = 6;
			
			result.addAll(recTownService.getAllRecTown(requestPageNo,perPagePostCount));
			return ResponseEntity.ok(result);
				
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();
		}
		
	}




	//필터링 조회  키워드, 타운아이디조회
	@Transactional
	@PostMapping(value = "/select/{requestPageNo}",
            produces = {"application/json; charset=utf-8"})
	public ResponseEntity<List<ARecTownDTO>> selectActivity(@RequestBody ASearchDTO searchDTO,@PathVariable int requestPageNo){
		System.out.println("selectActivity()");

		int perPagePostCount = 6;
		
		List<ARecTownDTO> result = new ArrayList<>();
		
		try {
			
				result.addAll(recTownService.selectRecTown(searchDTO,requestPageNo,perPagePostCount));
			
			return new ResponseEntity<>(result, HttpStatus.OK);
			
		}catch(Exception e) {
			return ResponseEntity.badRequest().build();
		}
	}

	
	//상세조회
	@Transactional
	@GetMapping("detail/{recTId}")
	public List<ARecTownDTO> detailRecTown (@PathVariable int recTId){
		System.out.println("Controller detailRecTown");
		return recTownService.detailRecTown(recTId);
	}
	
	
	
	
	//등록하기
	//{"townId" : 1,"postTypeId" : 3,"recTTitle" : "또새로추가","recTContent" : "추가추가추가추가추가추가추가","recTDateCreated" : "2022-10-10","recTViewCnt" : 0,"recTFavoriteCnt" : 0,"recTSite" :null,"recTThumbnailImg" :null}
	@Transactional
    @PostMapping(value = "/registration",
            consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE},
            produces = {"application/json; charset=utf-8"})
	public ResponseEntity<AdminResponseDTO> registrationRecTown (
			@RequestPart(value = "files", required = false) List<MultipartFile> imgFiles,
            @RequestPart(value = "data") ARecTownDTO recTownDTO ){
		
		
		System.out.println("됫나");
		//이미지 5개가 넘는경우
		if(imgFiles.size() > 5) {
			AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("이미지는 5개까지 업로드 가능").build();
			return ResponseEntity.badRequest().body(response);
		}
		try {
			//파일이 없는 경우
			System.out.println("객체저장");
			recTownService.registrationRecTown(recTownDTO);
		
		if(!imgFiles.isEmpty()) {
			//파일이 있는경우
			String requestPostType = "recTown";
			System.out.println("파일저장");
			
			storeRequestImagesService.storeRequestImages(requestPostType, adminRecTownImageUploadMarker, imgFiles);
			}
		
		AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("체험서비스 등록 완료").build();
		return ResponseEntity.ok(response);
			
		}catch(IOException e) {
			AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("체험서비스 등록 실패").build();
			return ResponseEntity.unprocessableEntity().body(response);
		}
	}
	
	
//	// 수정하기 update
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
//				String requestPostType = "totalActivity";
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
	// 삭제하기 delete
	@DeleteMapping("/{recTId}")
	public ResponseEntity<AdminResponseDTO> deleteRecTownPost(@PathVariable int recTId) {
		System.out.println("서비스 삭제");
		int result = 0;
		try {
			
			recTownService.deleteRecTownPost(recTId);
			recTownService.deleteRecTownImg(recTId);
			
				AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("체험서비스 삭제 완료").build();
				return ResponseEntity.ok(response);
		}catch(Exception e) {
			AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("체험서비스 삭제 실패").build();
			return ResponseEntity.unprocessableEntity().body(response);
		}
	}
	
	//엑셀파일다운
	
}
