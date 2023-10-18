package com.javajo.sunshineRoad.model.service.IService.community.seller;

import com.javajo.sunshineRoad.model.dto.community.SellerCommunityPostDTO;

import java.util.List;

public interface SellerCommunityGetRequestPostService {
    public List<SellerCommunityPostDTO> getRequestSellerCommunityPost(int postId, int perPagePostCount);
}