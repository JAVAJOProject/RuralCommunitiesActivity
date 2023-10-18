package com.javajo.sunshineRoad.model.service.impl.event;

import com.javajo.sunshineRoad.model.dao.event.EventDAO;
import com.javajo.sunshineRoad.model.dto.event.EventDTO;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;
import com.javajo.sunshineRoad.model.service.IService.event.GetRequestPageRecruitingEventListOnlyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GetRequestPageRecruitingEventListOnlyServiceImpl implements GetRequestPageRecruitingEventListOnlyService {
    private final EventDAO eventDAO;

    private final OffSetBasedPaginationUtils offSetBasedPaginationUtils;

    // Oracle
    @Override
    public List<EventDTO> getRequestPageRecruitingEventListOnly(int totalCount, int perPagePostCount, int requestPageNo) {
        int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);

        return eventDAO.getRequestPageRecruitingEventDataOnly(startPostNo, endPostNo);
    }

    // MySQL
//    @Override
//    public List<EventDTO> getRequestPageRecruitingEventListOnly(int totalCount, int perPagePostCount, int requestPageNo) {
//        int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
//
//        return eventDAO.getRequestPageRecruitingEventDataOnly(startPostNo - 1, perPagePostCount);
//    }
}