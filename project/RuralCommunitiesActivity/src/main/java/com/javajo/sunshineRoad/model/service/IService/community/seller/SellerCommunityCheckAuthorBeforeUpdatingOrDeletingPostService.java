package com.javajo.sunshineRoad.model.service.IService.community.seller;

import com.javajo.sunshineRoad.model.dto.community.SellerCommunityPostDTO;

public interface SellerCommunityCheckAuthorBeforeUpdatingOrDeletingPostService {
    public boolean checkAuthorBeforeUpdatingOrDeletingPost(SellerCommunityPostDTO sellerCommunityPost);
}