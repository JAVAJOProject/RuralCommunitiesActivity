package com.javajo.sunshineRoad.mappers.common;

import com.javajo.sunshineRoad.model.dto.common.report.PostReportDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface PostReportMapper {
    public int checkIsReported(int boardId);
    public int getCurrentReportedCount(int boardId);
    public void postReportPost(int boardId);
    public void updateReportedCount(PostReportDTO postReport);
}