package com.javajo.sunshineRoad.model.service.impl.community.seller;

import com.javajo.sunshineRoad.model.dao.community.SellerCommunityDAO;
import com.javajo.sunshineRoad.model.dto.community.SellerCommunityPostDTO;
import com.javajo.sunshineRoad.model.service.IService.community.seller.SellerCommunityGetOneRequestPostService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SellerCommunityGetOneRequestPostServiceImpl implements SellerCommunityGetOneRequestPostService {
    private final SellerCommunityDAO sellerCommunityDAO;

    @Override
    public SellerCommunityPostDTO getOneRequestSellerCommunityPost(int postId) {
        return sellerCommunityDAO.getOneRequestSellerCommunityPost(postId);
    }
}