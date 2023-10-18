package com.javajo.sunshineRoad.model.service.impl.event;

import com.javajo.sunshineRoad.model.dao.event.EventDAO;
import com.javajo.sunshineRoad.model.service.IService.event.GetRecruitingActiveEventOnlyCountService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GetRecruitingActiveEventOnlyCountServiceImpl implements GetRecruitingActiveEventOnlyCountService {
    private final EventDAO eventDAO;

    @Override
    public int getRecruitingActiveEventOnlyCount() {
        return eventDAO.getRecruitingActiveEventOnlyCount();
    }
}