package com.javajo.sunshineRoad.mappers.totalActivity;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.review.ReviewDTO;

@Mapper
public interface ReviewMapper {
   public int getTotalReviewCountData();

//   Oracle
   public List<ReviewDTO> getRequestPageReviewContentData(@Param("aPostId")int aPostId, @Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);

//   MySQL
//   public List<ReviewDTO> getRequestPageReviewContentData(@Param("aPostId")int aPostId, @Param("startPostNo") int startPostNo, @Param("perPagePostNo") int perPagePostNo);
}