package com.javajo.sunshineRoad.controller.admin.board;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

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

	@Transactional
	@PostMapping(value = "/download")
//			produces = {"application/json; charset=utf-8"})
	public void excelDownload(HttpServletResponse response, @RequestBody List<ExcelList> input ) throws IOException {
		
		//리스트 받은거 확인
		for (ExcelList inputS : input) {
			System.out.println(inputS.getDate());
		}
				
		try {
		Workbook wb = new XSSFWorkbook();
		Sheet sheet = wb.createSheet("첫번째 시트");
		
//		final String fileName ="통계";
		
		int rowNum = 0;
		Row row;
		

		
		//header
		row = sheet.createRow(rowNum++);
		row.createCell(0).setCellValue("boardId");
		row.createCell(1).setCellValue("status");
		row.createCell(2).setCellValue("count");
		row.createCell(3).setCellValue("date");
		

        
        //body
        for (ExcelList inputS : input) {
        	row = sheet.createRow(rowNum++);
        	row.createCell(0).setCellValue(inputS.getBoardId());
        	System.out.println(inputS.getBoardId());
        	row.createCell(1).setCellValue(inputS.getStatusId());
        	System.out.println(inputS.getStatusId());
        	row.createCell(2).setCellValue(inputS.getReportCnt());
        	System.out.println(inputS.getReportCnt());
        	row.createCell(3).setCellValue(inputS.getDate());
        	System.out.println(inputS.getDate());
        }

        // 컨텐츠 타입과 파일명 지정
        response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        response.setHeader("Content-Disposition", "attachment;filename=example.xlsx");
//        response.setHeader("Content-Disposition", "attachment;filename="+ URLEncoder.encode(fileName, "UTF-8")+".xlsx");

        // Excel File Output
        wb.write(response.getOutputStream());
        wb.close();
        
		}catch(IOException e) {
			e.printStackTrace();
		}
	}
	
	
}
