package com.javajo.sunshineRoad.model.dao.common;

import com.javajo.sunshineRoad.mappers.common.LikeMapper;
import com.javajo.sunshineRoad.model.dto.common.likes.LikesDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class LikeDAO {
    private final SqlSessionTemplate sqlSession;

    public void postLike(LikesDTO likes) {
        LikeMapper mapper = sqlSession.getMapper(LikeMapper.class);
        mapper.postLike(likes);
    }

    public int checkIsLike(LikesDTO likes) {
        LikeMapper mapper = sqlSession.getMapper(LikeMapper.class);
        return mapper.checkIsLike(likes);
    }

    public List<LikesDTO> getAllLikeInfo() {
        LikeMapper mapper = sqlSession.getMapper(LikeMapper.class);
        return mapper.getAllLikeInfo();
    }

    public List<LikesDTO> getAllLikeInfoByUser(int uId) {
        LikeMapper mapper = sqlSession.getMapper(LikeMapper.class);
        return mapper.getAllLikeInfoByUser(uId);
    }

    public List<LikesDTO> getAllLikeInfoByUserAndPostType(LikesDTO likes) {
        LikeMapper mapper = sqlSession.getMapper(LikeMapper.class);
        return mapper.getAllLikeInfoByUserAndPostType(likes);
    }

    public void deleteLike(LikesDTO likes) {
        LikeMapper mapper = sqlSession.getMapper(LikeMapper.class);
        mapper.deleteLike(likes);
    }
}