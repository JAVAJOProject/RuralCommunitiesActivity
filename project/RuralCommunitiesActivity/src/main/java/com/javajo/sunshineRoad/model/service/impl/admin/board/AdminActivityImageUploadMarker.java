package com.javajo.sunshineRoad.model.service.impl.admin.board;

import java.util.List;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import com.javajo.sunshineRoad.model.dao.admin.board.AActivityDAO;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityImgDTO;
import com.javajo.sunshineRoad.model.service.IService.common.utils.ImageInfoUploadMarker;
import lombok.RequiredArgsConstructor;


@Service
@Qualifier("AdminActivityImageUploader")
@RequiredArgsConstructor
public class AdminActivityImageUploadMarker implements ImageInfoUploadMarker{

	
	private final AActivityDAO activityDAO;
	
	
	@Override
	public int getPostCurrentIdNo() {
		return activityDAO.PostMaxID();
	}

	@Override
	public int getImgCurrentIdNo() {
		return activityDAO.ImgMaxID();
	}

	@Override
	public void requestInsertToDB(int imgId, List<String> pathList) {
		AActivityImgDTO activityImg = AActivityImgDTO.builder()
				.activityImgId(imgId)
				.activityImg1(pathList.get(0))
				.activityImg2(pathList.get(1))
				.activityImg3(pathList.get(2))
				.activityImg4(pathList.get(3))
				.activityImg5(pathList.get(4))
				.build();
		activityDAO.activityImgValues(activityImg);
		
	}

	@Override
	public void requestUpdateFK(int imgId, int postId) {
		AActivityDTO activityDTO = AActivityDTO.builder()
				.aImgId(imgId + 1)
				.aId(postId)
				.build();
		
		activityDAO.updateImgID(activityDTO);
	}

}
