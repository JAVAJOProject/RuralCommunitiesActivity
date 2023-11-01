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
import com.javajo.sunshineRoad.model.dto.admin.board.AMCommunityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.service.IService.common.service.StoreRequestImagesService;
import com.javajo.sunshineRoad.model.service.IService.common.utils.ImageInfoUploadMarker;
import com.javajo.sunshineRoad.model.service.impl.admin.board.AdminActivityCntService;
import com.javajo.sunshineRoad.model.service.impl.admin.board.AdminActivityService;
import com.javajo.sunshineRoad.model.service.impl.admin.board.AdminEventService;
import com.javajo.sunshineRoad.model.service.impl.admin.board.AdminMCommunityService;
import com.javajo.sunshineRoad.model.service.impl.admin.board.AdminRecActivityService;
import com.javajo.sunshineRoad.model.service.impl.admin.board.AdminRecTownService;
import com.javajo.sunshineRoad.model.service.impl.admin.board.AdminSCommunityService;


@RestController
@RequestMapping("/admin/board/mcommunity")
//@RequiredArgsConstructor
public class AdminMemberCommunityController {


	private final AdminMCommunityService mCommunityService;

	public AdminMemberCommunityController(AdminMCommunityService mCommunityService) {
		super();
		this.mCommunityService = mCommunityService;
	}

	// 전체게시판 조회하기
	@Transactional
	@GetMapping("/getAll/{requestPageNo}")
	public ResponseEntity<List<AMCommunityDTO>> getAllmCommunity(@PathVariable int requestPageNo) {
		System.out.println("AdminMemberCommunityController");

		List<AMCommunityDTO> result = new ArrayList<>();
		try {
			int perPagePostCount = 8;

			result.addAll(mCommunityService.getAllmCommunity(requestPageNo,perPagePostCount));
			return ResponseEntity.ok(result);
				
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();
		}
		
	}
	//상세조회
	@Transactional
	@GetMapping("detail/{uCommunityPostId}")
	public List<AMCommunityDTO> detailMCommunity (@PathVariable int uCommunityPostId){
		System.out.println("detailMCommunity");
		return mCommunityService.detailMCommunity(uCommunityPostId);
	}
	
	
	
	// 삭제하기 delete
	@DeleteMapping("/{uCommunityPostId}")
	public ResponseEntity<AdminResponseDTO> deleteMCommunityPost(@PathVariable int uCommunityPostId) {
		System.out.println("소통공간 삭제");
		try {
			mCommunityService.deleteMCommunityPost(uCommunityPostId);
			
			AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("소통공간 삭제 완료").build();
			return ResponseEntity.ok(response);
		}catch(Exception e) {
			AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("소통공간 삭제 실패").build();
			return ResponseEntity.unprocessableEntity().body(response);
		}
	}

}
