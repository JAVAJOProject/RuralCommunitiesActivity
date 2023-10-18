package com.javajo.sunshineRoad.model.dao.common;

import com.javajo.sunshineRoad.mappers.ViewCountMapper;
import com.javajo.sunshineRoad.model.dto.common.view.ViewCountDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class ViewCountDAO {
    private final SqlSessionTemplate sqlSession;

    public int getCurrentViewCount(ViewCountDTO viewCount) {
        ViewCountMapper mapper = sqlSession.getMapper(ViewCountMapper.class);
        return mapper.getCurrentViewCount(viewCount);
    }

    public void updateViewCount(ViewCountDTO viewCount) {
        ViewCountMapper mapper = sqlSession.getMapper(ViewCountMapper.class);
        mapper.updateViewCount(viewCount);
    }
}