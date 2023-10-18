package com.javajo.sunshineRoad.model.service.IService.common.boardInfoToSearch;

import com.javajo.sunshineRoad.model.dto.common.board.BoardInfoDTO;

public interface SearchPostIdAndPostTypeByBoardIdService {
    public BoardInfoDTO searchPostIdAndPostTypeByBoardId(int boardId);
}