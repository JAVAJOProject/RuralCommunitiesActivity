package com.javajo.sunshineRoad.model.service.impl.common.postReport;

import com.javajo.sunshineRoad.model.dao.common.PostReportDAO;
import com.javajo.sunshineRoad.model.dto.common.report.PostReportDTO;
import com.javajo.sunshineRoad.model.service.IService.common.postReport.UpdateReportedCountService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UpdateReportedCountServiceImpl implements UpdateReportedCountService {
    private final PostReportDAO postReportDAO;

    @Override
    public void updateReportedCount(PostReportDTO postReport) {
        postReportDAO.updateReportedCount(postReport);
    }
}