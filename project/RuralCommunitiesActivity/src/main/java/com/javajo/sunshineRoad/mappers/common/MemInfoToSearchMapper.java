package com.javajo.sunshineRoad.mappers.common;

import com.javajo.sunshineRoad.model.dto.common.mem.MemInfoDTO;

import java.util.Map;

public interface MemInfoToSearchMapper {
    public int searchMemIdByUserId(Map<String, Object> params);
    public MemInfoDTO searchUserIdAndMemTypeByMemId(int memId);
}