package com.javajo.sunshineRoad.model.dao.community;

import com.javajo.sunshineRoad.mappers.community.MemberCommunityMapper;
import com.javajo.sunshineRoad.model.dto.community.MemberCommunityPostDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class MemberCommunityDAO {
    private final SqlSessionTemplate sqlSession;

    public List<MemberCommunityPostDTO> getRequestMemberCommunityPost(int postId, int perPagePostCount) {
        MemberCommunityMapper mapper = sqlSession.getMapper(MemberCommunityMapper.class);
        return mapper.getRequestMemberCommunityPost(postId, perPagePostCount);
    }

    public MemberCommunityPostDTO getOneRequestMemberCommunityPost(int postId) {
        MemberCommunityMapper mapper = sqlSession.getMapper(MemberCommunityMapper.class);
        return mapper.getOneRequestMemberCommunityPost(postId);
    }

    public void postRequestMemberCommunityPost(MemberCommunityPostDTO memberCommunityPost) {
        MemberCommunityMapper mapper = sqlSession.getMapper(MemberCommunityMapper.class);
        mapper.postRequestMemberCommunityPost(memberCommunityPost);
    }

    public void updateMemberCommunityPost(MemberCommunityPostDTO memberCommunityPost) {
        MemberCommunityMapper mapper = sqlSession.getMapper(MemberCommunityMapper.class);
        mapper.updateMemberCommunityPost(memberCommunityPost);
    }

    public void deleteMemberCommunityPost(int uCommunityPostId) {
        MemberCommunityMapper mapper = sqlSession.getMapper(MemberCommunityMapper.class);
        mapper.deleteMemberCommunityPost(uCommunityPostId);
    }

    public int checkAuthorBeforeUpdatingOrDeletingPost(MemberCommunityPostDTO memberCommunityPost) {
        MemberCommunityMapper mapper = sqlSession.getMapper(MemberCommunityMapper.class);
        return mapper.checkAuthorMemberBeforeUpdatingOrDeletingPost(memberCommunityPost);
    }
}