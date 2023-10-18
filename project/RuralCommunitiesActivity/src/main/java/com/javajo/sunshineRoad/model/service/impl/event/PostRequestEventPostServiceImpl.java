package com.javajo.sunshineRoad.model.service.impl.event;

import com.javajo.sunshineRoad.model.dao.event.EventDAO;
import com.javajo.sunshineRoad.model.dto.event.EventDTO;
import com.javajo.sunshineRoad.model.service.IService.event.PostRequestEventPostService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostRequestEventPostServiceImpl implements PostRequestEventPostService {
    private final EventDAO eventDAO;

    @Override
    public void postRequestEventPost(EventDTO event) {
        eventDAO.postRequestEventPost(event);
    }
}