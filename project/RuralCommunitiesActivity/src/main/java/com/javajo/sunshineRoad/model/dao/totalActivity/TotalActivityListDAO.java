package com.javajo.sunshineRoad.model.dao.totalActivity;

import com.javajo.sunshineRoad.mappers.totalActivity.TotalActivityListMapper;
import com.javajo.sunshineRoad.mappers.totalActivity.TotalActivityListOfSidoMapper;
import com.javajo.sunshineRoad.model.dto.totalActivity.ActSummaryListDTO;
import com.javajo.sunshineRoad.model.dto.totalActivity.ActSummaryListOfSidoDTO;

import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

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
	public int getTotalActivityCountByRegionOfSido(int sidoId) {
		TotalActivityListOfSidoMapper mapper = sqlSession.getMapper(TotalActivityListOfSidoMapper.class);
        return mapper.getTotalActivityCountByRegionOfSidoData(sidoId);
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
    public List<ActSummaryListOfSidoDTO> getRequestPageTotalActivityByRegionOfSidoList(int sidoId, int startPostNo, int endPostNo) {
    	TotalActivityListOfSidoMapper mapper = sqlSession.getMapper(TotalActivityListOfSidoMapper.class);
    	return mapper.getRequestPageTotalActivityByRegionOfSidoListData(sidoId, startPostNo, endPostNo);
    } 
    public List<ActSummaryListDTO> getRequestPageTotalActivityByRegionList(int sId, int startPostNo, int endPostNo) {
    	TotalActivityListMapper mapper = sqlSession.getMapper(TotalActivityListMapper.class);
    	return mapper.getRequestPageTotalActivityByRegionListData(sId, startPostNo, endPostNo);
    }    
}