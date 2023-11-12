package com.javajo.sunshineRoad.model.dao.recommendation;

import com.javajo.sunshineRoad.mappers.recommendation.RecommendationMapper;
import com.javajo.sunshineRoad.model.dto.recommendation.*;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

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
	public List<RecActivityInfoDTO> getRequestPageRecActivityContent(String colName, int startPostNo, int endPostNo) {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		return mapper.getTotalRecActivityCount(colName, startPostNo, endPostNo);
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
	public List<RecTownInfoDTO> getRequestPageRecTownContent(String colName, int startPostNo, int endPostNo) {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		return mapper.getTotalRecTownCount(colName, startPostNo, endPostNo);
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
	//키워드 필터 수
	public int getRecKeywordCnt(int recAKeywordId) {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		return mapper.keywordData(recAKeywordId);
	}
	//키워드 필터
	public List<RecActivityInfoDTO> keywordFilterList(int recAKeywordId, String colName, int startPostNo, int endPostNo) {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		return mapper.keywordFilter(recAKeywordId, colName, startPostNo, endPostNo);
	}
	//시군구 필터
	public List<RegionSidoDTO> sigunguFilter(int sidoId) {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		return mapper.sigunguFilter(sidoId);
	}
	//시군구 필터 수
	public int getRecSigunguCnt(int sigunguId) {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		return mapper.sigunguData(sigunguId);
	}
	
	//시군구별 체험보기
	public List<RecActivityInfoDTO> sigunguActivity(int sigunguId, String colName, int startPostNo, int endPostNo){
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		return mapper.sigunguActivity(sigunguId, colName, startPostNo, endPostNo);
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



	public RegionTownDTO getTownInfoBySigunguIdAndTownName(RegionTownDTO regionTown) {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		return mapper.getTownInfoBySigunguIdAndTownName(regionTown);
	}
	public void createRegionTownInfo(RegionTownDTO regionTown) {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		mapper.createRegionTownInfo(regionTown);
	}
	public RecActSellerInfoDTO getSellerInfoByRecAId(int recAId) {
		RecommendationMapper mapper = sqlSession.getMapper(RecommendationMapper.class);
		return mapper.getSellerInfoByRecAId(recAId);
	}
}