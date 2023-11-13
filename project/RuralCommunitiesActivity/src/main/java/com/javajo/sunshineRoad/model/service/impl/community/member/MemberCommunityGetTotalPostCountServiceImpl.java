package com.javajo.sunshineRoad.model.service.impl.community.member;

import com.javajo.sunshineRoad.model.dao.community.MemberCommunityDAO;
import com.javajo.sunshineRoad.model.service.IService.community.member.MemberCommunityGetTotalPostCountService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberCommunityGetTotalPostCountServiceImpl implements MemberCommunityGetTotalPostCountService {
    private final MemberCommunityDAO memberCommunityDAO;

    @Override
    public int getTotalMemberCommunityPostCount() {
        return memberCommunityDAO.getTotalMemberCommunityPostCount();
    }
}