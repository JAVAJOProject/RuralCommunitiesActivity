package com.javajo.sunshineRoad.model.service.IService.event;

import com.javajo.sunshineRoad.model.dto.event.EventDTO;

public interface GetEventDetailFromEventIdService {
    public EventDTO getEventDetailFromEventId(int eventId);
}