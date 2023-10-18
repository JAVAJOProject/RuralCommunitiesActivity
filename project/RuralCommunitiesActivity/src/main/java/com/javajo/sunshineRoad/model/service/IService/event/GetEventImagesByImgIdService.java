package com.javajo.sunshineRoad.model.service.IService.event;

import com.javajo.sunshineRoad.model.dto.event.EventImagesDTO;

public interface GetEventImagesByImgIdService {
    public EventImagesDTO getEventImagesByImgId(int eventImgId);
}