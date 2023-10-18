package com.javajo.sunshineRoad.model.service.impl.common.like;

import com.javajo.sunshineRoad.model.dao.common.LikeDAO;
import com.javajo.sunshineRoad.model.dto.common.likes.LikesDTO;
import com.javajo.sunshineRoad.model.service.IService.common.like.DeleteLikeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DeleteLikeServiceImpl implements DeleteLikeService {
    private final LikeDAO likeDAO;

    @Override
    public void deleteLike(LikesDTO likes) {
        likeDAO.deleteLike(likes);
    }
}