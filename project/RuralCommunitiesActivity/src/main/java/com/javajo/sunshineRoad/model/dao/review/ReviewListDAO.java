package com.javajo.sunshineRoad.model.dao.review;

import com.javajo.sunshineRoad.mappers.mypageMember.ReviewMapper;
import com.javajo.sunshineRoad.model.dto.review.ReviewDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ReviewListDAO {
    private final SqlSessionTemplate sqlSession;

    public int getTotalReviewCount() {
        ReviewMapper mapper = sqlSession.getMapper(ReviewMapper.class);
        return mapper.getTotalReviewCountData();
    }
    public List<ReviewDTO> getRequestPageReviewContent(int startPostNo, int endPostNo) {
    	ReviewMapper mapper = sqlSession.getMapper(ReviewMapper.class);
    	return mapper.getRequestPageReviewContentData(startPostNo, endPostNo);
    }
}