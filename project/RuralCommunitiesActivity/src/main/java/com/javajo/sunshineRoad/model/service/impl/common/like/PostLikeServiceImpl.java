package com.javajo.sunshineRoad.model.service.impl.common.like;

import com.javajo.sunshineRoad.model.dao.common.LikeDAO;
import com.javajo.sunshineRoad.model.dto.common.likes.LikesDTO;
import com.javajo.sunshineRoad.model.service.IService.common.like.PostLikeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostLikeServiceImpl implements PostLikeService {
    private final LikeDAO likeDAO;

    @Override
    public void postLike(LikesDTO likes) {
        likeDAO.postLike(likes);
    }
}