package com.javajo.sunshineRoad.model.dao.mypageSeller;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.mypageSeller.MypageSellerCommunityMapper;
import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageSellerCommunityDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class MypageSellerCommunityDAO {
	@Autowired
	private final SqlSessionTemplate sqlSession;
	
	public List<MypageSellerCommunityDTO> getInfo(int sId, PageInfo pageInfo) {
		System.out.println("sId" + sId);
		int start = pageInfo.getStartList();
		int end = pageInfo.getEndList();
		
		MypageSellerCommunityMapper sellerCommunityMapper = sqlSession.getMapper(MypageSellerCommunityMapper.class);
		return sellerCommunityMapper.selectByNo(sId, start, end);
		
	}

	public int getCommunityCount(int sId) {
		System.out.println("sId" + sId);
		MypageSellerCommunityMapper sellerCommunityMapper = sqlSession.getMapper(MypageSellerCommunityMapper.class);
		return sellerCommunityMapper.selectCount(sId);
	}
}
