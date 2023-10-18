package com.javajo.sunshineRoad.model.service.impl.admin.board;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.admin.board.ANoticeDAO;
import com.javajo.sunshineRoad.model.dto.admin.board.ANoticeDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ANoticeImgDTO;
import com.javajo.sunshineRoad.model.service.IService.common.utils.ImageInfoUploadMarker;

import lombok.RequiredArgsConstructor;


@Service
@Qualifier("AdminNoticeImageUploader")
@RequiredArgsConstructor
public class AdminNoticeImageUploadMarker implements ImageInfoUploadMarker{

	
	private final ANoticeDAO noticeDAO;
	
	
	@Override
	public int getPostCurrentIdNo() {
		return noticeDAO.PostMaxID();
	}

	@Override
	public int getImgCurrentIdNo() {
		return noticeDAO.ImgMaxID();
	}

	@Override
	public void requestInsertToDB(int imgId, List<String> pathList) {
		ANoticeImgDTO noticeImg = ANoticeImgDTO.builder()
				.noticeImgId(imgId)
				.noticeImg1(pathList.get(0))
				.noticeImg2(pathList.get(1))
				.noticeImg3(pathList.get(2))
				.noticeImg4(pathList.get(3))
				.noticeImg5(pathList.get(4))
				.build();
		noticeDAO.noticeImgValues(noticeImg);
		
	}

	@Override
	public void requestUpdateFK(int imgId, int postId) {
		ANoticeDTO noticeDTO = ANoticeDTO.builder()
				.noticeImgId(imgId + 1)
				.noticeId(postId)
				.build();
		
		noticeDAO.updateImgID(noticeDTO);
	}

}
