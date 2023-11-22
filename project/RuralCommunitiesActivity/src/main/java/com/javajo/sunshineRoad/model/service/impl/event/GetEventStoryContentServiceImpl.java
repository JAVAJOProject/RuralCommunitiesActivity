package com.javajo.sunshineRoad.model.service.impl.event;

import com.javajo.sunshineRoad.model.dao.event.EventDAO;
import com.javajo.sunshineRoad.model.dto.event.EventStoryDTO;
import com.javajo.sunshineRoad.model.service.IService.event.GetEventStoryContentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GetEventStoryContentServiceImpl implements GetEventStoryContentService {
    private final EventDAO eventDAO;

    @Override
    public EventStoryDTO getEventStoryContent(int eventReportId) {
        return eventDAO.getEventStoryContent(eventReportId);
    }
}