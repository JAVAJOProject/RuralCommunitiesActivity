package com.javajo.sunshineRoad.model.service.impl.community.seller;

import com.javajo.sunshineRoad.model.dao.community.SellerCommunityDAO;
import com.javajo.sunshineRoad.model.dto.community.SellerCommunityPostDTO;
import com.javajo.sunshineRoad.model.service.IService.community.seller.SellerCommunityCheckAuthorBeforeUpdatingOrDeletingPostService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SellerCommunityCheckAuthorBeforeUpdatingOrDeletingPostServiceImpl implements SellerCommunityCheckAuthorBeforeUpdatingOrDeletingPostService {
    private final SellerCommunityDAO sellerCommunityDAO;

    @Override
    public boolean checkAuthorBeforeUpdatingOrDeletingPost(SellerCommunityPostDTO sellerCommunityPost) {
        int resultCount = sellerCommunityDAO.checkAuthorBeforeUpdatingOrDeletingPost(sellerCommunityPost);

        return resultCount == 1;
    }
}