package com.javajo.sunshineRoad.controller.community.member;

import com.javajo.sunshineRoad.model.dto.common.ResponseDTO;
import com.javajo.sunshineRoad.model.dto.community.MemberCommunityPostDTO;
import com.javajo.sunshineRoad.model.service.IService.community.member.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/community/member")
@RequiredArgsConstructor
public class MemberCommunityHomeController {
    private final MemberCommunityGetRequestPostService memberCommunityGetRequestPostService;
    private final MemberCommunityGetTotalPostCountService memberCommunityGetTotalPostCountService;
    private final MemberCommunityGetOneRequestPostService memberCommunityGetOneRequestPostService;
    private final MemberCommunityPostRequestPostService memberCommunityPostRequestPostService;
    private final MemberCommunityUpdatePostService memberCommunityUpdatePostService;
    private final MemberCommunityCheckAuthorBeforeUpdatingOrDeletingPostService memberCommunityCheckAuthorBeforeUpdatingOrDeletingPostService;
    private final MemberCommunityDeletePostService memberCommunityDeletePostService;

    @GetMapping("/post-list/{boardType}/{pos}")
    public ResponseEntity<List<MemberCommunityPostDTO>> getRequestMemberCommunityPost(@PathVariable String boardType, @PathVariable int pos) {
        int perPagePostCount;
        if (boardType.equals("card")) {
            perPagePostCount = 10;
        } else if (boardType.equals("list")) {
            perPagePostCount = 15;
        } else {
            return ResponseEntity.badRequest().build();
        }

        List<MemberCommunityPostDTO> postList = memberCommunityGetRequestPostService.getRequestMemberCommunityPost(pos, perPagePostCount);
        return ResponseEntity.ok(postList);
    }
    @GetMapping("/post-list/total-count/{boardType}")
    public ResponseEntity<List<Integer>> communityPostTotalCount(@PathVariable String boardType) {
        int perPagePostCount;
        if (boardType.equals("card")) {
            perPagePostCount = 10;
        } else if (boardType.equals("list")) {
            perPagePostCount = 15;
        } else {
            return ResponseEntity.badRequest().build();
        }
        int totalCount = memberCommunityGetTotalPostCountService.getTotalMemberCommunityPostCount();

        List<Integer> result = new ArrayList<Integer>(Arrays.asList(perPagePostCount, totalCount));
        return ResponseEntity.ok(result);
    }

    @GetMapping("/post-detail/{postId}")
    public ResponseEntity<MemberCommunityPostDTO> getOneRequestMemberCommunityPost(@PathVariable int postId) {
        MemberCommunityPostDTO post = memberCommunityGetOneRequestPostService.getOneRequestMemberCommunityPost(postId);
        return ResponseEntity.ok(post);
    }

    //    테스트용
//    { "uId": 3, "uCommunityImgId": 2, "uCommunityContent": "엥 되나" }
    @PostMapping("/post/upload")
    public ResponseEntity<ResponseDTO> postRequestMemberCommunityPost(@RequestBody MemberCommunityPostDTO memberCommunityPostDTO) {
        memberCommunityPostRequestPostService.postRequestMemberCommunityPost(memberCommunityPostDTO);
        ResponseDTO response = ResponseDTO.builder().resultMsg("등록 성공").build();
        return ResponseEntity.ok(response);
    }

    // { "uId": 3, "uCommunityImgId": 7, "uCommunityContent": "음 업데이트 확인쓰", "uCommunityPostId": 1 }
    // { "uId": 3, "uCommunityImgId": 7, "uCommunityContent": "음 업데이트 확인쓰", "uCommunityPostId": 9 }
    @PatchMapping(value = "/post/update", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResponseDTO> updateRequestMemberCommunityPost(@RequestBody MemberCommunityPostDTO memberCommunityPost) {
        boolean isValidUser = memberCommunityCheckAuthorBeforeUpdatingOrDeletingPostService.checkAuthorBeforeUpdatingOrDeletingPost(memberCommunityPost);

        if (!isValidUser) {
            ResponseDTO response = ResponseDTO.builder().errorMsg("수정 권한 없음").build();
            return ResponseEntity.badRequest().body(response);
        }

        memberCommunityUpdatePostService.updateMemberCommunityPost(memberCommunityPost);
        ResponseDTO response = ResponseDTO.builder().resultMsg("수정 성공").build();
        return ResponseEntity.ok(response);
    }

    // { "uId": 3, "uCommunityPostId": 1 }
    // { "uId": 3, "uCommunityPostId": 20 }
    @DeleteMapping("/post/delete/{uCommunityPostId}")
    public ResponseEntity<ResponseDTO> deleteRequestMemberCommunityPost(@PathVariable int uCommunityPostId) {
        int uId = 3;
        MemberCommunityPostDTO memberCommunityPost = MemberCommunityPostDTO.builder().uId(uId).uCommunityPostId(uCommunityPostId).build();

        boolean isValidUser = memberCommunityCheckAuthorBeforeUpdatingOrDeletingPostService.checkAuthorBeforeUpdatingOrDeletingPost(memberCommunityPost);

        if (!isValidUser) {
            ResponseDTO response = ResponseDTO.builder().errorMsg("삭제 권한 없음").build();
            return ResponseEntity.badRequest().body(response);
        }

        memberCommunityDeletePostService.deleteMemberCommunityPost(memberCommunityPost.getUCommunityPostId());
        ResponseDTO response = ResponseDTO.builder().resultMsg("삭제 성공").build();
        return ResponseEntity.ok(response);
    }
}