package com.javajo.sunshineRoad.controller.admin.board;

import java.io.IOException;
import java.net.URLEncoder;
import java.util.List;
import javax.servlet.http.HttpServletResponse;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.javajo.sunshineRoad.model.dto.admin.board.AActivityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ExcelList;
import com.javajo.sunshineRoad.model.service.impl.admin.board.ExcelService;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("/admin/excel")
@RequiredArgsConstructor
public class AdminExcelController {

	private final ExcelService excelService;
	
	@GetMapping("/file")
	public ResponseEntity Files(HttpServletResponse  response, boolean excelDownload) {
		
		return ResponseEntity.ok(excelService.Files(response, excelDownload));
		
	}
	
//	@Transactional
//	@PostMapping(value = "/download" ,
//			produces = {"application/json; charset=utf-8"})
//	@ResponseBody
//	public void excelDownload(MultipartHttpServletRequest request ) throws IOException {
//	엑셀파일 업로드를 받는것	
//		

//	@Transactional
//	@PostMapping(value = "/download")
////			produces = {"application/json; charset=utf-8"})
//	public void excelDownload(HttpServletResponse response, @RequestBody List<ExcelList> input ) throws IOException {
//		
//		//리스트 받은거 확인
//		for (ExcelList inputS : input) {
//			System.out.println(inputS.getDate());
//		}
//				
//		try {
//		Workbook wb = new XSSFWorkbook();
//		Sheet sheet = wb.createSheet("첫번째 시트");
//		
////		final String fileName ="통계";
//		
//		int rowNum = 0;
//		Row row;
//		
//
//		
//		//header
//		row = sheet.createRow(rowNum++);
//		row.createCell(0).setCellValue("boardId");
//		row.createCell(1).setCellValue("status");
//		row.createCell(2).setCellValue("count");
//		row.createCell(3).setCellValue("date");
//		
//
//        
//        //body
//        for (ExcelList inputS : input) {
//        	row = sheet.createRow(rowNum++);
//        	row.createCell(0).setCellValue(inputS.getBoardId());
//        	System.out.println(inputS.getBoardId());
//        	row.createCell(1).setCellValue(inputS.getStatusId());
//        	System.out.println(inputS.getStatusId());
//        	row.createCell(2).setCellValue(inputS.getReportCnt());
//        	System.out.println(inputS.getReportCnt());
//        	row.createCell(3).setCellValue(inputS.getDate());
//        	System.out.println(inputS.getDate());
//        }
//
//        // 컨텐츠 타입과 파일명 지정
//        response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
//        response.setHeader("Content-Disposition", "attachment;filename=example.xlsx");
////        response.setHeader("Content-Disposition", "attachment;filename="+ URLEncoder.encode(fileName, "UTF-8")+".xlsx");
//
//        // Excel File Output
//        wb.write(response.getOutputStream());
//        wb.close();
//        
//		}catch(IOException e) {
//			e.printStackTrace();
//		}
//	}
//	
	
	@Transactional
	@PostMapping(value = "/download")
	public void excelDownload(HttpServletResponse response, @RequestBody List<AActivityDTO> input ) throws IOException {
		
		for (AActivityDTO inputS : input) {
			System.out.println(inputS.getAId());
		}
		try {
		Workbook wb = new XSSFWorkbook();
		Sheet sheet = wb.createSheet("Sheet1");
		
		int rowNum = 0;
		Row row;
		
		//header
		row = sheet.createRow(rowNum++);
		row.createCell(0).setCellValue("번호");
		row.createCell(1).setCellValue("제공자");
		row.createCell(2).setCellValue("지역");
		row.createCell(3).setCellValue("테마");
		row.createCell(4).setCellValue("체험시작일");		
		row.createCell(5).setCellValue("체험마감일");
		row.createCell(6).setCellValue("프로그램명");
		row.createCell(7).setCellValue("최대인원");
		row.createCell(8).setCellValue("예약금액");
		row.createCell(9).setCellValue("마감일");
        
        //body
        for (AActivityDTO inputS : input) {
        	row = sheet.createRow(rowNum++);
        	row.createCell(0).setCellValue(inputS.getAId());
        	System.out.println(inputS.getAId());
        	row.createCell(1).setCellValue(inputS.getSId());
        	System.out.println(inputS.getSId());
        	row.createCell(2).setCellValue(inputS.getSigunguId());
        	System.out.println(inputS.getSigunguId());
        	row.createCell(3).setCellValue(inputS.getAThemeId());
        	System.out.println(inputS.getAThemeId());
        	row.createCell(4).setCellValue(inputS.getAStartDate());
        	System.out.println(inputS.getAStartDate());
        	row.createCell(5).setCellValue(inputS.getAEndDate());
        	System.out.println(inputS.getAEndDate());
        	row.createCell(6).setCellValue(inputS.getAName());
        	System.out.println(inputS.getAName());
        	row.createCell(7).setCellValue(inputS.getAMaxPeople());
        	System.out.println(inputS.getAMaxPeople());       	
        	row.createCell(8).setCellValue(inputS.getACharge());
        	System.out.println(inputS.getACharge());
        	row.createCell(9).setCellValue(inputS.getAReservationDeadline());
        	System.out.println(inputS.getAReservationDeadline());  
        	}
        response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        response.setHeader("Content-Disposition", "attachment;filename=example.xlsx");

        wb.write(response.getOutputStream());
        wb.close();
		}catch(IOException e) {
			e.printStackTrace();
		}
	}
		
	
	
	
	
}
