package com.javajo.sunshineRoad.model.service.impl.event;

import com.javajo.sunshineRoad.model.dao.event.EventDAO;
import com.javajo.sunshineRoad.model.service.IService.event.GetEventRecruitTypeIdService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GetEventRecruitTypeIdServiceImpl implements GetEventRecruitTypeIdService {
    private final EventDAO eventDAO;

    @Override
    public int getEventRecruitTypeId(int eventId) {
        return eventDAO.getEventRecruitTypeId(eventId);
    }
}