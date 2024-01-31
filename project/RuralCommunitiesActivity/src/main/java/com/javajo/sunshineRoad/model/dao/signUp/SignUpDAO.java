package com.javajo.sunshineRoad.model.dao.signUp;

import com.javajo.sunshineRoad.mappers.signUp.SignUpMapper;
import com.javajo.sunshineRoad.model.dto.signUp.BankListDTO;
import com.javajo.sunshineRoad.model.dto.signUp.SellerAccountInfoDTO;
import com.javajo.sunshineRoad.model.dto.signUp.SignUpMemberDTO;
import com.javajo.sunshineRoad.model.dto.signUp.SignUpSellerDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class SignUpDAO {
    private final SqlSessionTemplate sqlSession;

    public int isMember(String email) {
    	SignUpMapper mapper = sqlSession.getMapper(SignUpMapper.class);
        return mapper.isMemberData(email);
    }

    public int insertMember(SignUpMemberDTO signUpMemberDTO) {
    	SignUpMapper mapper = sqlSession.getMapper(SignUpMapper.class);
    	return mapper.insertMemberData(signUpMemberDTO);
    }

    public int isSeller(String email) {
    	SignUpMapper mapper = sqlSession.getMapper(SignUpMapper.class);
        return mapper.isSellerData(email);
    }

    public int insertAccountInfo(SellerAccountInfoDTO sellerAccountInfo) {
        SignUpMapper mapper = sqlSession.getMapper(SignUpMapper.class);
        return mapper.insertAccountInfoData(sellerAccountInfo);
    }

    public int getAccountInfoId() {
        SignUpMapper mapper = sqlSession.getMapper(SignUpMapper.class);
        return mapper.getAccountInfoId();
    }

    public int insertSeller(SignUpSellerDTO signUpSellerDTO) {
    	SignUpMapper mapper = sqlSession.getMapper(SignUpMapper.class);
    	return mapper.insertSellerData(signUpSellerDTO);
    }


    public List<BankListDTO> getBankList() {
        SignUpMapper mapper = sqlSession.getMapper(SignUpMapper.class);
        return mapper.getBankList();
    }
}