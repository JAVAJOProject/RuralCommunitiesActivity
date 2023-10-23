package com.javajo.sunshineRoad.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.customerCenter.faq.FaqInfoDTO;

@Mapper
public interface FaqMapper {

	public int getFaqListCount(int faqTypeId);
	
	public List<FaqInfoDTO> getRequestPageFaqList(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo, @Param("faqTypeId") int faqTypeId);
	
	public FaqInfoDTO getFaqDetail(int faqId);
}
