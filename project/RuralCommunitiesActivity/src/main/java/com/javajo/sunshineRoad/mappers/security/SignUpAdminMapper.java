package com.javajo.sunshineRoad.mappers.security;

import com.javajo.sunshineRoad.model.dto.security.UserAdminDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SignUpAdminMapper {
    public int isExistingAdmin(String email);
    public int insertAdmin(UserAdminDTO adminDTO);
}