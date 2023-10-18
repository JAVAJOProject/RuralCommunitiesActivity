package com.javajo.sunshineRoad.model.service.impl.mainPage;

import com.javajo.sunshineRoad.model.dao.mainPage.MainPageDAO;
import com.javajo.sunshineRoad.model.dto.mainPage.MainPageTotalActivityInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.mainPage.GetTotalActivityService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GetTotalActivityServiceImpl implements GetTotalActivityService {
    private final MainPageDAO mainPageDAO;

    @Override
    public List<MainPageTotalActivityInfoDTO> getMainTotalActivityData() {
        return mainPageDAO.getMainTotalActivityData();
    }
}