package com.javajo.sunshineRoad.model.dao.review;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.totalActivity.ReviewMapper;
import com.javajo.sunshineRoad.model.dto.review.ReviewDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class ReviewListDAO {
    private final SqlSessionTemplate sqlSession;

    public int getTotalReviewCount() {
        ReviewMapper mapper = sqlSession.getMapper(ReviewMapper.class);
        return mapper.getTotalReviewCountData();
    }
    public List<ReviewDTO> getRequestPageReviewContent(int aPostId, int startPostNo, int endPostNo) {
    	ReviewMapper mapper = sqlSession.getMapper(ReviewMapper.class);
    	return mapper.getRequestPageReviewContentData(aPostId, startPostNo, endPostNo);
    }
}