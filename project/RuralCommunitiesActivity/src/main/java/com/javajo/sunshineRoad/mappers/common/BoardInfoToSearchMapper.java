package com.javajo.sunshineRoad.mappers;

import com.javajo.sunshineRoad.model.dto.common.board.BoardInfoDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.Map;

@Mapper
public interface BoardInfoToSearchMapper {
    public int searchBoardIdByPostId(Map<String, Object> params);
    public BoardInfoDTO searchPostIdAndPostTypeByBoardId(int boardId);
}