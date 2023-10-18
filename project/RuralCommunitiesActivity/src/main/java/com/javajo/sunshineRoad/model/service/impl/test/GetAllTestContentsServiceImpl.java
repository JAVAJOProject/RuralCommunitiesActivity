package com.javajo.sunshineRoad.model.service.impl.test;

import com.javajo.sunshineRoad.model.dao.test.TestDAO;
import com.javajo.sunshineRoad.model.dto.test.TestDTO;
import com.javajo.sunshineRoad.model.service.IService.test.GetAllTestContentsService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GetAllTestContentsServiceImpl implements GetAllTestContentsService {
    private final TestDAO testDAO;

    @Override
    public List<TestDTO> getAllTestContents() {
        return testDAO.getAllTestContents();
    }
}