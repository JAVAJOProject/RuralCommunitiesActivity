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
import com.javajo.sunshineRoad.model.dto.admin.board.ASCommunityDTO;
import com.javajo.sunshineRoad.model.service.impl.admin.board.AdminSCommunityService;


@RestController
@RequestMapping("/admin/board/scommunity")
//@RequiredArgsConstructor
public class AdminSellerCommunityController {

	private final AdminSCommunityService sCommunityService;

	public AdminSellerCommunityController(AdminSCommunityService sCommunityService) {
		super();
		this.sCommunityService = sCommunityService;
	}
	
	
	
	// 전체게시판 조회하기
	@Transactional
	@GetMapping("/getAll/{requestPageNo}")
	public ResponseEntity<List<ASCommunityDTO>> getAllsCommunity(@PathVariable int requestPageNo) {
		System.out.println("AdminMemberCommunityController");

		List<ASCommunityDTO> result = new ArrayList<>();
		try {
			int perPagePostCount = 8;

			result.addAll(sCommunityService.getAllsCommunity(requestPageNo,perPagePostCount));
			return ResponseEntity.ok(result);
				
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();
		}
		
	}
	//상세조회
	@Transactional
	@GetMapping("detail/{sellerCommunityPostId}")
	public List<ASCommunityDTO> detailSCommunity (@PathVariable int sellerCommunityPostId){
		System.out.println("detailMCommunity");
		return sCommunityService.detailSCommunity(sellerCommunityPostId);
	}
	
	
	
	// 삭제하기 delete
	@DeleteMapping("/{sellerCommunityPostId}")
	public ResponseEntity<AdminResponseDTO> deleteSCommunityPost(@PathVariable int sellerCommunityPostId) {
		System.out.println("소통공간 삭제");
		try {
			sCommunityService.deleteSCommunityPost(sellerCommunityPostId);
			
			AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("마을소식 삭제 완료").build();
			return ResponseEntity.ok(response);
		}catch(Exception e) {
			AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("마을소식 삭제 실패").build();
			return ResponseEntity.unprocessableEntity().body(response);
		}
	}
}
