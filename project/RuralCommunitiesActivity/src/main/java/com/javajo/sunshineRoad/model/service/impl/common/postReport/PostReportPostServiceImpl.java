package com.javajo.sunshineRoad.model.service.impl.common.postReport;

import com.javajo.sunshineRoad.model.dao.common.PostReportDAO;
import com.javajo.sunshineRoad.model.service.IService.common.postReport.PostReportPostService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostReportPostServiceImpl implements PostReportPostService {
    private final PostReportDAO postReportDAO;

    @Override
    public void postReportPost(int boardId) {
        postReportDAO.postReportPost(boardId);
    }
}