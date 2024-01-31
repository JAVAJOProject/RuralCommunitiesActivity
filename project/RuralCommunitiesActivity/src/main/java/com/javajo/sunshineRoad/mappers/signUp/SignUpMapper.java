package com.javajo.sunshineRoad.mappers.signUp;

import com.javajo.sunshineRoad.model.dto.signUp.BankListDTO;
import com.javajo.sunshineRoad.model.dto.signUp.SellerAccountInfoDTO;
import com.javajo.sunshineRoad.model.dto.signUp.SignUpMemberDTO;
import com.javajo.sunshineRoad.model.dto.signUp.SignUpSellerDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SignUpMapper {
	public int isMemberData(String email);
	public int insertMemberData(SignUpMemberDTO signUpMemberDTO);
	public int isSellerData(String email);
	public int insertAccountInfoData(SellerAccountInfoDTO sellerAccountInfo);
	public int getAccountInfoId();
	public int insertSellerData(SignUpSellerDTO signUpSellerDTO);

	public List<BankListDTO> getBankList();
}