package com.javajo.sunshineRoad.model.dao.test;

import com.javajo.sunshineRoad.mappers.TestMapper;
import com.javajo.sunshineRoad.model.dto.test.TestDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class TestDAO {
    private final SqlSessionTemplate sqlSession;

    public List<TestDTO> getAllTestContents() {
//        return sqlSession.selectList("testMapper.getAllTestContents");

        TestMapper testMapper = sqlSession.getMapper(TestMapper.class);
        return testMapper.getAllTestContents();
    }

    public TestDTO getOneTestContent(int id) {
//        return sqlSession.selectOne("testMapper.getOneTestContent", id);

        TestMapper testMapper = sqlSession.getMapper(TestMapper.class);
        return testMapper.getOneTestContent(id);
    }
}