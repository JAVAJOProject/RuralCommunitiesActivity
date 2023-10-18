package com.javajo.sunshineRoad.model.service.impl.event;

import com.javajo.sunshineRoad.model.dao.event.EventDAO;
import com.javajo.sunshineRoad.model.dto.event.EventStoryDTO;
import com.javajo.sunshineRoad.model.service.IService.event.PostRequestEventStoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostRequestEventStoryServiceImpl implements PostRequestEventStoryService {
    private final EventDAO eventDAO;

    @Override
    public void postRequestEventStory(EventStoryDTO eventStory) {
        eventDAO.postEventStoryRequest(eventStory);
    }
}