package com.javajo.sunshineRoad.model.service.impl.common.like;

import com.javajo.sunshineRoad.exception.IllegalBoardType;
import com.javajo.sunshineRoad.model.dao.common.LikeDAO;
import com.javajo.sunshineRoad.model.dto.common.likes.LikesDTO;
import com.javajo.sunshineRoad.model.service.IService.common.like.CheckIsLikeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CheckIsLikeServiceImpl implements CheckIsLikeService {
    private final LikeDAO likeDAO;

    @Override
    public boolean checkIsLike(LikesDTO likes) {
        if (likes.getPostTypeId() == 1 || likes.getPostTypeId() == 4) {
            throw new IllegalBoardType("좋아요 기능 없음");
        }

        int resultCount = likeDAO.checkIsLike(likes);
        return resultCount == 1;
    }
}