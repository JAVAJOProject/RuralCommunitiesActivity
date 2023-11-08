package com.javajo.sunshineRoad.model.dao.common;

import com.javajo.sunshineRoad.mappers.common.SiteAccessMapper;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class SiteAccessDAO {
    private final SqlSessionTemplate sqlSession;

    public void recordVisitation() {
        SiteAccessMapper mapper = sqlSession.getMapper(SiteAccessMapper.class);
        mapper.recordVisitation();
    }
}