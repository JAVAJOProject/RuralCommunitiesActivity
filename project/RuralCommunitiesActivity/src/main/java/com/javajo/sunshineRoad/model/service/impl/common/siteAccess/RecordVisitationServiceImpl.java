package com.javajo.sunshineRoad.model.service.impl.common.siteAccess;

import com.javajo.sunshineRoad.model.dao.common.SiteAccessDAO;
import com.javajo.sunshineRoad.model.service.IService.common.siteAccess.RecordVisitationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RecordVisitationServiceImpl implements RecordVisitationService {
    private final SiteAccessDAO siteAccessDAO;

    @Override
    public void recordVisitation() {
        siteAccessDAO.recordVisitation();
    }
}