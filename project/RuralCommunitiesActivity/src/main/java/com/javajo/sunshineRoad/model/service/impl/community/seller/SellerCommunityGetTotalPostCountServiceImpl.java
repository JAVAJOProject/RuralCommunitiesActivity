package com.javajo.sunshineRoad.model.service.impl.community.seller;

import com.javajo.sunshineRoad.model.dao.community.SellerCommunityDAO;
import com.javajo.sunshineRoad.model.service.IService.community.seller.SellerCommunityGetTotalPostCountService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SellerCommunityGetTotalPostCountServiceImpl implements SellerCommunityGetTotalPostCountService {
    private final SellerCommunityDAO sellerCommunityDAO;

    @Override
    public int getTotalSellerCommunityPostCount() {
        return sellerCommunityDAO.getTotalSellerCommunityPostCount();
    }
}