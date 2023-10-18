package com.javajo.sunshineRoad.model.service.impl.community.seller;

import com.javajo.sunshineRoad.model.dao.community.SellerCommunityDAO;
import com.javajo.sunshineRoad.model.dto.community.SellerCommunityPostDTO;
import com.javajo.sunshineRoad.model.service.IService.community.seller.SellerCommunityUpdatePostService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SellerCommunityUpdatePostServiceImpl implements SellerCommunityUpdatePostService {
    private final SellerCommunityDAO sellerCommunityDAO;

    @Override
    public void updateSellerCommunityPost(SellerCommunityPostDTO sellerCommunityPost) {
        sellerCommunityDAO.updateSellerCommunityPost(sellerCommunityPost);
    }
}