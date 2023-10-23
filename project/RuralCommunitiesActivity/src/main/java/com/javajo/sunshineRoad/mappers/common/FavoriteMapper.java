package com.javajo.sunshineRoad.mappers.common;

import com.javajo.sunshineRoad.model.dto.common.favorites.FavoritesDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface FavoriteMapper {
    public void postFavorite(FavoritesDTO favorites);
    public int checkIsFavorite(FavoritesDTO favorites);
    public List<FavoritesDTO> getAllFavoriteInfo();
    public List<FavoritesDTO> getAllFavoriteInfoByUser(int uId);
    public List<FavoritesDTO> getAllFavoriteInfoByUserAndPostType(FavoritesDTO favorites);
    public void deleteFavorite(FavoritesDTO favorites);
}