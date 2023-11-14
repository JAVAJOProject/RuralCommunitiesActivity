package com.javajo.sunshineRoad.model.service.impl.customerCenter.notice;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.customerCenter.notice.NoticeDAO;
import com.javajo.sunshineRoad.model.dto.customerCenter.notice.NoticeListInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;
import com.javajo.sunshineRoad.model.service.IService.customerCenter.notice.GetRequestPageNoticeListService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GetRequestPageNoticeListServiceImpl implements GetRequestPageNoticeListService{
	private final NoticeDAO noticeDAO;
	
    private final OffSetBasedPaginationUtils offSetBasedPaginationUtils;
    

//	Oracle
	@Override
	public List<NoticeListInfoDTO> getRequestPageNoticeList(int totalCount, int perPagePostCount, int requestPageNo, int noticeTypeId){

		System.out.println("countservice"+totalCount+","+perPagePostCount+","+requestPageNo+","+noticeTypeId);

		 int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
	     int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);

	     System.out.println(startPostNo +","+endPostNo);
	    if (noticeTypeId == 0) {
	    	return noticeDAO.getRequestPageNoticeList(startPostNo, endPostNo);
	    } else {
	    	return noticeDAO.getRequestPageNoticeListList(startPostNo, endPostNo, noticeTypeId);
	    }
	}


//	MySQL
//	@Override
//	public List<NoticeListInfoDTO> getRequestPageNoticeList(int totalCount, int perPagePostCount, int requestPageNo, int noticeTypeId){
//		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
//
//		if (noticeTypeId == 0) {
//			return noticeDAO.getRequestPageNoticeList(startPostNo - 1, perPagePostCount);
//		} else {
//			return noticeDAO.getRequestPageNoticeListList(startPostNo - 1, perPagePostCount, noticeTypeId);
//		}
//	}
}