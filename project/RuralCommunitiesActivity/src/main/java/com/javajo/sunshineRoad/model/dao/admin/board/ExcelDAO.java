package com.javajo.sunshineRoad.model.dao.admin.board;

import java.util.List;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.admin.board.AdminExcelMapper;
import com.javajo.sunshineRoad.mappers.admin.board.AdminMCommunityCntMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.ExcelList;
import lombok.RequiredArgsConstructor;

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
