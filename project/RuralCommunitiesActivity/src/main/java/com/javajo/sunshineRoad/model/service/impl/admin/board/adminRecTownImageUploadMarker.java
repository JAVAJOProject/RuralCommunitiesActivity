package com.javajo.sunshineRoad.model.service.impl.admin.board;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.admin.board.ARecTownDAO;
import com.javajo.sunshineRoad.model.dto.admin.board.ARecTownDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ARecTownImgDTO;
import com.javajo.sunshineRoad.model.service.IService.common.utils.ImageInfoUploadMarker;

import lombok.RequiredArgsConstructor;


@Service
@Qualifier("AdminRecTownImageUploader")
@RequiredArgsConstructor
public class adminRecTownImageUploadMarker implements ImageInfoUploadMarker {

	
	private final ARecTownDAO recTownDAO;
	
	@Override
	public int getPostCurrentIdNo() {
		return recTownDAO.PostMaxID();
	}

	@Override
	public int getImgCurrentIdNo() {
		return recTownDAO.ImgMaxID();
	}

	@Override
	public void requestInsertToDB(int imgId, List<String> pathList) {
		ARecTownImgDTO recTownImg = ARecTownImgDTO.builder()
				.recTownImgId(imgId)
				.recTownImg1(pathList.get(0))
				.recTownImg2(pathList.get(1))
				.recTownImg3(pathList.get(2))
				.recTownImg4(pathList.get(3))
				.recTownImg5(pathList.get(4))
				.build();
		recTownDAO.recTownImgValues(recTownImg);
	}

	@Override
	public void requestUpdateFK(int imgId, int postId) {
		ARecTownDTO recTownDTO = ARecTownDTO.builder()
				.recTImgId(imgId + 1)
				.recTId(postId)
				.build();
		recTownDAO.updateImgID(recTownDTO);
		
		
	}

}
