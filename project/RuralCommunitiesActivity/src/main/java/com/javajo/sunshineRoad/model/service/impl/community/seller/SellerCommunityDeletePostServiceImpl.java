package com.javajo.sunshineRoad.model.service.impl.community.seller;

import com.javajo.sunshineRoad.model.dao.community.SellerCommunityDAO;
import com.javajo.sunshineRoad.model.service.IService.community.seller.SellerCommunityDeletePostService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SellerCommunityDeletePostServiceImpl implements SellerCommunityDeletePostService {
    private final SellerCommunityDAO sellerCommunityDAO;

    @Override
    public void deleteSellerCommunityPost(int sellerCommunityPostId) {
        sellerCommunityDAO.deleteSellerCommunityPost(sellerCommunityPostId);
    }
}