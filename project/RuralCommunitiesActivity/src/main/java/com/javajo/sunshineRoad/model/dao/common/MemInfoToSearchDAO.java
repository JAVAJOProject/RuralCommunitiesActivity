package com.javajo.sunshineRoad.model.dao.common;

import com.javajo.sunshineRoad.mappers.common.MemInfoToSearchMapper;
import com.javajo.sunshineRoad.model.dto.common.mem.MemInfoDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

@Repository
@RequiredArgsConstructor
public class MemInfoToSearchDAO {
    private final SqlSessionTemplate sqlSession;

    public long searchMemIdByUserId(MemInfoDTO memInfo, long userId) {
        MemInfoToSearchMapper mapper = sqlSession.getMapper(MemInfoToSearchMapper.class);

        Map<String, Object> params = new HashMap<String, Object>();
        params.put("memInfo", memInfo);
        params.put("userId", userId);

        return mapper.searchMemIdByUserId(params);
    }

    public MemInfoDTO searchUserIdAndMemTypeByMemId(long memId) {
        MemInfoToSearchMapper mapper = sqlSession.getMapper(MemInfoToSearchMapper.class);
        return mapper.searchUserIdAndMemTypeByMemId(memId);
    }
}