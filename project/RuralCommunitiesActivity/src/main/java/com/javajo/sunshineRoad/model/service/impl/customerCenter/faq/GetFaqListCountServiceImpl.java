package com.javajo.sunshineRoad.model.service.impl.customerCenter.faq;

import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.model.dao.customerCenter.faq.FaqDAO;
import com.javajo.sunshineRoad.model.service.IService.customerCenter.faq.GetFaqListCountService;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class GetFaqListCountServiceImpl implements GetFaqListCountService {
	private final FaqDAO faqDAO;
	
	@Override
	public int getFaqListCount(int faqTypeId) {
		return faqDAO.getFaqListCount(faqTypeId);
	}
}
