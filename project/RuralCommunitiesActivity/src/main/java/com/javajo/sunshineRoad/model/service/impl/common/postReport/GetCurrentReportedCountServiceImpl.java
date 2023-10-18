package com.javajo.sunshineRoad.model.service.impl.common.postReport;

import com.javajo.sunshineRoad.model.dao.common.PostReportDAO;
import com.javajo.sunshineRoad.model.service.IService.common.postReport.GetCurrentReportedCountService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GetCurrentReportedCountServiceImpl implements GetCurrentReportedCountService {
    private final PostReportDAO postReportDAO;

    @Override
    public int getCurrentReportedCount(int boardId) {
        return postReportDAO.getCurrentReportedCount(boardId);
    }
}