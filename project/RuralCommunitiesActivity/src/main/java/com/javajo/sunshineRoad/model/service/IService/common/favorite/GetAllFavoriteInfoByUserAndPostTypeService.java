package com.javajo.sunshineRoad.model.service.IService.common.favorite;

import com.javajo.sunshineRoad.model.dto.common.favorites.FavoritesDTO;

import java.util.List;

public interface GetAllFavoriteInfoByUserAndPostTypeService {
    public List<FavoritesDTO> getAllFavoriteInfoByUserAndPostType(FavoritesDTO favorites);
}