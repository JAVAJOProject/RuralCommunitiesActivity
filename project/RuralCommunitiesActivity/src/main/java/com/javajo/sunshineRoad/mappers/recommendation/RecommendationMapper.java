package com.javajo.sunshineRoad.mappers;
 
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.recommendation.RecActivityInfoDTO;
import com.javajo.sunshineRoad.model.dto.recommendation.RecActivityKeywordDTO;
import com.javajo.sunshineRoad.model.dto.recommendation.RecImagesDTO;
import com.javajo.sunshineRoad.model.dto.recommendation.RecTownImagesDTO;
import com.javajo.sunshineRoad.model.dto.recommendation.RecTownInfoDTO;
import com.javajo.sunshineRoad.model.dto.recommendation.RegionSidoDTO;
import com.javajo.sunshineRoad.model.dto.recommendation.TownReportDTO;
import com.javajo.sunshineRoad.model.dto.recommendation.TownReportImagesDTO;
 
@Mapper 
public interface RecommendationMapper {
	public int getAllRecActivityData();
	public int getAllRecTownData();
	public int keywordData(int recAKeywordId);
	public int sigunguData(int sigunguId);
	public List<RecActivityKeywordDTO> getAllKeywordData();
	public List<RegionSidoDTO> getSidoData();
	public List<RecActivityInfoDTO> keywordFilter(@Param("recAKeywordId") int recAKeywordId, @Param("colName") String colName, @Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
	public List<RegionSidoDTO> sigunguFilter(int sidoId);
	public List<RecActivityInfoDTO> getOneRecActivityData(int recAPostId);
	public List<RecTownInfoDTO> getOneRecTownData(int recTId);
	public List<RecActivityInfoDTO> getTotalRecActivityCount(@Param("colName") String colName, @Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
	public List<RecTownInfoDTO> getTotalRecTownCount(@Param("colName") String colName, @Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
	public List<RecActivityInfoDTO> sigunguActivity(@Param("sigunguId") int sigunguId, @Param("colName") String colName, @Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
	public void createTownReportData(TownReportDTO town);
	public int getTownReportPostCurrentId();
	public int getTownReportImgCurrentId();
	public void postTownReportImagesValues(TownReportImagesDTO townReportImages);
	public void updateTownReportImgIdToTownReport(TownReportDTO townReport);
	public RecImagesDTO getRecImagesByImgId(int recImgId);
	public RecTownImagesDTO getRecTownImagesByImgId(int recTownImgId);
}