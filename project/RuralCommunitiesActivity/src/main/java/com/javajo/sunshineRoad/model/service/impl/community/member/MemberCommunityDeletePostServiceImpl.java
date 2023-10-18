package com.javajo.sunshineRoad.model.service.impl.community.member;

import com.javajo.sunshineRoad.model.dao.community.MemberCommunityDAO;
import com.javajo.sunshineRoad.model.service.IService.community.member.MemberCommunityDeletePostService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberCommunityDeletePostServiceImpl implements MemberCommunityDeletePostService {
    private final MemberCommunityDAO memberCommunityDAO;

    @Override
    public void deleteMemberCommunityPost(int uCommunityPostId) {
        memberCommunityDAO.deleteMemberCommunityPost(uCommunityPostId);
    }
}