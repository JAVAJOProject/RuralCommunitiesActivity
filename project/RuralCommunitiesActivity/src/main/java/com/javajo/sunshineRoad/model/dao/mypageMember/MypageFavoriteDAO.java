package com.javajo.sunshineRoad.model.dao.mypageMember;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.mypageMember.MypageFavoriteMapper;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageFavoriteDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class MypageFavoriteDAO {
	@Autowired
	private final SqlSessionTemplate sqlSession;

	// 로그인한 회원
	public List<MypageFavoriteDTO> getInfo(int uId, PageInfo pageInfo) {
		System.out.println("FavoriteDAO " + uId);
		int start = pageInfo.getStartList();
		int end = pageInfo.getEndList();
		MypageFavoriteMapper favoritemapper = sqlSession.getMapper(MypageFavoriteMapper.class);
		return favoritemapper.selectByMember(uId, start, end);
	}

	public int getActivityCount(int uId) {
		System.out.println("uId " + uId);
		MypageFavoriteMapper favoritemapper = sqlSession.getMapper(MypageFavoriteMapper.class);
		return favoritemapper.selectCount(uId);
	}

	public List<MypageFavoriteDTO> getListInfo(int uId) {
		System.out.println("FavoriteDAO " + uId);
		MypageFavoriteMapper favoritemapper = sqlSession.getMapper(MypageFavoriteMapper.class);
		return favoritemapper.selectByFavoriteList(uId);
	}
}