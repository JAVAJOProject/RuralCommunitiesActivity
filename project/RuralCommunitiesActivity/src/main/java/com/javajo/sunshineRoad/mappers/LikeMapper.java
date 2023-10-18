package com.javajo.sunshineRoad.mappers;

import com.javajo.sunshineRoad.model.dto.common.likes.LikesDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface LikeMapper {
    public void postLike(LikesDTO likes);
    public int checkIsLike(LikesDTO likes);
    public List<LikesDTO> getAllLikeInfo();
    public List<LikesDTO> getAllLikeInfoByUser(int uId);
    public List<LikesDTO> getAllLikeInfoByUserAndPostType(LikesDTO likes);
    public void deleteLike(LikesDTO likes);
}