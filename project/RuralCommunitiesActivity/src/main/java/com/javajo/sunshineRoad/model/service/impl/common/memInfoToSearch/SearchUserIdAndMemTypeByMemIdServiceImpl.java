package com.javajo.sunshineRoad.model.service.impl.common.memInfoToSearch;

import com.javajo.sunshineRoad.model.dao.common.MemInfoToSearchDAO;
import com.javajo.sunshineRoad.model.dto.common.mem.MemInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.common.memInfoToSearch.SearchUserIdAndMemTypeByMemIdService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SearchUserIdAndMemTypeByMemIdServiceImpl implements SearchUserIdAndMemTypeByMemIdService {
    private final MemInfoToSearchDAO memInfoToSearchDAO;

    @Override
    public MemInfoDTO searchUserIdAndMemTypeByMemId(int memId) {
        return memInfoToSearchDAO.searchUserIdAndMemTypeByMemId(memId);
    }
}