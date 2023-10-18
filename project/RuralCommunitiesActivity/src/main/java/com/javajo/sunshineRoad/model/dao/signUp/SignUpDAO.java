package com.javajo.sunshineRoad.model.dao.signUp;

import com.javajo.sunshineRoad.model.dto.signUp.SellerAccountInfoDTO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.SignUpMapper;
import com.javajo.sunshineRoad.model.dto.signUp.SignUpMemberDTO;
import com.javajo.sunshineRoad.model.dto.signUp.SignUpSellerDTO;
import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class SignUpDAO {
    private final SqlSessionTemplate sqlSession;

    public int isMember(String email) {
    	SignUpMapper mapper = sqlSession.getMapper(SignUpMapper.class);
        return mapper.isMemberData(email);
    }

    public void insertMember(SignUpMemberDTO signUpMemberDTO) {
    	SignUpMapper mapper = sqlSession.getMapper(SignUpMapper.class);
    	mapper.insertMemberData(signUpMemberDTO);
    }

    public int isSeller(String email) {
    	SignUpMapper mapper = sqlSession.getMapper(SignUpMapper.class);
        return mapper.isSellerData(email);
    }

    public void insertAccountInfo(SellerAccountInfoDTO sellerAccountInfo) {
        SignUpMapper mapper = sqlSession.getMapper(SignUpMapper.class);
        mapper.insertAccountInfoData(sellerAccountInfo);
    }

    public int getAccountInfoId() {
        SignUpMapper mapper = sqlSession.getMapper(SignUpMapper.class);
        return mapper.getAccountInfoId();
    }

    public void insertSeller(SignUpSellerDTO signUpSellerDTO) {
    	SignUpMapper mapper = sqlSession.getMapper(SignUpMapper.class);
    	mapper.insertSellerData(signUpSellerDTO);

    }
}