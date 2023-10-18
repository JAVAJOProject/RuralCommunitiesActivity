package com.javajo.sunshineRoad.model.service.impl.community.member;

import com.javajo.sunshineRoad.model.dao.community.MemberCommunityDAO;
import com.javajo.sunshineRoad.model.dto.community.MemberCommunityPostDTO;
import com.javajo.sunshineRoad.model.service.IService.community.member.MemberCommunityGetOneRequestPostService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberCommunityGetOneRequestPostServiceImpl implements MemberCommunityGetOneRequestPostService {
    private final MemberCommunityDAO memberCommunityDAO;

    @Override
    public MemberCommunityPostDTO getOneRequestMemberCommunityPost(int postId) {
        return memberCommunityDAO.getOneRequestMemberCommunityPost(postId);
    }
}