package com.javajo.sunshineRoad.model.dto.community;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.apache.ibatis.type.Alias;

@Alias("SellerCommunityPost")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SellerCommunityPostDTO {
    private int sellerCommunityPostId;
    @JsonProperty
    private long sId;
    @JsonProperty
    private String sComName;
    private String sellerCommunityContent;
    private String sellerCommunityDateCreated;
    private int communityLikeCnt;
    private int communityViewCnt;
    private int communityCumCnt;
}