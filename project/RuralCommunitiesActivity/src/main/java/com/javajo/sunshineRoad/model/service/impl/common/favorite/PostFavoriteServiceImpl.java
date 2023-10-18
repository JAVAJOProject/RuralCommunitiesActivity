package com.javajo.sunshineRoad.model.service.impl.common.favorite;

import com.javajo.sunshineRoad.model.dao.common.FavoriteDAO;
import com.javajo.sunshineRoad.model.dto.common.favorites.FavoritesDTO;
import com.javajo.sunshineRoad.model.service.IService.common.favorite.PostFavoriteService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostFavoriteServiceImpl implements PostFavoriteService {
    private final FavoriteDAO favoriteDAO;

    @Override
    public void postFavorite(FavoritesDTO favorites) {
        favoriteDAO.postFavorite(favorites);
    }
}