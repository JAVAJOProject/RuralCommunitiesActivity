package com.javajo.sunshineRoad.model.service.IService.signUp;

import com.javajo.sunshineRoad.model.dto.signUp.BankListDTO;

import java.util.List;

public interface GetBankListService {
    public List<BankListDTO> getBankList();
}