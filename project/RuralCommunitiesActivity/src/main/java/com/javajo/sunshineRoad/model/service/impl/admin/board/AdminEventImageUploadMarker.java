package com.javajo.sunshineRoad.model.service.impl.admin.board;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.admin.board.AEventDAO;
import com.javajo.sunshineRoad.model.dto.admin.board.AEventDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AEventImgDTO;
import com.javajo.sunshineRoad.model.service.IService.common.utils.ImageInfoUploadMarker;

import lombok.RequiredArgsConstructor;


@Service
@Qualifier("AdminEventImageUploader")
@RequiredArgsConstructor
public class AdminEventImageUploadMarker implements ImageInfoUploadMarker{

	
	private final AEventDAO eventDAO;
	
	
	@Override
	public int getPostCurrentIdNo() {
		return eventDAO.PostMaxID();
	}

	@Override
	public int getImgCurrentIdNo() {
		return eventDAO.ImgMaxID();
	}

	@Override
	public void requestInsertToDB(int imgId, List<String> pathList) {
		AEventImgDTO eventImg = AEventImgDTO.builder()
				.eventImgId(imgId)
				.eventImg1(pathList.get(0))
				.eventImg2(pathList.get(1))
				.eventImg3(pathList.get(2))
				.eventImg4(pathList.get(3))
				.eventImg5(pathList.get(4))
				.build();
		eventDAO.eventImgValues(eventImg);
		
	}

	@Override
	public void requestUpdateFK(int imgId, int postId) {
		AEventDTO eventDTO = AEventDTO.builder()
				.eventImgId(imgId + 1)
				.eventId(postId)
				.build();	
		eventDAO.updateImgID(eventDTO);
	}

}
