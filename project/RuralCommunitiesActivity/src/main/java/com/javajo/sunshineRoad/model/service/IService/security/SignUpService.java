package com.javajo.sunshineRoad.model.service.IService.security;

import com.javajo.sunshineRoad.model.dto.security.UserAdminDTO;
import com.javajo.sunshineRoad.model.dto.security.UserMemberDTO;
import com.javajo.sunshineRoad.model.dto.security.UserSellerDTO;
import com.javajo.sunshineRoad.model.dto.signUp.SellerAccountInfoDTO;

public interface SignUpService {
    public void signUp(UserMemberDTO memberDTO) throws Exception;
    public void signUp(UserSellerDTO sellerDTO, SellerAccountInfoDTO accountInfoDTO) throws Exception;
    public void signUp(UserAdminDTO adminDTO) throws Exception;
}