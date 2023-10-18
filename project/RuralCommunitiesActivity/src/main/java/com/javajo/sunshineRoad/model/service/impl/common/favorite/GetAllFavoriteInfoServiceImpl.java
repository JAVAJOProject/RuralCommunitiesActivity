package com.javajo.sunshineRoad.model.service.impl.common.favorite;

import com.javajo.sunshineRoad.model.dao.common.FavoriteDAO;
import com.javajo.sunshineRoad.model.dto.common.favorites.FavoritesDTO;
import com.javajo.sunshineRoad.model.service.IService.common.favorite.GetAllFavoriteInfoService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GetAllFavoriteInfoServiceImpl implements GetAllFavoriteInfoService {
    private final FavoriteDAO favoriteDAO;

    @Override
    public List<FavoritesDTO> getAllFavoriteInfo() {
        return favoriteDAO.getAllFavoriteInfo();
    }
}