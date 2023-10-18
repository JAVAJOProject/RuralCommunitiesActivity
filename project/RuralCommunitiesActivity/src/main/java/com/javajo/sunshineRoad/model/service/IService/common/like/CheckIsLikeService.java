package com.javajo.sunshineRoad.model.service.IService.common.like;

import com.javajo.sunshineRoad.model.dto.common.likes.LikesDTO;

public interface CheckIsLikeService {
    public boolean checkIsLike(LikesDTO likes);
}