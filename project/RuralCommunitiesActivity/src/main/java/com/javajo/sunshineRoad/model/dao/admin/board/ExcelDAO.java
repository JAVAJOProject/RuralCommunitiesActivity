package com.javajo.sunshineRoad.model.dao.admin.board;

import com.javajo.sunshineRoad.mappers.admin.AdminExcelMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.ExcelList;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ExcelDAO {

	private final SqlSessionTemplate sqlSession;
	
	public List<ExcelList> findAll(){
		System.out.println("ExcelDAO");
		AdminExcelMapper excelMapper = sqlSession.getMapper(AdminExcelMapper.class);
		return excelMapper.findAll();
	}
}