package com.javajo.sunshineRoad.model.dao.mypageMember;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.mypageMember.MypageActivityReviewMapper;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageActivityReviewDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class MypageActivityReviewDAO {
	@Autowired
	private final SqlSessionTemplate sqlSession;

	public void writeRev(MypageActivityReviewDTO rev) {
		System.out.println("ActivityReviewDAO" + rev);
		MypageActivityReviewMapper aReview = sqlSession.getMapper(MypageActivityReviewMapper.class);
		aReview.insertRev(rev);
	}

	public int updateRev(MypageActivityReviewDTO rev) {
		System.out.println("ActivityReviewDAO" + rev);
		MypageActivityReviewMapper aReview = sqlSession.getMapper(MypageActivityReviewMapper.class);
		return aReview.updateRev(rev);
	}

	public int getActivityCount(int uId) {
		System.out.println("uId" + uId);
		MypageActivityReviewMapper aReview = sqlSession.getMapper(MypageActivityReviewMapper.class);
		return aReview.selectCount(uId);
	}

	public int cancel(int revId) {
		System.out.println("revId" + revId);
		MypageActivityReviewMapper aReview = sqlSession.getMapper(MypageActivityReviewMapper.class);
		return aReview.deleteReview(revId);
	}

	public MypageActivityReviewDTO getReview(int revId) {
		System.out.println("revId" + revId);
		MypageActivityReviewMapper aReview = sqlSession.getMapper(MypageActivityReviewMapper.class);
		return aReview.selectReview(revId);
	}


	// 로그인한 회원
//	Oracle
	public List<MypageActivityReviewDTO> getInfo(int uId, PageInfo pageInfo) {
		System.out.println("uId" + uId);
		int start = pageInfo.getStartList();
		int end = pageInfo.getEndList();
		MypageActivityReviewMapper aReview = sqlSession.getMapper(MypageActivityReviewMapper.class);
		return aReview.selectByNo(uId, start, end);
	}


//	MySQL
//	public List<MypageActivityReviewDTO> getInfo(int uId, PageInfo pageInfo) {
//		System.out.println("uId" + uId);
//		int start = pageInfo.getStartList();
//		int perPagePostNo = pageInfo.getListLimit();
//		MypageActivityReviewMapper aReview = sqlSession.getMapper(MypageActivityReviewMapper.class);
//		return aReview.selectByNo(uId, start - 1, perPagePostNo);
//	}
}



//
//		public List<ActivityReviewDTO> getReviewDetail(int revId) {
//	        ActivityReviewMapper aReview = sqlSession.getMapper(ActivityReviewMapper.class);
//	        return aReview.selectByNo(revId);
//
//}
//		public boolean updateReview(ActivityReviewDTO aReviewDTO) {
//		    ActivityReviewMapper aReview = sqlSession.getMapper(ActivityReviewMapper.class);
//		    int rowsAffected = aReview.updateReview(aReviewDTO);
//		    return rowsAffected > 0;
//		}
//		public boolean deleteReview(int revId) {
//		    ActivityReviewMapper aReview = sqlSession.getMapper(ActivityReviewMapper.class);
//		    int rowsAffected = aReview.deleteReview(revId);
//		    return rowsAffected > 0;
//		}