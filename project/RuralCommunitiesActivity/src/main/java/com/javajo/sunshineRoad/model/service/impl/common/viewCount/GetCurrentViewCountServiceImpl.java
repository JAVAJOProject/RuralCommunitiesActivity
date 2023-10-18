package com.javajo.sunshineRoad.model.service.impl.common.viewCount;

import com.javajo.sunshineRoad.model.dao.common.ViewCountDAO;
import com.javajo.sunshineRoad.model.dto.common.view.ViewCountDTO;
import com.javajo.sunshineRoad.model.service.IService.common.viewCount.GetCurrentViewCountService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GetCurrentViewCountServiceImpl implements GetCurrentViewCountService {
    private final ViewCountDAO viewCountDAO;

    @Override
    public int getCurrentViewCount(ViewCountDTO viewCount) {
        return viewCountDAO.getCurrentViewCount(viewCount);
    }
}