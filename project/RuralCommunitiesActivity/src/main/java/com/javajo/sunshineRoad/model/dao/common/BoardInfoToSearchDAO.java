package com.javajo.sunshineRoad.model.dao.common;

import com.javajo.sunshineRoad.mappers.BoardInfoToSearchMapper;
import com.javajo.sunshineRoad.model.dto.common.board.BoardInfoDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

@Repository
@RequiredArgsConstructor
public class BoardInfoToSearchDAO {
    private final SqlSessionTemplate sqlSession;

    public int searchBoardIdByPostId(BoardInfoDTO boardInfo, int postId) {
        BoardInfoToSearchMapper mapper = sqlSession.getMapper(BoardInfoToSearchMapper.class);

        Map<String, Object> params = new HashMap<String, Object>();
        params.put("boardInfo", boardInfo);
        params.put("postId", postId);

        return mapper.searchBoardIdByPostId(params);
    }

    public BoardInfoDTO searchPostIdAndPostTypeByBoardId(int boardId) {
        BoardInfoToSearchMapper mapper = sqlSession.getMapper(BoardInfoToSearchMapper.class);
        return mapper.searchPostIdAndPostTypeByBoardId(boardId);
    }
}