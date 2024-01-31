package com.javajo.sunshineRoad.mappers.security;

import com.javajo.sunshineRoad.model.dto.security.UserAdminDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SignInAdminMapper {
    public UserAdminDTO findByAdminId(Long adminId);
    public UserAdminDTO findByAdminEmail(String adminEmail);
    public UserAdminDTO findByAdminRefreshToken(String refreshToken);
    public int updateAdminRefreshToken(UserAdminDTO admin);
}