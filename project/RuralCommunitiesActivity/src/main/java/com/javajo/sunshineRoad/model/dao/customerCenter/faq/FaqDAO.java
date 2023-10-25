package com.javajo.sunshineRoad.model.dao.customerCenter.faq;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.customerCenter.FaqMapper;
import com.javajo.sunshineRoad.model.dto.customerCenter.faq.FaqInfoDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class FaqDAO {
	private final SqlSessionTemplate sqlSession;

	public int getFaqListCount(int faqTypeId) {
		FaqMapper faqMapper = sqlSession.getMapper(FaqMapper.class);
		return faqMapper.getFaqListCount(faqTypeId);
	}
	
	public List<FaqInfoDTO> getRequestPageFaqList(int startPostNo, int endPostNo, int faqTypeId){
		FaqMapper faqMapper = sqlSession.getMapper(FaqMapper.class);
		List<FaqInfoDTO> result = faqMapper.getRequestPageFaqList(startPostNo, endPostNo, faqTypeId);
		return result;
	}
	public FaqInfoDTO getFaqDetail(int faqId) {
		FaqMapper faqMapper = sqlSession.getMapper(FaqMapper.class);
		return faqMapper.getFaqDetail(faqId);
	}
}
