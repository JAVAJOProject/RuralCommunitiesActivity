package com.javajo.sunshineRoad.model.service.impl.common.favorite;

import com.javajo.sunshineRoad.model.dao.common.FavoriteDAO;
import com.javajo.sunshineRoad.model.dto.common.favorites.FavoritesDTO;
import com.javajo.sunshineRoad.model.service.IService.common.favorite.GetAllFavoriteInfoByUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GetAllFavoriteInfoByUserServiceImpl implements GetAllFavoriteInfoByUserService {
    private final FavoriteDAO favoriteDAO;

    @Override
    public List<FavoritesDTO> getAllFavoriteInfoByUser(int uId) {
        return favoriteDAO.getAllFavoriteInfoByUser(uId);
    }
}