package com.javajo.sunshineRoad.mappers;

import com.javajo.sunshineRoad.model.dto.community.SellerCommunityPostDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface SellerCommunityMapper {
    public List<SellerCommunityPostDTO> getRequestSellerCommunityPost(@Param("postId") int postId, @Param("perPagePostCount") int perPagePostCount);
    public SellerCommunityPostDTO getOneRequestSellerCommunityPost(int postId);
    public void postRequestSellerCommunityPost(SellerCommunityPostDTO sellerCommunityPost);
    public void updateSellerCommunityPost(SellerCommunityPostDTO sellerCommunityPost);
    public void deleteSellerCommunityPost(int sellerCommunityPostId);
    public int checkAuthorSellerBeforeUpdatingOrDeletingPost(SellerCommunityPostDTO sellerCommunityPost);
}