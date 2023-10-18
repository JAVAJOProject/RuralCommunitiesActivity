package com.javajo.sunshineRoad.model.dto.community;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.apache.ibatis.type.Alias;

@Alias("MemberCommunityPost")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MemberCommunityPostDTO {
    @JsonProperty
    private int uCommunityPostId;
    @JsonProperty
    private int uId;
    @JsonProperty
    private int uCommunityImgId;
    private String communityImgName;
    @JsonProperty
    private String uCommunityContent;
    @JsonProperty
    private String uCommunityDateCreated;
    private int communityLikeCnt;
    private int communityViewCnt;
    private int communityCumCnt;
}