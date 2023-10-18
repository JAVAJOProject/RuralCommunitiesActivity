package com.javajo.sunshineRoad.model.service.IService.community.member;

import com.javajo.sunshineRoad.model.dto.community.MemberCommunityPostDTO;

import java.util.List;

public interface MemberCommunityGetRequestPostService {
    public List<MemberCommunityPostDTO> getRequestMemberCommunityPost(int postId, int perPagePostCount);
}