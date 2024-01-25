package com.javajo.sunshineRoad.model.service.impl.event;

import com.javajo.sunshineRoad.model.dao.event.EventDAO;
import com.javajo.sunshineRoad.model.dto.event.EventDTO;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;
import com.javajo.sunshineRoad.model.service.IService.event.GetRequestPageEventListService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GetRequestPageEventListServiceImpl implements GetRequestPageEventListService {
    private final EventDAO eventDAO;

    private final OffSetBasedPaginationUtils offSetBasedPaginationUtils;

    // Oracle
//    @Override
//    public List<EventDTO> getRequestPageEventList(int totalCount, int perPagePostCount, int requestPageNo) {
//        int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
//        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
//
//        return eventDAO.getRequestPageEventContent(startPostNo, endPostNo);
//    }

    // MySQL
    @Override
    public List<EventDTO> getRequestPageEventList(int totalCount, int perPagePostCount, int requestPageNo) {
        int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);

        return eventDAO.getRequestPageEventContent(startPostNo - 1, perPagePostCount);
    }
}