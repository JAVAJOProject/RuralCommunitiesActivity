package com.javajo.sunshineRoad.controller.admin.board;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.admin.AdminResponseDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AMCommunityDTO;
import com.javajo.sunshineRoad.model.service.impl.admin.board.AdminMCommunityService;


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
