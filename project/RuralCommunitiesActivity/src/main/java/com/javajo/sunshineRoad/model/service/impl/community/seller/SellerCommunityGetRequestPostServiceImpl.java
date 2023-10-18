package com.javajo.sunshineRoad.model.service.impl.community.seller;

import com.javajo.sunshineRoad.model.dao.community.SellerCommunityDAO;
import com.javajo.sunshineRoad.model.dto.community.SellerCommunityPostDTO;
import com.javajo.sunshineRoad.model.service.IService.community.seller.SellerCommunityGetRequestPostService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SellerCommunityGetRequestPostServiceImpl implements SellerCommunityGetRequestPostService {
    private final SellerCommunityDAO sellerCommunityDAO;

    @Override
    public List<SellerCommunityPostDTO> getRequestSellerCommunityPost(int postId, int perPagePostCount) {
        return sellerCommunityDAO.getRequestSellerCommunityPost(postId, perPagePostCount);
    }
}