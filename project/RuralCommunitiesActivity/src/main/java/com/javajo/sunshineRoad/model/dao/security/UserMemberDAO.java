package com.javajo.sunshineRoad.model.dao.security;

import com.javajo.sunshineRoad.mappers.security.SignInMemberMapper;
import com.javajo.sunshineRoad.model.dto.security.SocialType;
import com.javajo.sunshineRoad.model.dto.security.UserMemberDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class UserMemberDAO {
    private final SqlSessionTemplate sqlSession;

    public UserMemberDTO findById(Long uId) {
        SignInMemberMapper mapper = sqlSession.getMapper(SignInMemberMapper.class);
        return mapper.findByMemberId(uId);
    }
    public UserMemberDTO findByEmail(String uEmail) {
        SignInMemberMapper mapper = sqlSession.getMapper(SignInMemberMapper.class);
        return mapper.findByMemberEmail(uEmail);
    }
    public UserMemberDTO findByRefreshToken(String refreshToken) {
        SignInMemberMapper mapper = sqlSession.getMapper(SignInMemberMapper.class);
        return mapper.findByMemberRefreshToken(refreshToken);
    }
    public UserMemberDTO findBySocialTypeAndSocialEmail(SocialType socialType, String socialEmail) {
        SignInMemberMapper mapper = sqlSession.getMapper(SignInMemberMapper.class);

        UserMemberDTO member = UserMemberDTO.builder()
                .socialType(socialType)
                .socialEmail(socialEmail)
                .build();

        return mapper.findBySocialTypeAndSocialEmail(member);
    }
    public int updateRefreshToken(UserMemberDTO member) {
        SignInMemberMapper mapper = sqlSession.getMapper(SignInMemberMapper.class);
        return mapper.updateMemberRefreshToken(member);
    }
}