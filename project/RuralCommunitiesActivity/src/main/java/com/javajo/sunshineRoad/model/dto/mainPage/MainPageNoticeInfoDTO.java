package com.javajo.sunshineRoad.model.dto.mainPage;

import lombok.*;
import org.apache.ibatis.type.Alias;

@Alias("MainPageNoticeInfo")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MainPageNoticeInfoDTO {
    private int noticeId;
    private String noticeTypeName;
    private String noticeTitle;
    private String noticeDateCreated;
}