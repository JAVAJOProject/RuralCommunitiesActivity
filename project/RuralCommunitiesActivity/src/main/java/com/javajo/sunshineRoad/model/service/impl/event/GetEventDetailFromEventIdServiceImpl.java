package com.javajo.sunshineRoad.model.service.impl.event;

import com.javajo.sunshineRoad.model.dao.event.EventDAO;
import com.javajo.sunshineRoad.model.dto.event.EventDTO;
import com.javajo.sunshineRoad.model.service.IService.event.GetEventDetailFromEventIdService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GetEventDetailFromEventIdServiceImpl implements GetEventDetailFromEventIdService {
    private final EventDAO eventDAO;

    @Override
    public EventDTO getEventDetailFromEventId(int eventId) {
        return eventDAO.getEventDetailFromEventId(eventId);
    }
}