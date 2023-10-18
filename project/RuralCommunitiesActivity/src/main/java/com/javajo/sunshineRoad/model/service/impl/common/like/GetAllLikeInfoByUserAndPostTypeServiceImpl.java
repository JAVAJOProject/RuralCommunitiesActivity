package com.javajo.sunshineRoad.model.service.impl.common.like;

import com.javajo.sunshineRoad.model.dao.common.LikeDAO;
import com.javajo.sunshineRoad.model.dto.common.likes.LikesDTO;
import com.javajo.sunshineRoad.model.service.IService.common.like.GetAllLikeInfoByUserAndPostTypeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GetAllLikeInfoByUserAndPostTypeServiceImpl implements GetAllLikeInfoByUserAndPostTypeService {
    private final LikeDAO likeDAO;

    @Override
    public List<LikesDTO> getAllLikeInfoByUserAndPostType(LikesDTO likes) {
        return likeDAO.getAllLikeInfoByUserAndPostType(likes);
    }
}