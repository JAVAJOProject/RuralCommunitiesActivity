package com.javajo.sunshineRoad.mappers.security;

import com.javajo.sunshineRoad.model.dto.security.UserMemberDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SignInMemberMapper {
    public UserMemberDTO findByMemberId(Long uId);
    public UserMemberDTO findByMemberEmail(String uEmail);
    public UserMemberDTO findByMemberRefreshToken(String refreshToken);
//    public UserMemberDTO findBySocialTypeAndSocialEmail(SocialType socialType, String socialEmail);
    public UserMemberDTO findBySocialTypeAndSocialEmail(UserMemberDTO member);
    public int updateMemberRefreshToken(UserMemberDTO member);
}