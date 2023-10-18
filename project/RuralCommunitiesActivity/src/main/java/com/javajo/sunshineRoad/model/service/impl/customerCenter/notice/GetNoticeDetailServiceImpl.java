package com.javajo.sunshineRoad.model.service.impl.customerCenter.notice;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.customerCenter.notice.NoticeDAO;

import com.javajo.sunshineRoad.model.dto.customerCenter.notice.NoticeListInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.customerCenter.notice.GetNoticeDetailService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GetNoticeDetailServiceImpl implements GetNoticeDetailService {
	private final NoticeDAO noticeDAO;

	@Override
	public NoticeListInfoDTO getNoticeDetail(int noticeId) {
		return noticeDAO.getNoticeDetail(noticeId);
	}
	
}
