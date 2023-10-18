package com.javajo.sunshineRoad.model.service.impl.community.member;

import com.javajo.sunshineRoad.model.dao.community.MemberCommunityDAO;
import com.javajo.sunshineRoad.model.dto.community.MemberCommunityPostDTO;
import com.javajo.sunshineRoad.model.service.IService.community.member.MemberCommunityCheckAuthorBeforeUpdatingOrDeletingPostService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberCommunityCheckAuthorBeforeUpdatingOrDeletingPostServiceImpl implements MemberCommunityCheckAuthorBeforeUpdatingOrDeletingPostService {
    private final MemberCommunityDAO memberCommunityDAO;

    @Override
    public boolean checkAuthorBeforeUpdatingOrDeletingPost(MemberCommunityPostDTO memberCommunityPost) {
        int resultCount = memberCommunityDAO.checkAuthorBeforeUpdatingOrDeletingPost(memberCommunityPost);

        return resultCount == 1;
    }
}