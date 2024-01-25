package com.javajo.sunshineRoad.model.dao.security;

import com.javajo.sunshineRoad.mappers.security.SignInMapper;
import com.javajo.sunshineRoad.model.dto.security.SocialType;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class UserDAO {
    private final SqlSessionTemplate sqlSession;

    public Optional<User> findByUId(Long uId) {
        SignInMapper mapper = sqlSession.getMapper(SignInMapper.class);
        return mapper.findByUId(uId);
    }
    public Optional<User> findByEmail(String email) {
        SignInMapper mapper = sqlSession.getMapper(SignInMapper.class);
        return mapper.findByEmail(email);
    }
    public Optional<User> findByRefreshToken(String refreshToken) {
        SignInMapper mapper = sqlSession.getMapper(SignInMapper.class);
        return mapper.findByRefreshToken(refreshToken);
    }
    public Optional<User> findBySocialTypeAndSocialId(SocialType socialType, String socialId) {
        SignInMapper mapper = sqlSession.getMapper(SignInMapper.class);
        return mapper.findBySocialTypeAndSocialId(socialType, socialId);
    }
}