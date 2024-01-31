package com.javajo.sunshineRoad.model.dao.security;

import com.javajo.sunshineRoad.mappers.security.SignUpAdminMapper;
import com.javajo.sunshineRoad.model.dto.security.UserAdminDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class SignUpAdminDAO {
    private final SqlSessionTemplate sqlSession;

    public int isExistingAdmin(String email) {
        SignUpAdminMapper mapper = sqlSession.getMapper(SignUpAdminMapper.class);
        return mapper.isExistingAdmin(email);
    }

    public int insertAdmin(UserAdminDTO adminDTO) {
        SignUpAdminMapper mapper = sqlSession.getMapper(SignUpAdminMapper.class);
        return mapper.insertAdmin(adminDTO);
    }
}