package com.javajo.sunshineRoad.model.service.impl.mypageMember;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.mypageMember.MypageMemberDAO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageMemberDTO;
import com.javajo.sunshineRoad.model.service.IService.mypageMember.MypageMemberService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MypageMemberImpl implements MypageMemberService {

	private final MypageMemberDAO memberDAO;

	@Override
	public MypageMemberDTO getInfo(int uId) {
		return memberDAO.getInfo(uId);
	}

	@Override
	public int changeInfo(String uName, int uId) {
		return memberDAO.changeInfo(uName, uId);
	}

	@Override
	public boolean changeInfo(int uId) {
		return memberDAO.changeInfo(uId);
	}

	@Override
	public boolean delMember(int uId) {
		return memberDAO.changeInfo(uId);
	}
}