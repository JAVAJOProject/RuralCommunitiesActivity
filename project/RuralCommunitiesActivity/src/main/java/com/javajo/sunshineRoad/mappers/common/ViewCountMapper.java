package com.javajo.sunshineRoad.mappers.common;

import com.javajo.sunshineRoad.model.dto.common.view.ViewCountDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ViewCountMapper {
    public int getCurrentViewCount(ViewCountDTO viewCount);
    public void updateViewCount(ViewCountDTO viewCount);
}