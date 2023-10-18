package com.javajo.sunshineRoad.model.service.IService.common.favorite;

import com.javajo.sunshineRoad.model.dto.common.favorites.FavoritesDTO;

public interface CheckIsFavoriteService {
    public boolean checkIsFavorite(FavoritesDTO favorites);
}