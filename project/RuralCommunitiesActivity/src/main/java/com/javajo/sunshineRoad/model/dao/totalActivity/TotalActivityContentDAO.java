package com.javajo.sunshineRoad.model.dao.totalActivity;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.TotalActivityContentMapper;
import com.javajo.sunshineRoad.model.dto.totalActivity.TotalActivityContentDTO;
import com.javajo.sunshineRoad.model.dto.totalActivity.TotalActivityImagesDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class TotalActivityContentDAO {
	private final SqlSessionTemplate sqlSession;
	
    public TotalActivityContentDTO getOneActivity(int aId) {
    	TotalActivityContentMapper mapper = sqlSession.getMapper(TotalActivityContentMapper.class);
    	return mapper.getOneActivityData(aId);
    }
    public TotalActivityImagesDTO getTotalActivityImages(int aImgId) {
    	TotalActivityContentMapper mapper = sqlSession.getMapper(TotalActivityContentMapper.class);
    	return mapper.getTotalActivityImagesData(aImgId);
    	
    }
}
