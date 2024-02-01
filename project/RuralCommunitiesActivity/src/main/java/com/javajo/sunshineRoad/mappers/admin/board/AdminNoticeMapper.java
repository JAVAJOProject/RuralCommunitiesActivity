package com.javajo.sunshineRoad.mappers.admin.board;

import com.javajo.sunshineRoad.model.dto.admin.board.ANoticeDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ANoticeImgDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface AdminNoticeMapper {

		//등록하기. 이미지는 따로
		public void registrationNotice(ANoticeDTO noticeDTO);

		//등록하기 이미지
		public int PostMaxID();
		public int ImgMaxID();
		public void noticeImgValues(ANoticeImgDTO noticeImg);
		public void updateImgID(ANoticeDTO noticeDTO);

		//수정하기 객체
		public void modifyNoticePost(ANoticeDTO noticeDTO);

		//이미지 삭제전 해당 아이디 찾기
		public int selectImgId(int noticeId);
		//이미지 삭제 --수정하는경우 먼저 삭제후 등록 메서드 실행
		public int deleteNoticeImg(int noticeImgId);

		//삭제하기 객체
		public int deleteNoticePost(int noticeId);


		//상세조회
		public List<ANoticeDTO> detailNotice(int noticeId);

		//상세조회 이미지
		public List<ANoticeImgDTO> detailNoticeImg(int noticeId);

		// Oracle
		//전체 조회
		public List<ANoticeDTO> getAllNotice(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);

		// MySQL
//		//전체 조회
//		public List<ANoticeDTO> getAllNotice(@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int perPagePostCount);

}