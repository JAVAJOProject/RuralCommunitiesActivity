package com.javajo.sunshineRoad.mappers.totalActivity;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.review.ReviewDTO;

@Mapper
public interface ReviewMapper {
	public int getTotalReviewCountData();
	public List<ReviewDTO> getRequestPageReviewContentData(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
}