package com.javajo.sunshineRoad.model.dto.signUp;

import lombok.*;
import org.apache.ibatis.type.Alias;

@Alias("BankList")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BankListDTO {
    private int bankInfoId;
    private String bankName;
}