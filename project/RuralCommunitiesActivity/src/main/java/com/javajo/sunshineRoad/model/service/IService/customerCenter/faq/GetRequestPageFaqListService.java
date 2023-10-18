package com.javajo.sunshineRoad.model.service.IService.customerCenter.faq;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.customerCenter.faq.FaqInfoDTO;

public interface GetRequestPageFaqListService {

	public List<FaqInfoDTO> getRequestPageFaqList(int totalCount, int perPagePostCount, int requestPageNo, int faqTypeId);
}
