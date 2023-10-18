package com.javajo.sunshineRoad.model.service.impl.signUp;

import com.javajo.sunshineRoad.model.dao.signUp.SignUpDAO;
import com.javajo.sunshineRoad.model.dto.signUp.SignUpSellerDTO;
import com.javajo.sunshineRoad.model.service.IService.signUp.RegisterSellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RegisterSellerServiceImpl implements RegisterSellerService {
    private final SignUpDAO signUpDAO;

    @Override
    public void registerSeller(SignUpSellerDTO signUpSeller) {
        signUpDAO.insertSeller(signUpSeller);
    }
}