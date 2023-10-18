package com.javajo.sunshineRoad.model.dto.common.view;

import com.javajo.sunshineRoad.exception.IllegalBoardType;
import lombok.*;
import org.apache.ibatis.type.Alias;

@Alias("ViewCount")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ViewCountDTO {
    private int viewCount;
    private int postId;
    private int postTypeId;
    private String postIdCol;
    private String viewCountCol;
    private String viewCountTbl;

    public void setPostTypeId(int postTypeId) {
        this.postTypeId = postTypeId;

        this.setPostIdCol(postTypeId);
        this.setViewCountCol(postTypeId);
        this.setViewCountTbl(postTypeId);
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

    public void setViewCountCol(String viewCountCol) {
        this.viewCountCol = viewCountCol;
    }
    public void setViewCountCol(int postTypeId) throws IllegalBoardType {
        switch (postTypeId) {
            case 1: this.setViewCountCol("a_view_cnt");
                break;
            case 2: this.setViewCountCol("rec_a_view_cnt");
                break;
            case 3: this.setViewCountCol("rec_t_view_cnt");
                break;
            case 4: this.setViewCountCol("event_view_cnt");
                break;
            case 5: this.setViewCountCol("community_view_cnt");
                break;
            case 6: this.setViewCountCol("community_view_cnt");
                break;
            default: throw new IllegalBoardType("유효하지 않은 게시글 타입");
        }
    }

    public void setViewCountTbl(String viewCountTbl) {
        this.viewCountTbl = viewCountTbl;
    }
    public void setViewCountTbl(int postTypeId) throws IllegalBoardType {
        switch (postTypeId) {
            case 1: this.setViewCountTbl("activity_post");
                break;
            case 2: this.setViewCountTbl("rec_activity_info");
                break;
            case 3: this.setViewCountTbl("rec_town_info");
                break;
            case 4: this.setViewCountTbl("event");
                break;
            case 5: this.setViewCountTbl("member_community");
                break;
            case 6: this.setViewCountTbl("seller_community");
                break;
            default: throw new IllegalBoardType("유효하지 않은 게시글 타입");
        }
    }
}