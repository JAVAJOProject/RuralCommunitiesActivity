package com.javajo.sunshineRoad.model.service.IService.common.memInfoToSearch;

import com.javajo.sunshineRoad.model.dto.common.mem.MemInfoDTO;

public interface SearchUserIdAndMemTypeByMemIdService {
    public MemInfoDTO searchUserIdAndMemTypeByMemId(long memId);
}