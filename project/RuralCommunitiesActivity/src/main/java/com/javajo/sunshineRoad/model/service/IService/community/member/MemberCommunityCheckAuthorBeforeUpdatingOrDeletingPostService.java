package com.javajo.sunshineRoad.model.service.IService.community.member;

import com.javajo.sunshineRoad.model.dto.community.MemberCommunityPostDTO;

public interface MemberCommunityCheckAuthorBeforeUpdatingOrDeletingPostService {
    public boolean checkAuthorBeforeUpdatingOrDeletingPost(MemberCommunityPostDTO memberCommunityPost);
}