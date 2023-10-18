package com.javajo.sunshineRoad.model.service.IService.event;

import com.javajo.sunshineRoad.model.dto.event.EventDTO;

import java.util.List;

public interface GetRequestPageEventListService {
    public List<EventDTO> getRequestPageEventList(int totalCount, int perPagePostCount, int requestPageNo);
}