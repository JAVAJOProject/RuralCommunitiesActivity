package com.javajo.sunshineRoad.model.service.impl.common.like;

import com.javajo.sunshineRoad.model.dao.common.LikeDAO;
import com.javajo.sunshineRoad.model.dto.common.likes.LikesDTO;
import com.javajo.sunshineRoad.model.service.IService.common.like.GetAllLikeInfoByUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GetAllLikeInfoByUserServiceImpl implements GetAllLikeInfoByUserService {
    private final LikeDAO likeDAO;

    @Override
    public List<LikesDTO> getAllLikeInfoByUser(long uId) {
        return likeDAO.getAllLikeInfoByUser(uId);
    }
}