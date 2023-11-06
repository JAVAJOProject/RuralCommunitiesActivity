package com.javajo.sunshineRoad.model.dto.common.mem;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.apache.ibatis.type.Alias;

@Alias("MemInfoToSearch")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MemInfoDTO {
    private int memId;
    private int memTypeId;
    private String memIdCol;
    @JsonProperty
    private int uId;
    @JsonProperty
    private int sId;

    public void setMemTypeId(int memTypeId) {
        this.memTypeId = memTypeId;

        this.setMemIdCol(memTypeId);
    }

    public void setMemIdCol(String memIdCol) {
        this.memIdCol = memIdCol;
    }
    public void setMemIdCol(int memTypeId) throws IllegalArgumentException {
        switch (memTypeId) {
            case 1:
                this.setMemIdCol("u_id");
                break;
            case 2:
                this.setMemIdCol("s_id");
                break;
            default:
                throw new IllegalArgumentException("유효하지 않은 이용자 타입");
        }
    }
}