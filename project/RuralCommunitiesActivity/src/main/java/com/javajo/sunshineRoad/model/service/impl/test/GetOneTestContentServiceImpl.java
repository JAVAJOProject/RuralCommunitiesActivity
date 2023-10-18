package com.javajo.sunshineRoad.model.service.impl.test;

import com.javajo.sunshineRoad.model.dao.test.TestDAO;
import com.javajo.sunshineRoad.model.dto.test.TestDTO;
import com.javajo.sunshineRoad.model.service.IService.test.GetOneTestContentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GetOneTestContentServiceImpl implements GetOneTestContentService {
    private final TestDAO testDAO;

    @Override
    public TestDTO getOneTestContent(int id) {
        return testDAO.getOneTestContent(id);
    }
}