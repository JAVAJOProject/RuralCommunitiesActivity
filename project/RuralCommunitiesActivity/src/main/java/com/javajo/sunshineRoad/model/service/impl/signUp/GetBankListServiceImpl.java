package com.javajo.sunshineRoad.model.service.impl.signUp;

import com.javajo.sunshineRoad.model.dao.signUp.SignUpDAO;
import com.javajo.sunshineRoad.model.dto.signUp.BankListDTO;
import com.javajo.sunshineRoad.model.service.IService.signUp.GetBankListService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GetBankListServiceImpl implements GetBankListService {
    private final SignUpDAO signUpDAO;

    @Override
    public List<BankListDTO> getBankList() {
        return signUpDAO.getBankList();
    }
}