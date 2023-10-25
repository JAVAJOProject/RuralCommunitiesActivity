package com.javajo.sunshineRoad.model.service.impl.customerCenter.notice;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.customerCenter.notice.NoticeDAO;
import com.javajo.sunshineRoad.model.dto.customerCenter.notice.NoticeImgDTO;
import com.javajo.sunshineRoad.model.service.IService.customerCenter.notice.GetNoticeImagesByImgIdService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GetNoticeImagesByImgIdServiceImpl implements GetNoticeImagesByImgIdService {
	public final NoticeDAO noticeDAO;
	
	@Override
	public NoticeImgDTO getNoticeImagesByImgId(int noticeImgId) {
		return noticeDAO.getNoticeImagesByImgId(noticeImgId);
	}
}
