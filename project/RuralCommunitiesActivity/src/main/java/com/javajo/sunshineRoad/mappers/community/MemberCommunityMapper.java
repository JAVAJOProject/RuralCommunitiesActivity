package com.javajo.sunshineRoad.mappers.community;

import com.javajo.sunshineRoad.model.dto.community.MemberCommunityPostDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface MemberCommunityMapper {
    public List<MemberCommunityPostDTO> getRequestMemberCommunityPost(@Param("postId") int postId, @Param("perPagePostCount") int perPagePostCount);
    public MemberCommunityPostDTO getOneRequestMemberCommunityPost(int postId);
    public void postRequestMemberCommunityPost(MemberCommunityPostDTO memberCommunityPost);
    public void updateMemberCommunityPost(MemberCommunityPostDTO memberCommunityPost);
    public void deleteMemberCommunityPost(int uCommunityPostId);
    public int checkAuthorMemberBeforeUpdatingOrDeletingPost(MemberCommunityPostDTO memberCommunityPost);
}