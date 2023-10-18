package com.javajo.sunshineRoad.model.service.impl.signUp;

import com.javajo.sunshineRoad.model.dao.signUp.SignUpDAO;
import com.javajo.sunshineRoad.model.service.IService.signUp.CheckIsSellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CheckIsSellerServiceImpl implements CheckIsSellerService {
    private final SignUpDAO signUpDAO;

    @Override
    public boolean isSeller(String email) {
        return signUpDAO.isSeller(email) != 0;
    }
}