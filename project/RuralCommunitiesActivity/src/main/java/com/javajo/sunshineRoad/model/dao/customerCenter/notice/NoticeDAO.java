package com.javajo.sunshineRoad.model.dao.customerCenter.notice;

import com.javajo.sunshineRoad.mappers.customerCenter.NoticeMapper;
import com.javajo.sunshineRoad.model.dto.customerCenter.notice.NoticeListInfoDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class NoticeDAO {
	private final SqlSessionTemplate sqlSession;
	
	public int getNoticeListCount() {
		
		System.out.println("getNoticeListCount");
		NoticeMapper noticeMapper = sqlSession.getMapper(NoticeMapper.class);
		return noticeMapper.getNoticeListCount();
	}
	
	public int getNoticeListCountCount(int noticeTypeId) {
		System.out.println("getNoticeListCountCount");
		NoticeMapper noticeMapper = sqlSession.getMapper(NoticeMapper.class);
		return noticeMapper.getNoticeListCountCount(noticeTypeId);
	}
	
	public List<NoticeListInfoDTO> getRequestPageNoticeList(int startPostNo, int endPostNo) {
		System.out.println("getRequestPageNoticeList");
		NoticeMapper noticeMapper = sqlSession.getMapper(NoticeMapper.class);
	    return noticeMapper.getRequestPageNoticeList(startPostNo, endPostNo);
	}
	
	public List<NoticeListInfoDTO> getRequestPageNoticeListList(int startPostNo, int endPostNo, int noticeTypeId) {
		System.out.println("getRequestPageNoticeListList");
		NoticeMapper noticeMapper = sqlSession.getMapper(NoticeMapper.class);
		List<NoticeListInfoDTO> result =  noticeMapper.getRequestPageNoticeListList(startPostNo, endPostNo, noticeTypeId);
		System.out.println(result.get(noticeTypeId));
		System.out.println("나왔니");
		return result;
		
		
		
	}
	public NoticeListInfoDTO getNoticeDetail(int noticeId) {
		System.out.println("getNoticeDetail");
		NoticeMapper noticeMapper = sqlSession.getMapper(NoticeMapper.class);
		return noticeMapper.getNoticeDetail(noticeId);
	}
}