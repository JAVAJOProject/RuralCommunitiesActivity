package com.javajo.sunshineRoad.model.service.impl.customerCenter.faq;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.customerCenter.faq.FaqDAO;
import com.javajo.sunshineRoad.model.dto.customerCenter.faq.FaqInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;
import com.javajo.sunshineRoad.model.service.IService.customerCenter.faq.GetRequestPageFaqListService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GetRequestPageFaqListServiceImpl implements GetRequestPageFaqListService {
	private final FaqDAO faqDAO;

    private final OffSetBasedPaginationUtils offSetBasedPaginationUtils;

    
    @Override
    public List<FaqInfoDTO> getRequestPageFaqList(int totalCount, int perPagePostCount, int requestPageNo, int faqTypeId){
    	 
    	 int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
	     int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
    
	    	return faqDAO.getRequestPageFaqList(startPostNo, endPostNo, faqTypeId);

    }
}
