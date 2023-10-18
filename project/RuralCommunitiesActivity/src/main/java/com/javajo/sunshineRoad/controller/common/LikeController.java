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
import com.javajo.sunshineRoad.model.dto.common.likes.LikesDTO;
import com.javajo.sunshineRoad.model.service.IService.common.like.CheckIsLikeService;
import com.javajo.sunshineRoad.model.service.IService.common.like.DeleteLikeService;
import com.javajo.sunshineRoad.model.service.IService.common.like.GetAllLikeInfoByUserAndPostTypeService;
import com.javajo.sunshineRoad.model.service.IService.common.like.GetAllLikeInfoByUserService;
import com.javajo.sunshineRoad.model.service.IService.common.like.GetAllLikeInfoService;
import com.javajo.sunshineRoad.model.service.IService.common.like.PostLikeService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/like")
public class LikeController {
    private final CheckIsLikeService checkIsLikeService;
    private final GetAllLikeInfoService getAllLikeInfoService;
    private final GetAllLikeInfoByUserService getAllLikeInfoByUserService;
    private final GetAllLikeInfoByUserAndPostTypeService getAllLikeInfoByUserAndPostTypeService;
    private final PostLikeService postLikeService;
    private final DeleteLikeService deleteLikeService;

    @GetMapping("/list")
    public ResponseEntity<List<LikesDTO>> getAllLikeInfo() {
        List<LikesDTO> likesList = getAllLikeInfoService.getAllLikeInfo();
        return ResponseEntity.ok(likesList);
    }

    @GetMapping("/list/all/{uId}")
    public ResponseEntity<List<LikesDTO>> getAllLikeInfoByUserAndPostTypeService(@PathVariable int uId, @RequestParam int postTypeId) {
        if (postTypeId > 6 || postTypeId < 5) {
            return ResponseEntity.badRequest().build();
        }

        LikesDTO likes = LikesDTO.builder().uId(uId).postTypeId(postTypeId).build();
        List<LikesDTO> likesList = getAllLikeInfoByUserAndPostTypeService.getAllLikeInfoByUserAndPostType(likes);
        return ResponseEntity.ok(likesList);
    }

    @GetMapping("/list/user/{uId}")
    public ResponseEntity<List<LikesDTO>> getAllLikeInfoByUser(@PathVariable int uId) {
        List<LikesDTO> likesList = getAllLikeInfoByUserService.getAllLikeInfoByUser(uId);
        return ResponseEntity.ok(likesList);
    }

    /*{"uId":3, "boardId":16, "postTypeId":5}
{"uId":6, "boardId":20, "postTypeId":5}
{"uId":2, "boardId":17, "postTypeId":5}
{"uId":3, "boardId":31, "postTypeId":6}
{"uId":1, "boardId":33, "postTypeId":6}
{"uId":1, "boardId":40, "postTypeId":6}*/
    @PostMapping("/switch-status")
    public ResponseEntity<ResponseDTO> switchLikeStatus(@RequestBody LikesDTO likes) {
        boolean isLike = checkIsLikeService.checkIsLike(likes);

        if (isLike) {
            deleteLikeService.deleteLike(likes);

            boolean result = false;
            ResponseDTO response = ResponseDTO.builder().resultMsg("삭제").data(result).build();

            return ResponseEntity.ok(response);
        } else {
            postLikeService.postLike(likes);

            boolean result = true;
            ResponseDTO response = ResponseDTO.builder().resultMsg("등록").data(result).build();

            return ResponseEntity.ok(response);
        }
    }
}