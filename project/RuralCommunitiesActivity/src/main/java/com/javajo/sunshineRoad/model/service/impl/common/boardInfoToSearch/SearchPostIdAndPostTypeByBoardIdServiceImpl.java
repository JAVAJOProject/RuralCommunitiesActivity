package com.javajo.sunshineRoad.model.service.impl.common.boardInfoToSearch;

import com.javajo.sunshineRoad.model.dao.common.BoardInfoToSearchDAO;
import com.javajo.sunshineRoad.model.dto.common.board.BoardInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.common.boardInfoToSearch.SearchPostIdAndPostTypeByBoardIdService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SearchPostIdAndPostTypeByBoardIdServiceImpl implements SearchPostIdAndPostTypeByBoardIdService {
    private final BoardInfoToSearchDAO boardInfoToSearchDAO;

    @Override
    public BoardInfoDTO searchPostIdAndPostTypeByBoardId(int boardId) {
        return boardInfoToSearchDAO.searchPostIdAndPostTypeByBoardId(boardId);
    }
}