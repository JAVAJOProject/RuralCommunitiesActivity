package com.javajo.sunshineRoad.model.dao.mypageMember;

import com.javajo.sunshineRoad.mappers.mypageMember.MypageFavoriteMapper;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageFavoriteDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class MypageFavoriteDAO {
	private final SqlSessionTemplate sqlSession;

	public int getEventCount(long uId) {
		System.out.println("uId " + uId);
		MypageFavoriteMapper favoritemapper = sqlSession.getMapper(MypageFavoriteMapper.class);
		return favoritemapper.selectCountEvent(uId);
	}
	public int getActivityCount(long uId) {
		System.out.println("uId " + uId);
		MypageFavoriteMapper favoritemapper = sqlSession.getMapper(MypageFavoriteMapper.class);
		return favoritemapper.selectByActivity(uId);
	}

	// 로그인한 회원
//	Oracle
	public List<MypageFavoriteDTO> getInfoEvent(long uId, PageInfo pageInfo) {
		System.out.println("FavoriteDAO " + uId);
		int start = pageInfo.getStartList();
		int end = pageInfo.getEndList();

		MypageFavoriteMapper favoritemapper = sqlSession.getMapper(MypageFavoriteMapper.class);
		return favoritemapper.selectByMemberEvent(uId, start, end);
	}
	public List<MypageFavoriteDTO> getListInfoEvent(long uId, PageInfo pageInfo) {
		System.out.println("FavoriteDAO " + uId);
		int start = pageInfo.getStartList();
		int end = pageInfo.getEndList();
		MypageFavoriteMapper favoritemapper = sqlSession.getMapper(MypageFavoriteMapper.class);
		return favoritemapper.selectByFavoriteListEvent(uId, start, end);
	}
	public List<MypageFavoriteDTO> getInfoActivity(long uId, PageInfo pageInfo) {
		System.out.println("FavoriteDAO " + uId);
		int start = pageInfo.getStartList();
		int end = pageInfo.getEndList();
		MypageFavoriteMapper favoritemapper = sqlSession.getMapper(MypageFavoriteMapper.class);
		return favoritemapper.selectByFavoriteListActivity(uId, start, end);
	}


//	MySQL
//	public List<MypageFavoriteDTO> getInfoEvent(long uId, PageInfo pageInfo) {
//		System.out.println("FavoriteDAO " + uId);
//		int start = pageInfo.getStartList();
//		int perPagePostNo = pageInfo.getListLimit();
//
//		MypageFavoriteMapper favoritemapper = sqlSession.getMapper(MypageFavoriteMapper.class);
//		return favoritemapper.selectByMemberEvent(uId, start - 1, perPagePostNo);
//	}
//	public List<MypageFavoriteDTO> getListInfoEvent(long uId, PageInfo pageInfo) {
//		System.out.println("FavoriteDAO " + uId);
//		int start = pageInfo.getStartList();
//		int perPagePostNo = pageInfo.getListLimit();
//
//		MypageFavoriteMapper favoriteMapper = sqlSession.getMapper(MypageFavoriteMapper.class);
//		return favoriteMapper.selectByFavoriteListEvent(uId, start - 1, perPagePostNo);
//	}
//	public List<MypageFavoriteDTO> getInfoActivity(long uId, PageInfo pageInfo) {
//		System.out.println("FavoriteDAO " + uId);
//		int start = pageInfo.getStartList();
//		int perPagePostNo = pageInfo.getListLimit();
//
//		MypageFavoriteMapper favoritemapper = sqlSession.getMapper(MypageFavoriteMapper.class);
//		return favoritemapper.selectByFavoriteListActivity(uId, start - 1, perPagePostNo);
//	}
}