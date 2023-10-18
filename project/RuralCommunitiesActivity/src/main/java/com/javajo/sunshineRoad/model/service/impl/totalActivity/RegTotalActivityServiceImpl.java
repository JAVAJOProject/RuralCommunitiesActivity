package com.javajo.sunshineRoad.model.service.impl.totalActivity;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.javajo.sunshineRoad.model.dao.totalActivity.RegTotalActivityContentDAO;
import com.javajo.sunshineRoad.model.dto.totalActivity.TotalActivityContentDTO;
import com.javajo.sunshineRoad.model.service.IService.totalActivity.RegTotalActivityService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RegTotalActivityServiceImpl implements RegTotalActivityService {

    private final RegTotalActivityContentDAO regTotalActivityContentDAO;
    
    @Override
    public List<TotalActivityContentDTO> getTotalList() {
        return regTotalActivityContentDAO.getRegTotalList();
    }
    @Override
    @Transactional
    public int addTotalActivityContent(TotalActivityContentDTO totalActivityContentDTO) {
    	int success = 0;

        success += regTotalActivityContentDAO.insertTotalActivityInfo(totalActivityContentDTO);
        success += regTotalActivityContentDAO.insertTotalActivityPost(totalActivityContentDTO);
        
        if (success < 2) {
        	
        	return success;//갯수반환
        }
        return success;
    }

    @Override
    @Transactional
    public int updateTotalActivity(TotalActivityContentDTO totalActivityContentDTO) {
        int success = 0;

        success += regTotalActivityContentDAO.updateTotalActivityInfo(totalActivityContentDTO);
        success += regTotalActivityContentDAO.updateTotalActivityPost(totalActivityContentDTO);
        success += regTotalActivityContentDAO.updateTotalActivityImages(totalActivityContentDTO);

        if (success==0) {
        	return success;//0이면 오류
        }
        return success;//1이상이면 ok
    }
    
    @Override
    @Transactional
    public int deleteTotalActivity(int aImgId) {
    	int success = 0;
    	success += regTotalActivityContentDAO.deleteTotalActivityInfo(aImgId);
        success += regTotalActivityContentDAO.deleteTotalActivityPost(aImgId);
        success += regTotalActivityContentDAO.deleteActivityImages(aImgId);
        System.out.println(success);
        if (success != 3) {
            return 0;
        }
        return success;
    }
}