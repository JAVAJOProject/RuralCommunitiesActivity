package com.javajo.sunshineRoad.mappers.security;

import com.javajo.sunshineRoad.model.dto.signUp.BankListDTO;
import com.javajo.sunshineRoad.model.dto.signUp.SellerAccountInfoDTO;
import com.javajo.sunshineRoad.model.dto.signUp.SignUpMemberDTO;
import com.javajo.sunshineRoad.model.dto.signUp.SignUpSellerDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SignUpMapper {
	public int isMemberData(String email);
	public void insertMemberData(SignUpMemberDTO signUpMemberDTO);
	public int isSellerData(String email);
	public void insertAccountInfoData(SellerAccountInfoDTO sellerAccountInfo);
	public int getAccountInfoId();
	public void insertSellerData(SignUpSellerDTO signUpSellerDTO);

	public List<BankListDTO> getBankList();
}