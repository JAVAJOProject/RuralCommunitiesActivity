package com.javajo.sunshineRoad.model.dao.totalActivity;

import com.javajo.sunshineRoad.mappers.totalActivity.RegTotalActivityMapper;
import com.javajo.sunshineRoad.model.dto.totalActivity.TotalActivityContentDTO;
import com.javajo.sunshineRoad.model.dto.totalActivity.TotalActivityImagesDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class RegTotalActivityContentDAO {

    private final SqlSessionTemplate sqlSession;
    
    public List<TotalActivityContentDTO> getRegTotalList() {
    	RegTotalActivityMapper mapper = sqlSession.getMapper(RegTotalActivityMapper.class);
    	return mapper.getRegActivityData();
    }
    
    public int getTotalActivityCurrentId() {
    	RegTotalActivityMapper mapper = sqlSession.getMapper(RegTotalActivityMapper.class);
        return mapper.getTotalActivityCurrentIdData();
    }
    public int getTotalActivityImgCurrentId() {
    	RegTotalActivityMapper mapper = sqlSession.getMapper(RegTotalActivityMapper.class);
        return mapper.getTotalActivityImgCurrentIdData();
    }

	public int insertTotalActivityInfo(TotalActivityContentDTO totalActivityContentDTO) {
		RegTotalActivityMapper mapper = sqlSession.getMapper(RegTotalActivityMapper.class);
		return mapper.insertTotalActivityInfoData(totalActivityContentDTO);
	}
	public int insertTotalActivityPost(TotalActivityContentDTO totalActivityContentDTO) {
		RegTotalActivityMapper mapper = sqlSession.getMapper(RegTotalActivityMapper.class);
		return mapper.insertTotalActivityPostData(totalActivityContentDTO);
	}
    
    public void insertTotalActivityImagesValues(TotalActivityImagesDTO totalActivityImages) {
    	RegTotalActivityMapper mapper = sqlSession.getMapper(RegTotalActivityMapper.class);
        mapper.insertTotalActivityImagesData(totalActivityImages);
    }
    
    public void updateTotalActivityImagesIdInfo(TotalActivityContentDTO totalActivityContentDTO) {
    	RegTotalActivityMapper mapper = sqlSession.getMapper(RegTotalActivityMapper.class);
        mapper.updateTotalActivityImagesIdInfoData(totalActivityContentDTO);
    }
  
    public int updateTotalActivityInfo(TotalActivityContentDTO totalActivityContentDTO) {
        RegTotalActivityMapper mapper = sqlSession.getMapper(RegTotalActivityMapper.class);
        return mapper.updateTotalActivityInfoData(totalActivityContentDTO);
    }

    public int updateTotalActivityPost(TotalActivityContentDTO totalActivityContentDTO) {
        RegTotalActivityMapper mapper = sqlSession.getMapper(RegTotalActivityMapper.class);
        return mapper.updateTotalActivityPostData(totalActivityContentDTO);
    }

    public int updateTotalActivityImages(TotalActivityContentDTO totalActivityContentDTO) {
        RegTotalActivityMapper mapper = sqlSession.getMapper(RegTotalActivityMapper.class);
        return mapper.updateTotalActivityImgData(totalActivityContentDTO); 
    }//a_img_id때문에 img 테이블이 따라다녀야되니까 같이 따라다니게 해주기

    public int deleteTotalActivityInfo(int aImgId) {
        RegTotalActivityMapper mapper = sqlSession.getMapper(RegTotalActivityMapper.class);
        return mapper.deleteTotalActivityInfoData(aImgId);
    }

    public int deleteTotalActivityPost(int aImgId) {
        RegTotalActivityMapper mapper = sqlSession.getMapper(RegTotalActivityMapper.class);
        return mapper.deleteTotalActivityPostData(aImgId);
    }

    public int deleteActivityImages(int aImgId) {
        RegTotalActivityMapper mapper = sqlSession.getMapper(RegTotalActivityMapper.class);
        return mapper.deleteTotalActivityImgData(aImgId);
    }//삭제될때는 같이 삭제돼야되니까 있어야함
}