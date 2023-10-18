package com.javajo.sunshineRoad.controller.common;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.common.ResponseDTO;
import com.javajo.sunshineRoad.model.dto.common.favorites.FavoritesDTO;
import com.javajo.sunshineRoad.model.service.IService.common.favorite.CheckIsFavoriteService;
import com.javajo.sunshineRoad.model.service.IService.common.favorite.DeleteFavoriteService;
import com.javajo.sunshineRoad.model.service.IService.common.favorite.GetAllFavoriteInfoByUserAndPostTypeService;
import com.javajo.sunshineRoad.model.service.IService.common.favorite.GetAllFavoriteInfoByUserService;
import com.javajo.sunshineRoad.model.service.IService.common.favorite.GetAllFavoriteInfoService;
import com.javajo.sunshineRoad.model.service.IService.common.favorite.PostFavoriteService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/favorite")
public class FavoriteController {
    private final CheckIsFavoriteService checkIsFavoriteService;
    private final GetAllFavoriteInfoService getAllFavoriteInfoService;
    private final GetAllFavoriteInfoByUserService getAllFavoriteInfoByUserService;
    private final GetAllFavoriteInfoByUserAndPostTypeService getAllFavoriteInfoByUserAndPostTypeService;
    private final PostFavoriteService postFavoriteService;
    private final DeleteFavoriteService deleteFavoriteService;

    @GetMapping("/list")
    public ResponseEntity<List<FavoritesDTO>> getAllFavoriteInfo() {
        List<FavoritesDTO> favoritesList = getAllFavoriteInfoService.getAllFavoriteInfo();
        return ResponseEntity.ok(favoritesList);
    }

    @GetMapping("/list/all/{uId}")
    public ResponseEntity<List<FavoritesDTO>> getAllFavoriteInfoByUserAndPostTypeService(@PathVariable int uId, @RequestParam int postTypeId) {
        if (postTypeId > 5 || postTypeId < 1) {
            return ResponseEntity.badRequest().build();
        }

        FavoritesDTO favorites = FavoritesDTO.builder().uId(uId).postTypeId(postTypeId).build();
        List<FavoritesDTO> favoritesList = getAllFavoriteInfoByUserAndPostTypeService.getAllFavoriteInfoByUserAndPostType(favorites);
        return ResponseEntity.ok(favoritesList);
    }

    @GetMapping("/list/user/{uId}")
    public ResponseEntity<List<FavoritesDTO>> getAllFavoriteInfoByUser(@PathVariable int uId) {
        List<FavoritesDTO> favoritesList = getAllFavoriteInfoByUserService.getAllFavoriteInfoByUser(uId);
        return ResponseEntity.ok(favoritesList);
    }

    /*{"uId":3, "boardId":5, "postTypeId":1}
{"uId":6, "boardId":5, "postTypeId":1}
{"uId":2, "boardId":4, "postTypeId":1}
{"uId":3, "boardId":50, "postTypeId":4}
{"uId":1, "boardId":48, "postTypeId":4}
{"uId":1, "boardId":60, "postTypeId":4}*/
    @PostMapping("/switch-status")
    public ResponseEntity<ResponseDTO> switchFavoriteStatus(@RequestBody FavoritesDTO favorites) {
        boolean isFavorite = checkIsFavoriteService.checkIsFavorite(favorites);

        if (isFavorite) {
            deleteFavoriteService.deleteFavorite(favorites);

            boolean result = false;
            ResponseDTO response = ResponseDTO.builder().resultMsg("삭제").data(result).build();

            return ResponseEntity.ok(response);
        } else {
            postFavoriteService.postFavorite(favorites);

            boolean result = true;
            ResponseDTO response = ResponseDTO.builder().resultMsg("등록").data(result).build();

            return ResponseEntity.ok(response);
        }
    }
}