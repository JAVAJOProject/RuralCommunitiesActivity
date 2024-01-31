package com.javajo.sunshineRoad.mappers.security;

import com.javajo.sunshineRoad.model.dto.security.UserSellerDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SignInSellerMapper {
    public UserSellerDTO findBySellerId(Long sId);
    public UserSellerDTO findBySellerEmail(String sEmail);
    public UserSellerDTO findBySellerRefreshToken(String refreshToken);
    public int updateSellerRefreshToken(UserSellerDTO seller);
}