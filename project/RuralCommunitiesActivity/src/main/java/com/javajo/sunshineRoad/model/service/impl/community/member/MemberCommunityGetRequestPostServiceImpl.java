package com.javajo.sunshineRoad.model.service.impl.community.member;

import com.javajo.sunshineRoad.model.dao.community.MemberCommunityDAO;
import com.javajo.sunshineRoad.model.dto.community.MemberCommunityPostDTO;
import com.javajo.sunshineRoad.model.service.IService.community.member.MemberCommunityGetRequestPostService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberCommunityGetRequestPostServiceImpl implements MemberCommunityGetRequestPostService {
    private final MemberCommunityDAO memberCommunityDAO;

    @Override
    public List<MemberCommunityPostDTO> getRequestMemberCommunityPost(int postId, int perPagePostCount) {
        return memberCommunityDAO.getRequestMemberCommunityPost(postId, perPagePostCount);
    }
}