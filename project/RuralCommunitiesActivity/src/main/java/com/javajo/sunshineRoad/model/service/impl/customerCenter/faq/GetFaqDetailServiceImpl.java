package com.javajo.sunshineRoad.model.service.impl.customerCenter.faq;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.customerCenter.faq.FaqDAO;
import com.javajo.sunshineRoad.model.dto.customerCenter.faq.FaqInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.customerCenter.faq.GetFaqDetailService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GetFaqDetailServiceImpl implements GetFaqDetailService {
	private final FaqDAO faqDAO;
	
	@Override
	public FaqInfoDTO getFaqDetail(int faqId) {
		return faqDAO.getFaqDetail(faqId);
	}
}
