package com.javajo.sunshineRoad.model.service.impl.community.member;

import com.javajo.sunshineRoad.model.dao.community.MemberCommunityDAO;
import com.javajo.sunshineRoad.model.dto.community.MemberCommunityPostDTO;
import com.javajo.sunshineRoad.model.service.IService.community.member.MemberCommunityUpdatePostService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberCommunityUpdatePostServiceImpl implements MemberCommunityUpdatePostService {
    private final MemberCommunityDAO memberCommunityDAO;

    @Override
    public void updateMemberCommunityPost(MemberCommunityPostDTO memberCommunityPost) {
        memberCommunityDAO.updateMemberCommunityPost(memberCommunityPost);
    }
}