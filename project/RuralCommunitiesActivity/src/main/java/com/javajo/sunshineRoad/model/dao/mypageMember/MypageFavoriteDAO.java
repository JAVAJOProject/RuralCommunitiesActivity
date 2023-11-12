package com.javajo.sunshineRoad.model.dao.mypageMember;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.mypageMember.MypageFavoriteMapper;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageFavoriteDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class MypageFavoriteDAO {
	private final SqlSessionTemplate sqlSession;

	public int getActivityCountEvent(int uId) {
		System.out.println("uId " + uId);
		MypageFavoriteMapper favoritemapper = sqlSession.getMapper(MypageFavoriteMapper.class);
		return favoritemapper.selectCountEvent(uId);
	}

	// 로그인한 회원
//	Oracle
	public List<MypageFavoriteDTO> getInfoEvent(int uId, PageInfo pageInfo) {
		System.out.println("FavoriteDAO " + uId);
		int start = pageInfo.getStartList();
		int end = pageInfo.getEndList();

		MypageFavoriteMapper favoritemapper = sqlSession.getMapper(MypageFavoriteMapper.class);
		return favoritemapper.selectByMemberEvent(uId, start, end);
	}
	public List<MypageFavoriteDTO> getListInfoEvent(int uId, PageInfo pageInfo) {
		System.out.println("FavoriteDAO " + uId);
		int start = pageInfo.getStartList();
		int end = pageInfo.getEndList();
		MypageFavoriteMapper favoritemapper = sqlSession.getMapper(MypageFavoriteMapper.class);
		return favoritemapper.selectByFavoriteListEvent(uId, start, end);
	}


//	MySQL
//	public List<MypageFavoriteDTO> getInfoEvent(int uId, PageInfo pageInfo) {
//		System.out.println("FavoriteDAO " + uId);
//		int start = pageInfo.getStartList();
//		int perPagePostNo = pageInfo.getListLimit();
//
//		MypageFavoriteMapper favoritemapper = sqlSession.getMapper(MypageFavoriteMapper.class);
//		return favoritemapper.selectByMemberEvent(uId, start - 1, perPagePostNo);
//	}
//	public List<MypageFavoriteDTO> getListInfoEvent(int uId, PageInfo pageInfo) {
//		System.out.println("FavoriteDAO " + uId);
//		int start = pageInfo.getStartList();
//		int perPagePostNo = pageInfo.getListLimit();
//
//		MypageFavoriteMapper favoriteMapper = sqlSession.getMapper(MypageFavoriteMapper.class);
//		return favoriteMapper.selectByFavoriteListEvent(uId, start - 1, perPagePostNo);
//	}
}