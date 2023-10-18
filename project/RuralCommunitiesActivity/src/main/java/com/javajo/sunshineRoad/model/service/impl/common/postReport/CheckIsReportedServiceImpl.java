package com.javajo.sunshineRoad.model.service.impl.common.postReport;

import com.javajo.sunshineRoad.model.dao.common.PostReportDAO;
import com.javajo.sunshineRoad.model.service.IService.common.postReport.CheckIsReportedService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CheckIsReportedServiceImpl implements CheckIsReportedService {
    private final PostReportDAO postReportDAO;

    @Override
    public boolean checkIsReported(int boardId) {
        int resultCount = postReportDAO.checkIsReported(boardId);
        return resultCount > 0;
    }
}