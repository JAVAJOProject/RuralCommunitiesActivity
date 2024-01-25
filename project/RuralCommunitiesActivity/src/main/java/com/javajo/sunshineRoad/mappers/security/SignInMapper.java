package com.javajo.sunshineRoad.mappers.security;

import com.javajo.sunshineRoad.model.dto.security.SocialType;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.security.core.userdetails.User;

import java.util.Optional;

@Mapper
public interface SignInMapper {
    public Optional<User> findByUId(Long uId);
    public Optional<User> findByEmail(String email);
    public Optional<User> findByRefreshToken(String refreshToken);
    public Optional<User> findBySocialTypeAndSocialId(SocialType socialType, String socialId);
}