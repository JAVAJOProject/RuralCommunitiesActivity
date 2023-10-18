package com.javajo.sunshineRoad.model.service.impl.community.seller;

import com.javajo.sunshineRoad.model.dao.community.SellerCommunityDAO;
import com.javajo.sunshineRoad.model.dto.community.SellerCommunityPostDTO;
import com.javajo.sunshineRoad.model.service.IService.community.seller.SellerCommunityPostRequestPostService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SellerCommunityPostRequestPostServiceImpl implements SellerCommunityPostRequestPostService {
    private final SellerCommunityDAO sellerCommunityDAO;

    @Override
    public void postRequestSellerCommunityPost(SellerCommunityPostDTO sellerCommunityPost) {
        sellerCommunityDAO.postRequestSellerCommunityPost(sellerCommunityPost);
    }
}