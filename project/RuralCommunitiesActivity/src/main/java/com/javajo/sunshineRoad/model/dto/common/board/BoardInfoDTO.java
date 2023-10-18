package com.javajo.sunshineRoad.model.dto.common.board;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.javajo.sunshineRoad.exception.IllegalBoardType;
import lombok.*;
import org.apache.ibatis.type.Alias;

@Alias("BoardInfoToSearch")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BoardInfoDTO {
    private int boardId;
    private int postTypeId;
    private String postIdCol;
    @JsonProperty
    private int aPostId;
    private int recAPostId;
    private int recTId;
    private int eventId;
    @JsonProperty
    private int uCommunityPostId;
    private int sellerCommunityPostId;

    public void setPostTypeId(int postTypeId) {
        this.postTypeId = postTypeId;

        this.setPostIdCol(postTypeId);
    }

    public void setPostIdCol(String postIdCol) {
        this.postIdCol = postIdCol;
    }
    public void setPostIdCol(int postTypeId) throws IllegalBoardType {
        switch (postTypeId) {
            case 1: this.setPostIdCol("a_post_id");
                break;
            case 2: this.setPostIdCol("rec_a_post_id");
                break;
            case 3: this.setPostIdCol("rec_t_id");
                break;
            case 4: this.setPostIdCol("event_id");
                break;
            case 5: this.setPostIdCol("u_community_post_id");
                break;
            case 6: this.setPostIdCol("seller_community_post_id");
                break;
            default: throw new IllegalBoardType("유효하지 않은 게시글 타입");
        }
    }
}