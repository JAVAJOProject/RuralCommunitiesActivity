package com.javajo.sunshineRoad.mappers;

import com.javajo.sunshineRoad.model.dto.test.TestDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TestMapper {
    public List<TestDTO> getAllTestContents();
    public TestDTO getOneTestContent(int id);

}