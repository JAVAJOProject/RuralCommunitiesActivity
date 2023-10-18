package com.javajo.sunshineRoad.model.service.impl.admin.board;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.javajo.sunshineRoad.model.dao.admin.board.ExcelDAO;
import com.javajo.sunshineRoad.model.dto.admin.board.ExcelList;
import com.javajo.sunshineRoad.model.service.IService.admin.board.IExcelService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class ExcelService implements IExcelService {

	private final ExcelDAO excelDAO;
//	private final ObjectMapper objectMapper = new ObjectMapper();
	
	@Override
	public List<Map<String, Object>> Files(HttpServletResponse response, boolean excelDownload) {

		List<ExcelList> test = excelDAO.findAll();
		
		List<Map<String, Object>> excelMap = test.stream()
				.map(testlist -> {
				Map<String, Object> map = new HashMap<>();
				map.put("date", testlist.getDate());
				map.put("cnt", testlist.getReportCnt());
				return map;
			})
				.collect(Collectors.toList());
		
		return excelMap;

	}

	
	
}
