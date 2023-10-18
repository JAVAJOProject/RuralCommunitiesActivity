package com.javajo.sunshineRoad.model.service.impl.common.viewCount;

import com.javajo.sunshineRoad.model.dao.common.ViewCountDAO;
import com.javajo.sunshineRoad.model.dto.common.view.ViewCountDTO;
import com.javajo.sunshineRoad.model.service.IService.common.viewCount.UpdateViewCountService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UpdateViewCountServiceImpl implements UpdateViewCountService {
    private final ViewCountDAO viewCountDAO;

    @Override
    public void updateViewCount(int currViewCount, ViewCountDTO viewCount) {
        viewCount.setViewCount(currViewCount + 1);
        viewCountDAO.updateViewCount(viewCount);
    }
}