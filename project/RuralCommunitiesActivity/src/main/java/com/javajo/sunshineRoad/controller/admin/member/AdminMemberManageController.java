package com.javajo.sunshineRoad.controller.admin.member;

import com.javajo.sunshineRoad.model.dto.admin.AdminResponseDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AEmailDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AdminDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AdminMemberDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AdminSellerDTO;
import com.javajo.sunshineRoad.model.service.impl.admin.members.AdminEmailService;
import com.javajo.sunshineRoad.model.service.impl.admin.members.AdminMemberService;
import com.javajo.sunshineRoad.model.service.impl.admin.members.AdminSellerService;
import com.javajo.sunshineRoad.model.service.impl.admin.members.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpSession;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin/membermanage") // 회원관리 컨트롤러
@RequiredArgsConstructor
public class AdminMemberManageController {

	private final AdminMemberService memberService;
	private final AdminService adminService;
	private final AdminSellerService sellerService;

	// 전체 회원조회
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
	
	//전체조회 클라이언트 페이징
	@GetMapping("/totalCount/{id}")
	public List<Integer> totalCount(@PathVariable int id) {
		int perPagePostCount = 8;
		int totalPostNo = 0;
		
		try {
			switch(id) {
			case 1: totalPostNo = memberService.totalCountMembers(); break;
			case 2: totalPostNo = sellerService.totalCountSeller(); break;
			case 3: totalPostNo = adminService.totalCountAdmin(); break;
			default: totalPostNo = 1;
			}
			return new ArrayList<Integer>(Arrays.asList(perPagePostCount, totalPostNo));
		}catch(Exception e) {
			e.printStackTrace();
			return new ArrayList<Integer>(Arrays.asList(perPagePostCount, totalPostNo));
		}
	}
	
	
	
	

