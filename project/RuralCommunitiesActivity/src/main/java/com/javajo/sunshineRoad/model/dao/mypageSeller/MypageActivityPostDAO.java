package com.javajo.sunshineRoad.model.dao.mypageSeller;

import com.javajo.sunshineRoad.mappers.mypageSeller.MypageActivityPostMapper;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageActivityPostDTO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageMemberDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class MypageActivityPostDAO {
	@Autowired
	private final SqlSessionTemplate sqlSession;

	public int getActivityParticipantCount(int postId) {
		System.out.println("postId" + postId);
		MypageActivityPostMapper activityInfoMapper = sqlSession.getMapper(MypageActivityPostMapper.class);
		return activityInfoMapper.selectParticipantCount(postId);
	}

	public int getActivityCount(long sId) {
		System.out.println("sId" + sId);
		MypageActivityPostMapper activityInfoMapper = sqlSession.getMapper(MypageActivityPostMapper.class);
		return activityInfoMapper.selectCount(sId);
	}



//	Oracle
//	// 체험 전체 내역
//	public List<MypageActivityPostDTO> getInfo(long sId, PageInfo pageInfo) {
//		System.out.println("ActivityInfoDAO" + sId);
//		int start = pageInfo.getStartList();
//		int end = pageInfo.getEndList();
//		MypageActivityPostMapper activityInfoMapper = sqlSession.getMapper(MypageActivityPostMapper.class);
//		return activityInfoMapper.selectByNo(sId, start, end);
//	}
//
//	// 체험명단 리스트로 member에서
//	public List<MypageMemberDTO> getList(int postId, PageInfo pageInfo) {
//		System.out.println("postId" + postId);
//		int start = pageInfo.getStartList();
//		int end = pageInfo.getEndList();
//		MypageActivityPostMapper activityInfoMapper = sqlSession.getMapper(MypageActivityPostMapper.class);
//		return activityInfoMapper.selectInfoByPostId(postId, start, end);
//	}


//	MySQL
	public List<MypageActivityPostDTO> getInfo(long sId, PageInfo pageInfo) {
		System.out.println("ActivityInfoDAO" + sId);
		int start = pageInfo.getStartList();
		int perPagePostNo = pageInfo.getListLimit();
		MypageActivityPostMapper activityInfoMapper = sqlSession.getMapper(MypageActivityPostMapper.class);
		return activityInfoMapper.selectByNo(sId, start - 1, perPagePostNo);
	}
	public List<MypageMemberDTO> getList(int postId, PageInfo pageInfo) {
		System.out.println("postId" + postId);
		int start = pageInfo.getStartList();
		int perPagePostNo = pageInfo.getListLimit();
		MypageActivityPostMapper activityInfoMapper = sqlSession.getMapper(MypageActivityPostMapper.class);
		return activityInfoMapper.selectInfoByPostId(postId, start - 1, perPagePostNo);
	}
}