package com.javajo.sunshineRoad.model.service.IService.common.viewCount;

import com.javajo.sunshineRoad.model.dto.common.view.ViewCountDTO;

public interface UpdateViewCountService {
    public void updateViewCount(int currViewCount, ViewCountDTO viewCount);
}