package com.javajo.sunshineRoad.mappers.customerCenter;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.customerCenter.faq.FaqInfoDTO;

@Mapper
public interface FaqMapper {

	public int getFaqListCount(int faqTypeId);

	public FaqInfoDTO getFaqDetail(int faqId);

//	Oracle
	public List<FaqInfoDTO> getRequestPageFaqList(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo, @Param("faqTypeId") int faqTypeId);

//	MySQL
//public List<FaqInfoDTO> getRequestPageFaqList(@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int perPagePostCount, @Param("faqTypeId") int faqTypeId);
}