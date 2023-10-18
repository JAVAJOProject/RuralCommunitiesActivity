package com.javajo.sunshineRoad.model.service.impl.event;

import com.javajo.sunshineRoad.model.dao.event.EventDAO;
import com.javajo.sunshineRoad.model.dto.event.EventImagesDTO;
import com.javajo.sunshineRoad.model.service.IService.event.GetEventImagesByImgIdService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GetEventImagesByImgIdServiceImpl implements GetEventImagesByImgIdService {
    private final EventDAO eventDAO;

    @Override
    public EventImagesDTO getEventImagesByImgId(int eventImgId) {
        return eventDAO.getEventImagesById(eventImgId);
    }
}