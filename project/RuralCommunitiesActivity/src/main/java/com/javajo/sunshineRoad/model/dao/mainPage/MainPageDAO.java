package com.javajo.sunshineRoad.model.dao.mainPage;

import com.javajo.sunshineRoad.mappers.common.MainPageMapper;
import com.javajo.sunshineRoad.model.dto.mainPage.*;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class MainPageDAO {
    private final SqlSessionTemplate sqlSession;

    public List<MainPageRecommendationActivityInfoDTO> getMainRecActivityData() {
        MainPageMapper mapper = sqlSession.getMapper(MainPageMapper.class);
        return mapper.getMainPageRecommendationActivityData();
    }

    public MainPageRecommendationActivityInfoDTO getOneMainRecActivityData(int id) {
        MainPageMapper mapper = sqlSession.getMapper(MainPageMapper.class);
        return mapper.getOneRecommendationActivityData(id);
    }

    public List<MainPageTotalActivityInfoDTO> getMainTotalActivityData() {
        MainPageMapper mapper = sqlSession.getMapper(MainPageMapper.class);
        return mapper.getMainPageTotalActivityData();
    }

    public MainPageTotalActivityInfoDTO getOneMainTotalActivityData(int id) {
        MainPageMapper mapper = sqlSession.getMapper(MainPageMapper.class);
        return mapper.getOneTotalActivityData(id);
    }

    public List<MainPageRecommendationTownInfoDTO> getMainRecTownData() {
        MainPageMapper mapper = sqlSession.getMapper(MainPageMapper.class);
        return mapper.getMainPageRecTownData();
    }

    public MainPageRecommendationTownInfoDTO getOneMainRecTownData(int id) {
        MainPageMapper mapper = sqlSession.getMapper(MainPageMapper.class);
        return mapper.getOneRecommendationTownData(id);
    }

    public List<MainPageEventInfoDTO> getMainEventInfoData() {
        MainPageMapper mapper = sqlSession.getMapper(MainPageMapper.class);
        return mapper.getMainPageEventData();
    }

    public MainPageEventInfoDTO getOneMainEventData(int id) {
        MainPageMapper mapper = sqlSession.getMapper(MainPageMapper.class);
        return mapper.getOneEventData(id);
    }

    public List<MainPageNoticeInfoDTO> getMainNoticeInfoData() {
        MainPageMapper mapper = sqlSession.getMapper(MainPageMapper.class);
        return mapper.getMainPageNoticeData();
    }
}