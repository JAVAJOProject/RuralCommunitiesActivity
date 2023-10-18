package com.javajo.sunshineRoad.model.dao.recommendation;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import
org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.RecommendationMapper;
import com.javajo.sunshineRoad.model.dto.recommendation.RecActivityInfoDTO;
import com.javajo.sunshineRoad.model.dto.recommendation.RecActivityKeywordDTO;
import com.javajo.sunshineRoad.model.dto.recommendation.RecImagesDTO;
import com.javajo.sunshineRoad.model.dto.recommendation.RecTownImagesDTO;
import com.javajo.sunshineRoad.model.dto.recommendation.RecTownInfoDTO;
import com.javajo.sunshineRoad.model.dto.recommendation.RegionSidoDTO;
import com.javajo.sunshineRoad.model.dto.recommendation.TownReportDTO;
import com.javajo.sunshineRoad.model.dto.recommendation.TownReportImagesDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class RecommendationDAO { 
	private final SqlSessionTemplate sqlSession;

	//추천 체험 전체 조회
	public int getAllRecActivityList() {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class); 
		return mapper.getAllRecActivityData(); 
	}
	
	//추천 체험 페이징처리
	public List<RecActivityInfoDTO> getRequestPageRecActivityContent(int startPostNo, int endPostNo) {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		return mapper.getTotalRecActivityCount(startPostNo, endPostNo);
	}
	
	//추천 자세히 보기
	public List<RecActivityInfoDTO> getOneRecActivityInfo(int recAPostId) {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		return mapper.getOneRecActivityData(recAPostId);
	}
	
	//마을 목록 전체 조회
	public int getAllRecTownList() {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		return mapper.getAllRecTownData();
	}
	
	//마을 페이징처리
	public List<RecTownInfoDTO> getRequestPageRecTownContent(int startPostNo, int endPostNo) {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		return mapper.getTotalRecTownCount(startPostNo, endPostNo);
	}
	
	//마을 자세히 보기
	public List<RecTownInfoDTO> getOneRecTownInfo(int recTId) {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		return mapper.getOneRecTownData(recTId);
	}
	
	//키워드 전체 조회
	public List<RecActivityKeywordDTO> getAllRecActivityKeyword() {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		return mapper.getAllKeywordData();
	}
	//시도 전체 조회
	public List<RegionSidoDTO> getRegionSidoList() {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		return mapper.getSidoData();
	}
	//키워드 필터
	public List<RecActivityInfoDTO> keywordFilterList(int recAKeywordId) {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		return mapper.keywordFilter(recAKeywordId);
	}
	//시군구 필터
	public List<RegionSidoDTO> sigunguFilter(int sidoId) {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		return mapper.sigunguFilter(sidoId);
	}
	
	//시군구별 체험보기
	public List<RecActivityInfoDTO> sigunguActivity(int sigunguId){
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		return mapper.sigunguActivity(sigunguId);
	}
	//마을 제보
	public void createTownReport(TownReportDTO town) {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		mapper.createTownReportData(town);
	}
	//이미지
	public int getTownReportPostCurrentId() {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		return mapper.getTownReportPostCurrentId();
	}
	public int getTownReportImgCurrentId() {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		return mapper.getTownReportImgCurrentId();
	}
	public void postTownReportImagesValues(TownReportImagesDTO townReportImages) {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		mapper.postTownReportImagesValues(townReportImages);
	}
	public void updateTownReportImgIdToTownReport(TownReportDTO townReport) {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		mapper.updateTownReportImgIdToTownReport(townReport);
	}
	public RecImagesDTO getRecImagesById(int recImgId) {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		return mapper.getRecImagesByImgId(recImgId);
	}
	
	public RecTownImagesDTO getRecTownImagesById(int recTownImgId) {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		return mapper.getRecTownImagesByImgId(recTownImgId);
	}
}