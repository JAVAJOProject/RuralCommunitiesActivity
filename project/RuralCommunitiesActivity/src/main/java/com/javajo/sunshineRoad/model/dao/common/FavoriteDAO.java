package com.javajo.sunshineRoad.model.dao.common;

import com.javajo.sunshineRoad.mappers.common.FavoriteMapper;
import com.javajo.sunshineRoad.model.dto.common.favorites.FavoritesDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class FavoriteDAO {
    private final SqlSessionTemplate sqlSession;

    public void postFavorite(FavoritesDTO favorites) {
        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
        mapper.postFavorite(favorites);
    }

    public int checkIsFavorite(FavoritesDTO favorites) {
        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
        return mapper.checkIsFavorite(favorites);
    }

    public List<FavoritesDTO> getAllFavoriteInfo() {
        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
        return mapper.getAllFavoriteInfo();
    }

    public List<FavoritesDTO> getAllFavoriteInfoByUser(long uId) {
        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
        return mapper.getAllFavoriteInfoByUser(uId);
    }

    public List<FavoritesDTO> getAllFavoriteInfoByUserAndPostType(FavoritesDTO favorites) {
        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
        return mapper.getAllFavoriteInfoByUserAndPostType(favorites);
    }

    public void deleteFavorite(FavoritesDTO favorites) {
        FavoriteMapper mapper = sqlSession.getMapper(FavoriteMapper.class);
        mapper.deleteFavorite(favorites);
    }
}