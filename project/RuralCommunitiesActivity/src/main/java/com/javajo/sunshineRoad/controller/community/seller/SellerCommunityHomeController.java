package com.javajo.sunshineRoad.controller.community.seller;

import com.javajo.sunshineRoad.model.dto.common.ResponseDTO;
import com.javajo.sunshineRoad.model.dto.community.SellerCommunityPostDTO;
import com.javajo.sunshineRoad.model.service.IService.community.seller.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/community/seller")
@RequiredArgsConstructor
public class SellerCommunityHomeController {
    private final SellerCommunityGetRequestPostService sellerCommunityGetRequestPostService;
    private final SellerCommunityGetOneRequestPostService sellerCommunityGetOneRequestPostService;
    private final SellerCommunityPostRequestPostService sellerCommunityPostRequestPostService;
    private final SellerCommunityUpdatePostService sellerCommunityUpdatePostService;
    private final SellerCommunityCheckAuthorBeforeUpdatingOrDeletingPostService sellerCommunityCheckAuthorBeforeUpdatingOrDeletingPostService;
    private final SellerCommunityDeletePostService sellerCommunityDeletePostService;

    @GetMapping("/post-list/{boardType}/{pos}")
    public ResponseEntity<List<SellerCommunityPostDTO>> getRequestSellerCommunityPost(@PathVariable String boardType, @PathVariable int pos) {
        int perPagePostCount;
        if (boardType.equals("card")) {
            perPagePostCount = 12;
        } else if (boardType.equals("list")) {
            perPagePostCount = 15;
        } else {
            return ResponseEntity.badRequest().build();
        }

        List<SellerCommunityPostDTO> postList = sellerCommunityGetRequestPostService.getRequestSellerCommunityPost(pos, perPagePostCount);
        return ResponseEntity.ok(postList);
    }

    @GetMapping("/post-detail/{postId}")
    public ResponseEntity<SellerCommunityPostDTO> getOneRequestSellerCommunityPost(@PathVariable int postId) {
        SellerCommunityPostDTO post = sellerCommunityGetOneRequestPostService.getOneRequestSellerCommunityPost(postId);
        return ResponseEntity.ok(post);
    }

//    테스트용
//    { "sId": 3, "sellerCommunityContent": "엥 되나" }
    @PostMapping("/post/upload")
    public ResponseEntity<ResponseDTO> postRequestSellerCommunityPost(@RequestBody SellerCommunityPostDTO sellerCommunityPostDTO) {
        sellerCommunityPostRequestPostService.postRequestSellerCommunityPost(sellerCommunityPostDTO);
        ResponseDTO response = ResponseDTO.builder().resultMsg("등록 성공").build();
        return ResponseEntity.ok(response);
    }

    // { "sId": 3, "sellerCommunityContent": "음 업데이트 확인쓰", "sellerCommunityPostId": 1 }
    // { "sId": 3, "sellerCommunityContent": "음 업데이트 확인쓰", "sellerCommunityPostId": 9 }
    @PatchMapping(value = "/post/update", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResponseDTO> updateRequestSellerCommunityPost(@RequestBody SellerCommunityPostDTO sellerCommunityPost) {
        boolean isValidUser = sellerCommunityCheckAuthorBeforeUpdatingOrDeletingPostService.checkAuthorBeforeUpdatingOrDeletingPost(sellerCommunityPost);

        if (!isValidUser) {
            ResponseDTO response = ResponseDTO.builder().errorMsg("수정 권한 없음").build();
            return ResponseEntity.badRequest().body(response);
        }

        sellerCommunityUpdatePostService.updateSellerCommunityPost(sellerCommunityPost);
        ResponseDTO response = ResponseDTO.builder().resultMsg("수정 성공").build();
        return ResponseEntity.ok(response);
    }

    // { "sId": 3, "sellerCommunityPostId": 1 }
    // { "sId": 3, "sellerCommunityPostId": 20 }
    @DeleteMapping("/post/delete")
    public ResponseEntity<ResponseDTO> deleteRequestSellerCommunityPost(@RequestBody SellerCommunityPostDTO sellerCommunityPost) {
        boolean isValidUser = sellerCommunityCheckAuthorBeforeUpdatingOrDeletingPostService.checkAuthorBeforeUpdatingOrDeletingPost(sellerCommunityPost);

        if (!isValidUser) {
            ResponseDTO response = ResponseDTO.builder().errorMsg("삭제 권한 없음").build();
            return ResponseEntity.badRequest().body(response);
        }

        sellerCommunityDeletePostService.deleteSellerCommunityPost(sellerCommunityPost.getSellerCommunityPostId());
        ResponseDTO response = ResponseDTO.builder().resultMsg("삭제 성공").build();
        return ResponseEntity.ok(response);
    }
}