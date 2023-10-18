package com.javajo.sunshineRoad.model.service.impl.event;

import com.javajo.sunshineRoad.model.dao.event.EventDAO;
import com.javajo.sunshineRoad.model.service.IService.event.GetTotalActiveEventCountService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GetTotalActiveEventCountServiceImpl implements GetTotalActiveEventCountService {
    private final EventDAO eventDAO;

    @Override
    public int getTotalActiveEventCount() {
        return eventDAO.getTotalActiveEventCount();
    }
}