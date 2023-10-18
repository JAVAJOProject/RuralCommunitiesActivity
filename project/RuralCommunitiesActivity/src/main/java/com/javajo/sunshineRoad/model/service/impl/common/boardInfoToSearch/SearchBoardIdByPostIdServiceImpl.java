package com.javajo.sunshineRoad.model.service.impl.common.boardInfoToSearch;

import com.javajo.sunshineRoad.model.dao.common.BoardInfoToSearchDAO;
import com.javajo.sunshineRoad.model.dto.common.board.BoardInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.common.boardInfoToSearch.SearchBoardIdByPostIdService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SearchBoardIdByPostIdServiceImpl implements SearchBoardIdByPostIdService {
    private final BoardInfoToSearchDAO boardInfoToSearchDAO;

    @Override
    public int searchBoardIdByPostId(int postTypeId, int postId) {
        BoardInfoDTO boardInfo = BoardInfoDTO.builder().postTypeId(postTypeId).build();
        boardInfo.setPostIdCol(postTypeId);

        return boardInfoToSearchDAO.searchBoardIdByPostId(boardInfo, postId);
    }
}