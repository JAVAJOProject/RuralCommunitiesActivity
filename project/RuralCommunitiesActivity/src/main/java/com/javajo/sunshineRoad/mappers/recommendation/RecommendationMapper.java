package com.javajo.sunshineRoad.mappers.recommendation;

import com.javajo.sunshineRoad.model.dto.recommendation.*;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper 
public interface RecommendationMapper {
	public int getAllRecActivityData();
	public int getAllRecTownData();
	public int sidoTownData(int sidoId);
	public int sigunguTownData(int sigunguId);
	public int keywordData(int recAKeywordId);
	public int sidoData(int sidoId);
	public int sigunguData(int sigunguId);

	public List<RecActivityKeywordDTO> getAllKeywordData();
	public List<RegionSidoDTO> getSidoData();
	public List<RegionSidoDTO> sigunguFilter(int sidoId);
	public RecActivityInfoDTO getOneRecActivityData(int recAPostId);
	public RecTownInfoDTO getOneRecTownData(int recTId);
	public void createTownReportData(TownReportDTO town);
	public int getTownReportPostCurrentId();
	public int getTownReportImgCurrentId();
	public void postTownReportImagesValues(TownReportImagesDTO townReportImages);
	public void updateTownReportImgIdToTownReport(TownReportDTO townReport);
	public RecImagesDTO getRecImagesByImgId(int recImgId);
	public RecTownImagesDTO getRecTownImagesByImgId(int recTownImgId);

	public RegionTownDTO getTownInfoBySigunguIdAndTownName(RegionTownDTO regionTown);
	public void createRegionTownInfo(RegionTownDTO regionTown);
	public RecActSellerInfoDTO getSellerInfoByRecAId(int recAId);



//	Oracle
//	public List<RecActivityInfoDTO> keywordFilter(@Param("recAKeywordId") int recAKeywordId, @Param("colName") String colName, @Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
//	public List<RecActivityInfoDTO> getTotalRecActivity(@Param("colName") String colName, @Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
//	public List<RecActivityInfoDTO> sidoActivity(@Param("sidoId") int sidoId, @Param("colName") String colName, @Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
//	public List<RecActivityInfoDTO> sigunguActivity(@Param("sigunguId") int sigunguId, @Param("colName") String colName, @Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
//	public List<RecTownInfoDTO> getTotalRecTown(@Param("colName") String colName, @Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
//	public List<RecTownInfoDTO> getSidoTown(@Param("sidoId") int sidoId, @Param("colName") String colName, @Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
//	public List<RecTownInfoDTO> getSigunguTown(@Param("sigunguId") int sigunguId, @Param("colName") String colName, @Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);


//	MySQL
	public List<RecActivityInfoDTO> keywordFilter(@Param("recAKeywordId") int recAKeywordId, @Param("colName") String colName, @Param("startPostNo") int startPostNo, @Param("perPagePostNo") int perPagePostNo);
	public List<RecActivityInfoDTO> getTotalRecActivity(@Param("colName") String colName, @Param("startPostNo") int startPostNo, @Param("perPagePostNo") int perPagePostNo);
	public List<RecActivityInfoDTO> sidoActivity(@Param("sidoId") int sidoId, @Param("colName") String colName, @Param("startPostNo") int startPostNo, @Param("perPagePostNo") int perPagePostNo);
	public List<RecActivityInfoDTO> sigunguActivity(@Param("sigunguId") int sigunguId, @Param("colName") String colName, @Param("startPostNo") int startPostNo, @Param("perPagePostNo") int perPagePostNo);
	public List<RecTownInfoDTO> getTotalRecTown(@Param("colName") String colName, @Param("startPostNo") int startPostNo, @Param("perPagePostNo") int perPagePostNo);
	public List<RecTownInfoDTO> getSidoTown(@Param("sidoId") int sidoId, @Param("colName") String colName, @Param("startPostNo") int startPostNo, @Param("perPagePostNo") int perPagePostNo);
	public List<RecTownInfoDTO> getSigunguTown(@Param("sigunguId") int sigunguId, @Param("colName") String colName, @Param("startPostNo") int startPostNo, @Param("perPagePostNo") int perPagePostNo);
}