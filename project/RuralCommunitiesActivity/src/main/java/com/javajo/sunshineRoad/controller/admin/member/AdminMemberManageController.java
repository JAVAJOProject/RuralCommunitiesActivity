package com.javajo.sunshineRoad.controller.admin.member;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.admin.AdminResponseDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AdminDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AdminMemberDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AdminSellerDTO;
import com.javajo.sunshineRoad.model.service.impl.admin.members.AdminEmailService;
import com.javajo.sunshineRoad.model.service.impl.admin.members.AdminMemberService;
import com.javajo.sunshineRoad.model.service.impl.admin.members.AdminSellerService;
import com.javajo.sunshineRoad.model.service.impl.admin.members.AdminService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/admin/membermanage") // 회원관리 컨트롤러
@RequiredArgsConstructor
public class AdminMemberManageController {

	private final AdminMemberService memberService;
	private final AdminService adminService;
	private final AdminSellerService sellerService;
	private final AdminEmailService emailService;

	// 전체 회원조회 페이징 처리
	@GetMapping("/getAll/{id}/{requestPageNo}")
	public ResponseEntity<List<Object>> getAll(@PathVariable int id, @PathVariable int requestPageNo) {

		List<Object> list = new ArrayList<>();
		try {
			int perPagePostCount = 8;
			switch (id) {
			case 1:
				list.addAll(memberService.getAllMembers(requestPageNo, perPagePostCount));
				break;
			case 2:
				list.addAll(sellerService.getAllSeller(requestPageNo, perPagePostCount));
				break;
			case 3:
				list.addAll(adminService.getAllAdmin(requestPageNo, perPagePostCount));
				break;
			default:
				return ResponseEntity.notFound().build();
			}
			return new ResponseEntity<>(list, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.notFound().build();
		}
	}

	// 선택체험자조회
	@Transactional
	@PostMapping("/selectMember/{requestPageNo}/{id}")
	public ResponseEntity<List<AdminMemberDTO>> selectMember(@PathVariable int requestPageNo,
			@PathVariable int id,
			@RequestBody ASearchDTO searchDTO) {

		List<AdminMemberDTO> list = new ArrayList<>();
		int perPagePostCount = 8;

		try {
		if (id > 0 && searchDTO.getDateType() == 0) {
			list.addAll(memberService.selectMemberID(id));
		} else if (id <= 0 && searchDTO.getDateType() > 0 && searchDTO.getDateType() <=3) {
			list.addAll(memberService.selectMemberDATE(searchDTO, requestPageNo, perPagePostCount));
		} else {
			list.addAll(memberService.getAllMembers(requestPageNo, perPagePostCount));
		}
		
		return new ResponseEntity<>(list, HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.notFound().build();
		}
	}

	// 선택제공자조회
	@Transactional
	@PostMapping("/selectSeller/{requestPageNo}/{id}")
	public ResponseEntity<List<AdminSellerDTO>> selectSeller(@PathVariable int requestPageNo,
			@PathVariable int id,
			@RequestBody ASearchDTO searchDTO) {			
			
		List<AdminSellerDTO> list = new ArrayList<>();
		
		int perPagePostCount = 8;
		try {
		if (id > 0 && searchDTO.getDateType() == 0) {
			list.addAll(sellerService.selectSellerID(id));
		} else if (id <= 0 && searchDTO.getDateType() > 0 && searchDTO.getDateType() <=3) {
			list.addAll(sellerService.selectSellerDATE(searchDTO, requestPageNo, perPagePostCount));
		} else {
			list.addAll(sellerService.getAllSeller(requestPageNo, perPagePostCount));
		}
			return new ResponseEntity<>(list, HttpStatus.OK);
			}catch(Exception e) {
				e.printStackTrace();
				return ResponseEntity.notFound().build();
			}
		}

	

	// 선택관리자조회
	@Transactional
	@PostMapping("/selectAdmin/{requestPageNo}/{id}")
	public ResponseEntity<List<AdminDTO>> selectAdmin(@PathVariable int requestPageNo,
			@PathVariable int id,
			@RequestBody ASearchDTO searchDTO) {	
		
		List<AdminDTO> list = new ArrayList<>();		
		
		int perPagePostCount = 8;
		try {
		if (id > 0 && searchDTO.getDateType() == 0) {
			list.addAll(adminService.selectAdminID(id));
		} else if (id <= 0 && searchDTO.getDateType() > 0 && searchDTO.getDateType() <=3) {
			list.addAll(adminService.selectAdminDATE(searchDTO, requestPageNo, perPagePostCount));
		} else {
			list.addAll(adminService.getAllAdmin(requestPageNo, perPagePostCount));
		}
		return new ResponseEntity<>(list, HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.notFound().build();
		}
	}


	// 작성한글 보기
	@Transactional
	@GetMapping("/wrotePost/{requestPageNo}")
	public ResponseEntity<List<Object>> wrotePost(@PathVariable int requestPageNo, 
			@RequestParam("memType") int memType,
			@RequestParam("id") int id) {

		List<Object> postList = new ArrayList<>();
		int perPagePostCount = 8;
		try {
			switch (memType) {
			case 1:
				postList.addAll(memberService.wrotePost(id, requestPageNo, perPagePostCount));
				break;
			case 2:
				postList.addAll(sellerService.wrotePost(id, requestPageNo, perPagePostCount));
				break;
			default: return ResponseEntity.notFound().build();
			}
			return new ResponseEntity<>(postList, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.notFound().build();
		}
	}

	// 체험자 회원정보 수정
	@Transactional
	@PostMapping("/updateMember")
	public ResponseEntity<AdminResponseDTO> updateMember(@RequestBody AdminMemberDTO adminMemberDTO) {
		
		try {
			memberService.updateMember(adminMemberDTO);
			
			AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("정보수정 완료").build();
			return ResponseEntity.ok(response);
		}catch(Exception e) {
			e.printStackTrace();
			AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("예외 발생").build();
			return ResponseEntity.badRequest().body(response);
		}
	}

	// 제공자 회원정보 수정
	@Transactional
	@PostMapping("/updateSeller")
	public ResponseEntity<AdminResponseDTO> updateSeller(@RequestBody AdminSellerDTO adminSellerDTO){
		
		try {
			sellerService.updateSeller(adminSellerDTO);
			AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("정보수정 완료").build();
			return ResponseEntity.ok(response);
			}catch(Exception e) {
			e.printStackTrace();
			AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("예외 발생").build();
			return ResponseEntity.badRequest().body(response);
		}
	}

	// 관리자 회원정보 수정
	@Transactional
	@PostMapping("/updateAdmin")
	public ResponseEntity<AdminResponseDTO> updateAdmin(@RequestBody AdminDTO adminDTO)  {
		try {
			adminService.updateAdmin(adminDTO);
			AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("정보수정 완료").build();
			return ResponseEntity.ok(response);
			}catch(Exception e) {
			e.printStackTrace();
			AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("예외 발생").build();
			return ResponseEntity.badRequest().body(response);
		}
	}
	// 회원 삭제
	@Transactional
	@DeleteMapping("/delete/{id}/{memType}")
	public ResponseEntity<AdminResponseDTO> delMember(@PathVariable int id, @PathVariable int memType) {

		try {
		switch (memType) {
		case 1:
			memberService.delMember(id);
			break;
		case 2:
			sellerService.delSeller(id);
			break;
		case 3:
			adminService.delAdmin(id);
			break;
		default: return ResponseEntity.notFound().build();
		}
		AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("삭제 완료").build();
		return ResponseEntity.ok(response);
		}catch(Exception e) {
			e.printStackTrace();
			AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("예외 발생").build();
			return ResponseEntity.badRequest().body(response);
		}
	}

}