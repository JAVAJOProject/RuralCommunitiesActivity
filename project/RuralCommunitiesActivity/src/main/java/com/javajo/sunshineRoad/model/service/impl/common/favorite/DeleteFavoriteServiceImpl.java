package com.javajo.sunshineRoad.model.service.impl.common.favorite;

import com.javajo.sunshineRoad.model.dao.common.FavoriteDAO;
import com.javajo.sunshineRoad.model.dto.common.favorites.FavoritesDTO;
import com.javajo.sunshineRoad.model.service.IService.common.favorite.DeleteFavoriteService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DeleteFavoriteServiceImpl implements DeleteFavoriteService {
    private final FavoriteDAO favoriteDAO;

    @Override
    public void deleteFavorite(FavoritesDTO favorites) {
        favoriteDAO.deleteFavorite(favorites);
    }
}