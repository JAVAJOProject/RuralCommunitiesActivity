package com.javajo.sunshineRoad.model.service.impl.common.memInfoToSearch;

import com.javajo.sunshineRoad.model.dao.common.MemInfoToSearchDAO;
import com.javajo.sunshineRoad.model.dto.common.mem.MemInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.common.memInfoToSearch.SearchMemIdByUserIdService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SearchMemIdByUserIdServiceImpl implements SearchMemIdByUserIdService {
    private final MemInfoToSearchDAO memInfoToSearchDAO;

    @Override
    public int searchMemIdByUserId(int memTypeId, int userId) {
        MemInfoDTO memInfo = MemInfoDTO.builder().memTypeId(memTypeId).build();
        memInfo.setMemIdCol(memTypeId);

        return memInfoToSearchDAO.searchMemIdByUserId(memInfo, userId);
    }
}