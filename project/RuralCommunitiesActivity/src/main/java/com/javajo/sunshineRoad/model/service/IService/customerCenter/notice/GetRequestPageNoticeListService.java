package com.javajo.sunshineRoad.model.service.IService.customerCenter.notice;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.customerCenter.notice.NoticeListInfoDTO;

public interface GetRequestPageNoticeListService {
	
	public List<NoticeListInfoDTO> getRequestPageNoticeList(int totalCount, int perPagePostCount, int requestPageNo, int noticeTypeId);
}