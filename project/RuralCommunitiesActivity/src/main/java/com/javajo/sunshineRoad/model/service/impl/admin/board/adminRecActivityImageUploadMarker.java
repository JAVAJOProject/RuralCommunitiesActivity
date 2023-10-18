package com.javajo.sunshineRoad.model.service.impl.admin.board;

import java.util.List;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import com.javajo.sunshineRoad.model.dao.admin.board.ARecActivityDAO;
import com.javajo.sunshineRoad.model.dto.admin.board.ARActivityImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ARecActivityDTO;
import com.javajo.sunshineRoad.model.service.IService.common.utils.ImageInfoUploadMarker;

import lombok.RequiredArgsConstructor;

@Service
@Qualifier("AdminRecActivityImageUploader")
@RequiredArgsConstructor
public class adminRecActivityImageUploadMarker implements ImageInfoUploadMarker{

	
	private final ARecActivityDAO recActivityDAO;

	@Override
	public int getPostCurrentIdNo() {
		System.out.println("ARecActivityDAO getPostCurrentIdNo()");
		return recActivityDAO.PostMaxID();
	}

	@Override
	public int getImgCurrentIdNo() {
		System.out.println("ARecActivityDAO getImgCurrentIdNo()");
		return recActivityDAO.ImgMaxID();
	}

	@Override
	public void requestInsertToDB(int imgId, List<String> pathList) {
		System.out.println("ARecActivityDAO requestInsertToDB()");
		ARActivityImgDTO recActivityImg = ARActivityImgDTO.builder()
				.recAImgId(imgId)
				.recAImg1(pathList.get(0))
				.recAImg2(pathList.get(1))
				.recAImg3(pathList.get(2))
				.recAImg4(pathList.get(3))
				.recAImg5(pathList.get(4))
				.build();
		recActivityDAO.recActivityImgValues(recActivityImg);
	}

	@Override
	public void requestUpdateFK(int imgId, int postId) {
		System.out.println("ARecActivityDAO requestUpdateFK()");
		
		ARecActivityDTO recActivityDTO = ARecActivityDTO.builder()
				.recAImgId(imgId + 1)
				.recAPostId(postId)
				.build();
		recActivityDAO.updateImgID(recActivityDTO);
	}
	

	
	

}
