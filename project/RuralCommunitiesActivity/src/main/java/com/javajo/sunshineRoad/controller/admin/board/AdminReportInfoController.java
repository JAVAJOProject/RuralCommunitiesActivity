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
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityDTO;
import com.javajo.sunshineRoad.model.service.impl.admin.board.AdminActivityService;
import com.javajo.sunshineRoad.model.service.impl.admin.board.AdminReportInfoService;

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
