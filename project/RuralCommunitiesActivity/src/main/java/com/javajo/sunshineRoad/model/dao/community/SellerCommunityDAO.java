package com.javajo.sunshineRoad.model.dao.community;

import com.javajo.sunshineRoad.mappers.community.SellerCommunityMapper;
import com.javajo.sunshineRoad.model.dto.community.SellerCommunityPostDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class SellerCommunityDAO {
    private final SqlSessionTemplate sqlSession;

    public List<SellerCommunityPostDTO> getRequestSellerCommunityPost(int postId, int perPagePostCount) {
        SellerCommunityMapper mapper = sqlSession.getMapper(SellerCommunityMapper.class);
        return mapper.getRequestSellerCommunityPost(postId, perPagePostCount);
    }

    public SellerCommunityPostDTO getOneRequestSellerCommunityPost(int postId) {
        SellerCommunityMapper mapper = sqlSession.getMapper(SellerCommunityMapper.class);
        return mapper.getOneRequestSellerCommunityPost(postId);
    }

    public void postRequestSellerCommunityPost(SellerCommunityPostDTO sellerCommunityPost) {
        SellerCommunityMapper mapper = sqlSession.getMapper(SellerCommunityMapper.class);
        mapper.postRequestSellerCommunityPost(sellerCommunityPost);
    }

    public void updateSellerCommunityPost(SellerCommunityPostDTO sellerCommunityPost) {
        SellerCommunityMapper mapper = sqlSession.getMapper(SellerCommunityMapper.class);
        mapper.updateSellerCommunityPost(sellerCommunityPost);
    }

    public void deleteSellerCommunityPost(int sellerCommunityPostId) {
        SellerCommunityMapper mapper = sqlSession.getMapper(SellerCommunityMapper.class);
        mapper.deleteSellerCommunityPost(sellerCommunityPostId);
    }

    public int checkAuthorBeforeUpdatingOrDeletingPost(SellerCommunityPostDTO sellerCommunityPost) {
        SellerCommunityMapper mapper = sqlSession.getMapper(SellerCommunityMapper.class);
        return mapper.checkAuthorSellerBeforeUpdatingOrDeletingPost(sellerCommunityPost);
    }
}