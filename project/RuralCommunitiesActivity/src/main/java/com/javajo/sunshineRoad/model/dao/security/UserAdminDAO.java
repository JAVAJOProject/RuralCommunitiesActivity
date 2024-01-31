package com.javajo.sunshineRoad.model.dao.security;

import com.javajo.sunshineRoad.mappers.security.SignInAdminMapper;
import com.javajo.sunshineRoad.model.dto.security.UserAdminDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class UserAdminDAO {
    private final SqlSessionTemplate sqlSession;

    public UserAdminDTO findById(Long adminId) {
        SignInAdminMapper mapper = sqlSession.getMapper(SignInAdminMapper.class);
        return mapper.findByAdminId(adminId);
    }
    public UserAdminDTO findByEmail(String adminEmail) {
        SignInAdminMapper mapper = sqlSession.getMapper(SignInAdminMapper.class);
        return mapper.findByAdminEmail(adminEmail);
    }
    public UserAdminDTO findByRefreshToken(String refreshToken) {
        SignInAdminMapper mapper = sqlSession.getMapper(SignInAdminMapper.class);
        return mapper.findByAdminRefreshToken(refreshToken);
    }
    public int updateRefreshToken(UserAdminDTO admin) {
        SignInAdminMapper mapper = sqlSession.getMapper(SignInAdminMapper.class);
        return mapper.updateAdminRefreshToken(admin);
    }
}