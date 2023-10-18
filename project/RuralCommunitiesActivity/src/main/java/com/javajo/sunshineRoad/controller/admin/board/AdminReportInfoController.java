package com.javajo.sunshineRoad.controller.admin.board;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin/board/reportInfo")
public class AdminReportInfoController {

//	private final AdminReportInfoService reportInfoService;
	
	
	
//	public AdminReportInfoController(AdminReportInfoService reportInfoService) {
//		super();
//		this.reportInfoService = reportInfoService;
//	}
////
//
//	//신고조회
//	@Transactional
//	@GetMapping("/getAll/{requestPageNo}")
//	public ResponseEntity<List<AActivityDTO>> getAllReportInfo(@PathVariable int requestPageNo) {
//		System.out.println("AdminReportInfoService");
//
//		List<AActivityDTO> result = new ArrayList<>();
//		try {
//			int perPagePostCount = 8;
//
//			result.addAll(reportInfoService.getAllReportInfo(requestPageNo,perPagePostCount));
//			return ResponseEntity.ok(result);
//				
//		} catch (Exception e) {
//			return ResponseEntity.badRequest().build();//400
//		}
//		
//	}
//
//
//	// 삭제하기 delete
//	@DeleteMapping("/{aId}")
//	public ResponseEntity<AdminResponseDTO> deleteReportInfoPost(@PathVariable int aId) {
//		System.out.println("서비스 삭제");
//		try {
//			
//			reportInfoService.deleteReportInfoPost(aId);
//			
//				AdminResponseDTO response = AdminResponseDTO.builder().resultMsg("체험서비스 삭제 완료").build();
//				return ResponseEntity.ok(response);
//		}catch(Exception e) {
//			AdminResponseDTO response = AdminResponseDTO.builder().errorMsg("체험서비스 삭제 실패").build();
//			return ResponseEntity.unprocessableEntity().body(response);
//		}
//	}
//	

}
