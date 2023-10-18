package com.javajo.sunshineRoad.model.service.IService.common.viewCount;

import com.javajo.sunshineRoad.model.dto.common.view.ViewCountDTO;

public interface GetCurrentViewCountService {
    public int getCurrentViewCount(ViewCountDTO viewCount);
}