	// 선택체험자조회
	@Transactional
	@RequestMapping(value= "/selectMember/{requestPageNo}", method = RequestMethod.POST,
			produces = "application/json; charset=utf8")
	public ResponseEntity<List<AdminMemberDTO>> selectMember(@PathVariable int requestPageNo,
														@RequestBody ASearchDTO searchDTO) {

		List<AdminMemberDTO> list = new ArrayList<>();
		
		int perPagePostCount = 8;
		try {
			if (searchDTO.getDateType() > 0 && searchDTO.getId() == 0 ) {//가입일 조회인경우 키워드 빈값
				searchDTO.setKeyword("");
			}
				
//			} else if(searchDTO.getId() > 0 && searchDTO.getDateType() == 0 ){//아이디 조회인경우 키워드 기본값
//				list.addAll(memberService.selectMember(searchDTO, requestPageNo, perPagePostCount));
//			}else if(searchDTO.getDateType() > 0 && searchDTO.getId() > 0) {//둘다 조회하는경우 기본값
//				list.addAll(memberService.selectMember(searchDTO, requestPageNo, perPagePostCount));
//			} else{
//				list.addAll(memberService.getAllMembers(requestPageNo, perPagePostCount));
//			}
				
			list.addAll(memberService.selectMember(searchDTO, requestPageNo, perPagePostCount));	
			
			return new ResponseEntity<>(list, HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.notFound().build();
		}
	}
	
	// 선택체험자조회 클라이언트 페이징
	@Transactional
	@RequestMapping(value= "/selectMemberCount", method = RequestMethod.POST,
	produces = "application/json; charset=utf8")
	public List<Integer> selectMemberTotalCount(@RequestBody ASearchDTO searchDTO) {
		
		int perPagePostCount = 8;
		int totalPostNo = 0;
		
		try {
		if (searchDTO.getDateType() >= 0 && searchDTO.getDateType() <=3) {//3 가입일
			totalPostNo = memberService.selectMemberTotalCount(searchDTO);
		} else {
			totalPostNo = memberService.totalCountMembers();
		}
		return new ArrayList<Integer>(Arrays.asList(perPagePostCount, totalPostNo));
		}catch(Exception e) {
			e.printStackTrace();
			return new ArrayList<Integer>(Arrays.asList(perPagePostCount, totalPostNo));
		}
	}
	
	
	
	
	

	// 선택제공자조회
	@Transactional
	@PostMapping("/selectSeller/{requestPageNo}/{id}")
	public ResponseEntity<List<AdminSellerDTO>> selectSeller(@PathVariable int requestPageNo,
														@RequestBody ASearchDTO searchDTO) {			
			
		List<AdminSellerDTO> list = new ArrayList<>();
		
		int perPagePostCount = 8;
		try {
		if (searchDTO.getId() > 0 && searchDTO.getDateType() == 0) {
			list.addAll(sellerService.selectSellerID(searchDTO.getId()));
		} else if (searchDTO.getId() <= 0 && searchDTO.getDateType() > 0 && searchDTO.getDateType() <=3) {
			list.addAll(sellerService.selectSellerDate(searchDTO, requestPageNo, perPagePostCount));
		} else {
			list.addAll(sellerService.getAllSeller(requestPageNo, perPagePostCount));
		}
			return new ResponseEntity<>(list, HttpStatus.OK);
			}catch(Exception e) {
				e.printStackTrace();
				return ResponseEntity.notFound().build();
			}
		}

	// 선택제공자조회 클라이언트 페이징
	@Transactional
	@RequestMapping(value= "/selectSellerCount", method = RequestMethod.POST,
	produces = "application/json; charset=utf8")
	public List<Integer> selectSellerCount(@RequestBody ASearchDTO searchDTO) {
		
		int perPagePostCount = 8;
		int totalPostNo = 0;
		
		try {
		if (searchDTO.getId() > 0 && searchDTO.getDateType() == 0) {//아이디조회 필터링 x
			totalPostNo = 1;
		} else if (searchDTO.getId() <= 0 && searchDTO.getDateType() > 0 && searchDTO.getDateType() <=3) {//3 가입일 필터링 필요
			totalPostNo = sellerService.selectSellerDateTotalCount(searchDTO);
		} else {
			totalPostNo = sellerService.totalCountSeller();//필터링 필요
		}
		return new ArrayList<Integer>(Arrays.asList(perPagePostCount, totalPostNo));
		}catch(Exception e) {
			e.printStackTrace();
			return new ArrayList<Integer>(Arrays.asList(perPagePostCount, totalPostNo));
		}
	}
		

	// 선택관리자조회
//	@Transactional
	@RequestMapping(value= "/selectAdmin/{requestPageNo}", method = RequestMethod.POST,
	produces = "application/json; charset=utf8")
	public ResponseEntity<List<AdminDTO>> selectAdmin(@PathVariable int requestPageNo,
														@RequestBody ASearchDTO searchDTO) {	
		
		List<AdminDTO> list = new ArrayList<>();		
		
		int perPagePostCount = 8;
		try {
		if (searchDTO.getId() > 0 && searchDTO.getDateType() == 0) {
			list.addAll(adminService.selectAdminID(searchDTO.getId()));
		} else if (searchDTO.getId() <= 0 && searchDTO.getDateType() > 0 && searchDTO.getDateType() <=3) {
			list.addAll(adminService.selectAdminDate(searchDTO, requestPageNo, perPagePostCount));
		} else {
			list.addAll(adminService.getAllAdmin(requestPageNo, perPagePostCount));
		}
		return new ResponseEntity<>(list, HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.notFound().build();
		}
	}
	// 선택관리자조회 클라이언트 페이징
	@Transactional
	@RequestMapping(value= "/selectAdminCount", method = RequestMethod.POST,
	produces = "application/json; charset=utf8")
	public List<Integer> selectAdminCount(@RequestBody ASearchDTO searchDTO) {
		
		int perPagePostCount = 8;
		int totalPostNo = 0;
		
		try {
		if (searchDTO.getId() > 0 && searchDTO.getDateType() == 0) {//아이디조회 필터링 x
			totalPostNo = 1;
		} else if (searchDTO.getId() <= 0 && searchDTO.getDateType() > 0 && searchDTO.getDateType() <=3) {//3 가입일 필터링 필요
			totalPostNo = adminService.selectAdminDateCount(searchDTO);
		} else {
			totalPostNo = adminService.totalCountAdmin();//필터링 필요
		}
		return new ArrayList<Integer>(Arrays.asList(perPagePostCount, totalPostNo));
		}catch(Exception e) {
			e.printStackTrace();
			return new ArrayList<Integer>(Arrays.asList(perPagePostCount, totalPostNo));
		}
	}

	// 작성한글 보기
	@Transactional
	@RequestMapping(value= "/wrotePost/{requestPageNo}", method = RequestMethod.POST,
					produces = "application/json; charset=utf8")
	public ResponseEntity<List<Object>> wrotePost(@PathVariable int requestPageNo, 
												@RequestBody ASearchDTO searchDTO) {

		List<Object> postList = new ArrayList<>();
		int perPagePostCount = 8;
		try {
			switch (searchDTO.getMemTypeId()) {
			case 1:
				postList.addAll(memberService.wrotePost(searchDTO.getId(), requestPageNo, perPagePostCount));
				break;
			case 2:
				postList.addAll(sellerService.wrotePost(searchDTO.getId(), requestPageNo, perPagePostCount));
				break;
			default: return ResponseEntity.notFound().build();
			}
			return new ResponseEntity<>(postList, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.notFound().build();
		}
	}
	
	// 작성한글보기 클라이언트 페이징
	@Transactional
	@RequestMapping(value= "/wrotePostCount", method = RequestMethod.POST,
					produces = "application/json; charset=utf8")
	public List<Integer> wrotePostCount(@RequestBody ASearchDTO searchDTO) {

		int perPagePostCount = 8;
		int totalPostNo = 0;
		
		try {
			switch (searchDTO.getMemTypeId()) {
			case 1:
				totalPostNo = memberService.wrotePostTotalCount(searchDTO.getId());
				break;
			case 2:
				totalPostNo = sellerService.wrotePostTotalCount(searchDTO.getId());
				break;
			default: totalPostNo = 1;
			}
			return new ArrayList<Integer>(Arrays.asList(perPagePostCount, totalPostNo));
			} catch (Exception e) {
			e.printStackTrace();
			return new ArrayList<Integer>(Arrays.asList(perPagePostCount, totalPostNo));
		}
	}	
	
	
	

	// 체험자 회원정보 수정
	@Transactional
	@RequestMapping(value= "/updateMember", method = RequestMethod.POST,
	produces = "application/json; charset=utf8")
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
	@PutMapping("/updateSeller")
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
	@PutMapping("/updateAdmin")
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
	@GetMapping("/delete/{id}/{memType}")
	public ResponseEntity<AdminResponseDTO> delMember(@PathVariable int id, @PathVariable int memType) {
		try {
		switch (memType) {
		case 1:memberService.delMember(id);break;
		case 2:sellerService.delSeller(id);break;
		case 3:adminService.delAdmin(id);break;
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