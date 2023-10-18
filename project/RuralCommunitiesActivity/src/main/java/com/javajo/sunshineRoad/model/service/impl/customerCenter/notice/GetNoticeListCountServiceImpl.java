package com.javajo.sunshineRoad.model.service.impl.customerCenter.notice;

import org.springframework.stereotype.Service;
import com.javajo.sunshineRoad.model.dao.customerCenter.notice.NoticeDAO;
import com.javajo.sunshineRoad.model.service.IService.customerCenter.notice.GetNoticeListCountService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GetNoticeListCountServiceImpl implements GetNoticeListCountService {
	private final NoticeDAO noticeDAO;
	

	@Override
		public int getNoticeListCount(int noticeTypeId) {
		
		System.out.println("countservice"+noticeTypeId);
		if (noticeTypeId == 0) {
			return noticeDAO.getNoticeListCount();
		} else {
		 	return noticeDAO.getNoticeListCountCount(noticeTypeId);
	    }
	}
}