package com.javajo.sunshineRoad.model.dao.security;

import com.javajo.sunshineRoad.mappers.security.SignInSellerMapper;
import com.javajo.sunshineRoad.model.dto.security.UserSellerDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class UserSellerDAO {
    private final SqlSessionTemplate sqlSession;

    public UserSellerDTO findByUId(Long sId) {
        SignInSellerMapper mapper = sqlSession.getMapper(SignInSellerMapper.class);
        return mapper.findBySellerId(sId);
    }
    public UserSellerDTO findByEmail(String sEmail) {
        SignInSellerMapper mapper = sqlSession.getMapper(SignInSellerMapper.class);
        return mapper.findBySellerEmail(sEmail);
    }
    public UserSellerDTO findByRefreshToken(String refreshToken) {
        SignInSellerMapper mapper = sqlSession.getMapper(SignInSellerMapper.class);
        return mapper.findBySellerRefreshToken(refreshToken);
    }
    public int updateRefreshToken(UserSellerDTO seller) {
        SignInSellerMapper mapper = sqlSession.getMapper(SignInSellerMapper.class);
        return mapper.updateSellerRefreshToken(seller);
    }
}