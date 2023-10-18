package com.javajo.sunshineRoad.model.service.impl.signUp;

import com.javajo.sunshineRoad.model.dao.signUp.SignUpDAO;
import com.javajo.sunshineRoad.model.dto.signUp.SellerAccountInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.signUp.RegisterSellerAccountInfoService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RegisterSellerAccountInfoServiceImpl implements RegisterSellerAccountInfoService {
    private final SignUpDAO signUpDAO;

    @Override
    public int registerSellerAccountInfo(SellerAccountInfoDTO sellerAccountInfo) {
        signUpDAO.insertAccountInfo(sellerAccountInfo);
        return signUpDAO.getAccountInfoId();
    }
}