package com.javajo.sunshineRoad.model.dto.signUp;

import lombok.*;
import org.apache.ibatis.type.Alias;

@Alias("SellerAccountInfo")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SellerAccountInfoDTO {
    private int accountInfoId;
    private int bankInfoId;
    private String accountNumber;
    private String accountHolder;
    private String accountName;
}