package com.javajo.sunshineRoad.model.dao.event;

import com.javajo.sunshineRoad.model.dto.event.EventStoryDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UpdateEventStoryContentServiceImpl implements UpdateEventStoryContentService {
    private final EventDAO eventDAO;

    @Override
    public void updateEventStoryContent(EventStoryDTO eventStory) {
        eventDAO.updateEventStoryContent(eventStory);
    }
}