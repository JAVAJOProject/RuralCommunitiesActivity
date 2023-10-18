package com.javajo.sunshineRoad.model.service.impl.common.favorite;

import com.javajo.sunshineRoad.exception.IllegalBoardType;
import com.javajo.sunshineRoad.model.dao.common.FavoriteDAO;
import com.javajo.sunshineRoad.model.dto.common.favorites.FavoritesDTO;
import com.javajo.sunshineRoad.model.service.IService.common.favorite.CheckIsFavoriteService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CheckIsFavoriteServiceImpl implements CheckIsFavoriteService {
    private final FavoriteDAO favoriteDAO;

    @Override
    public boolean checkIsFavorite(FavoritesDTO favorites) {
        if (favorites.getPostTypeId() != 1 && favorites.getPostTypeId() != 4) {
            throw new IllegalBoardType("찜하기 기능 없음");
        }

        int resultCount = favoriteDAO.checkIsFavorite(favorites);
        return resultCount == 1;
    }
}