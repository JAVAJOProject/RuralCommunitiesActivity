package com.javajo.sunshineRoad.model.service.IService.common.like;

import com.javajo.sunshineRoad.model.dto.common.likes.LikesDTO;

import java.util.List;

public interface GetAllLikeInfoByUserAndPostTypeService {
    public List<LikesDTO> getAllLikeInfoByUserAndPostType(LikesDTO likes);
}