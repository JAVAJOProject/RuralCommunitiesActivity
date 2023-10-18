package com.javajo.sunshineRoad.model.dao.totalActivity;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.TotalActivityListMapper;
import com.javajo.sunshineRoad.model.dto.totalActivity.ActSummaryListDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class TotalActivityListDAO {
	
	private final SqlSessionTemplate sqlSession;
	
	public int getTotalActivityCount() {
		TotalActivityListMapper mapper = sqlSession.getMapper(TotalActivityListMapper.class);
        return mapper.getTotalActivityCountData();
    }
	public int getTotalActivityCountByTheme(int tId) {
		TotalActivityListMapper mapper = sqlSession.getMapper(TotalActivityListMapper.class);
        return mapper.getTotalActivityCountByThemeData(tId);
    }
	public int getTotalActivityCountByRegion(int sId) {
		TotalActivityListMapper mapper = sqlSession.getMapper(TotalActivityListMapper.class);
        return mapper.getTotalActivityCountByRegionData(sId);
    }
	
	public List<ActSummaryListDTO> getTotalActivitySummaryList(int startPostNo, int endPostNo) {
		TotalActivityListMapper mapper = sqlSession.getMapper(TotalActivityListMapper.class);
		return mapper.getRequestPageTotalActivityData(startPostNo, endPostNo);
	}
	
    public List<ActSummaryListDTO> getRequestPageTotalActivityByThemeList(int tId, int startPostNo, int endPostNo) {
    	TotalActivityListMapper mapper = sqlSession.getMapper(TotalActivityListMapper.class);
    	return mapper.getRequestPageTotalActivityByThemeListData(tId, startPostNo, endPostNo);
    }
    
    public List<ActSummaryListDTO> getRequestPageTotalActivityByRegionList(int sId, int startPostNo, int endPostNo) {
    	TotalActivityListMapper mapper = sqlSession.getMapper(TotalActivityListMapper.class);
    	return mapper.getRequestPageTotalActivityByRegionListData(sId, startPostNo, endPostNo);
    }    
}
