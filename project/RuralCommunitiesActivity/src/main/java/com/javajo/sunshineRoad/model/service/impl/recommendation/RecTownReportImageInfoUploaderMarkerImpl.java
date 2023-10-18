package com.javajo.sunshineRoad.model.service.impl.recommendation;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.recommendation.RecommendationDAO;
import com.javajo.sunshineRoad.model.dto.recommendation.TownReportDTO;
import com.javajo.sunshineRoad.model.dto.recommendation.TownReportImagesDTO;
import com.javajo.sunshineRoad.model.service.IService.common.utils.ImageInfoUploadMarker;

import lombok.RequiredArgsConstructor;

@Service
@Qualifier("RecTownReportImageInfoUploader")
@RequiredArgsConstructor
public class RecTownReportImageInfoUploaderMarkerImpl implements ImageInfoUploadMarker {
	private final RecommendationDAO recommendationDAO;
	
	@Override
	public int getPostCurrentIdNo() {
		return recommendationDAO.getTownReportPostCurrentId();
	}

	@Override
	public int getImgCurrentIdNo() {
		return recommendationDAO.getTownReportImgCurrentId();
	}

	@Override
	public void requestInsertToDB(int imgId, List<String> pathList) {
		TownReportImagesDTO townReportImages = TownReportImagesDTO.builder()
				.tRImgId(imgId)
				.tRImg1(pathList.get(0))
				.tRImg2(pathList.get(1))
				.tRImg3(pathList.get(2))
				.tRImg4(pathList.get(3))
				.tRImg5(pathList.get(4))
				.build();
		recommendationDAO.postTownReportImagesValues(townReportImages);
				
	}

	@Override
	public void requestUpdateFK(int imgId, int postId) {
		TownReportDTO townReport = TownReportDTO.builder()
				.tRImgId(imgId + 1)
				.tRId(postId)
				.build();
		
		recommendationDAO.updateTownReportImgIdToTownReport(townReport);
	}

}
