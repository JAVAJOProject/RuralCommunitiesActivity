package com.javajo.sunshineRoad.model.dao.mypageSeller;

import com.javajo.sunshineRoad.mappers.mypageSeller.MypageSellerCommunityMapper;
import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageSellerCommunityDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class MypageSellerCommunityDAO {
	@Autowired
	private final SqlSessionTemplate sqlSession;

	public int getCommunityCount(long sId) {
		System.out.println("sId" + sId);
		MypageSellerCommunityMapper sellerCommunityMapper = sqlSession.getMapper(MypageSellerCommunityMapper.class);
		return sellerCommunityMapper.selectCount(sId);
	}



//	Oracle
//	public List<MypageSellerCommunityDTO> getInfo(long sId, PageInfo pageInfo) {
//		System.out.println("sId" + sId);
//		int start = pageInfo.getStartList();
//		int end = pageInfo.getEndList();
//
//		MypageSellerCommunityMapper sellerCommunityMapper = sqlSession.getMapper(MypageSellerCommunityMapper.class);
//		return sellerCommunityMapper.selectByNo(sId, start, end);
//	}

//	MySQL
	public List<MypageSellerCommunityDTO> getInfo(long sId, PageInfo pageInfo) {
		System.out.println("sId" + sId);
		int start = pageInfo.getStartList();
		int perPagePostNo = pageInfo.getListLimit();

		MypageSellerCommunityMapper sellerCommunityMapper = sqlSession.getMapper(MypageSellerCommunityMapper.class);
		return sellerCommunityMapper.selectByNo(sId, start - 1, perPagePostNo);
	}
}