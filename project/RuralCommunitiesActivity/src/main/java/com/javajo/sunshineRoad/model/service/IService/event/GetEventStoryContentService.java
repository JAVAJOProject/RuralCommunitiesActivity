package com.javajo.sunshineRoad.model.service.IService.event;

import com.javajo.sunshineRoad.model.dto.event.EventStoryDTO;

public interface GetEventStoryContentService {
    public EventStoryDTO getEventStoryContent(int eventReportId);
}