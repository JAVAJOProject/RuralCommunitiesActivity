package com.javajo.sunshineRoad.mappers;

import com.javajo.sunshineRoad.model.dto.signUp.SellerAccountInfoDTO;
import com.javajo.sunshineRoad.model.dto.signUp.SignUpMemberDTO;
import com.javajo.sunshineRoad.model.dto.signUp.SignUpSellerDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SignUpMapper {
	public int isMemberData(String email);
	public void insertMemberData(SignUpMemberDTO signUpMemberDTO);
	public int isSellerData(String email);
	public void insertAccountInfoData(SellerAccountInfoDTO sellerAccountInfo);
	public int getAccountInfoId();
	public void insertSellerData(SignUpSellerDTO signUpSellerDTO);
}