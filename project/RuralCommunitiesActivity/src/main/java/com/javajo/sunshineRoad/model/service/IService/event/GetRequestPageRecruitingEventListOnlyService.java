package com.javajo.sunshineRoad.model.service.IService.event;

import com.javajo.sunshineRoad.model.dto.event.EventDTO;

import java.util.List;

public interface GetRequestPageRecruitingEventListOnlyService {
    public List<EventDTO> getRequestPageRecruitingEventListOnly(int totalCount, int perPagePostCount, int requestPageNo);
}