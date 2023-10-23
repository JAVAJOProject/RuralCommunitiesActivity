package com.javajo.sunshineRoad.model.dao.common;

import com.javajo.sunshineRoad.mappers.common.PostReportMapper;
import com.javajo.sunshineRoad.model.dto.common.report.PostReportDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class PostReportDAO {
    private final SqlSessionTemplate sqlSession;

    public int checkIsReported(int boardId) {
        PostReportMapper mapper = sqlSession.getMapper(PostReportMapper.class);
        return mapper.checkIsReported(boardId);
    }

    public int getCurrentReportedCount(int boardId) {
        PostReportMapper mapper = sqlSession.getMapper(PostReportMapper.class);
        return mapper.getCurrentReportedCount(boardId);
    }

    public void postReportPost(int boardId) {
        PostReportMapper mapper = sqlSession.getMapper(PostReportMapper.class);
        mapper.postReportPost(boardId);
    }

    public void updateReportedCount(PostReportDTO postReport) {
        PostReportMapper mapper = sqlSession.getMapper(PostReportMapper.class);
        mapper.updateReportedCount(postReport);
    }
}