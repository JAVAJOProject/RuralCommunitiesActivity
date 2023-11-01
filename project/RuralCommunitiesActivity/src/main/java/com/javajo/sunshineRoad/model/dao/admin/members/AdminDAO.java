package com.javajo.sunshineRoad.model.dao.admin.members;

import com.javajo.sunshineRoad.mappers.admin.member.AdminMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AdminDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class AdminDAO {


	private final SqlSessionTemplate sqlSession;

	//회원전체조회
	public List<AdminDTO> getAllAdmin(int startPostNo, int endPostNo) {
		System.out.println("[AdminDAO] getAllAdmin()");

		AdminMapper adminMapper = sqlSession.getMapper(AdminMapper.class);
		return adminMapper.getAllAdmin(startPostNo,endPostNo);
	}


	//회원선택 조회      아이디
	public List<AdminDTO> selectAdminID(int adminId) {
		System.out.println("[AdminDAO] selectAdminID()");

		AdminMapper adminMapper = sqlSession.getMapper(AdminMapper.class);
		return adminMapper.selectAdminID(adminId);


	}

	//회원선택 조회      기간조회
	public List<AdminDTO> selectAdminDATE(ASearchDTO searchDTO,int startPostNo, int endPostNo) {
		System.out.println("[AdminDAO] selectAdminDATE()");

		AdminMapper adminMapper = sqlSession.getMapper(AdminMapper.class);
		return adminMapper.selectAdminDATE(searchDTO,startPostNo,endPostNo);


	}





	//회원 삭제
	public void delAdmin(int adminId) {
		System.out.println("[AdminDAO] delAdmin()");

		AdminMapper adminMapper = sqlSession.getMapper(AdminMapper.class);
		adminMapper.delAdmin(adminId);



	}


	//회원정보수정
	public void updateAdmin(AdminDTO adminDTO) throws Exception{
		System.out.println("[AdminDAO] updateAdmin()");

		AdminMapper adminMapper = sqlSession.getMapper(AdminMapper.class);
		adminMapper.updateAdmin(adminDTO);

	}

	//가입승인요청건 조회 하기  관리자만
	public List<AdminDTO> appAdmin(int startPostNo, int endPostNo) {
		System.out.println("[AdminDAO] appAdmin()");

		AdminMapper adminMapper = sqlSession.getMapper(AdminMapper.class);
		return adminMapper.appAdmin(startPostNo,endPostNo);
	}


	//승인하기
	public void updateApp(int adminId) {
		System.out.println("[AdminDAO] updateApp()");

		AdminMapper adminMapper = sqlSession.getMapper(AdminMapper.class);
		adminMapper.updateApp(adminId);
	}


}