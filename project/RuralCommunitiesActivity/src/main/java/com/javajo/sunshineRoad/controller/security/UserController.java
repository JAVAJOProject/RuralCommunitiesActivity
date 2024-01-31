package com.javajo.sunshineRoad.controller.security;

import com.javajo.sunshineRoad.model.dto.common.ResponseDTO;
import com.javajo.sunshineRoad.model.dto.security.UserAdminDTO;
import com.javajo.sunshineRoad.model.dto.security.UserMemberDTO;
import com.javajo.sunshineRoad.model.dto.security.UserSellerDTO;
import com.javajo.sunshineRoad.model.dto.signUp.SellerAccountInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.common.service.ImgPathToBase64Service;
import com.javajo.sunshineRoad.model.service.IService.security.SignUpService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {
    private final SignUpService signUpService;
    private final ImgPathToBase64Service imgPathToBase64Service;

    @PostMapping("/sign-up/member")
    public ResponseEntity<ResponseDTO> signUpMember(@RequestBody UserMemberDTO memberDTO) {
        ResponseDTO response = null;

        try {
            signUpService.signUp(memberDTO);
            response = ResponseDTO.builder().resultMsg("success").build();
        } catch (Exception e) {
            response = ResponseDTO.builder().errorMsg(e.getMessage()).build();
        }

        return ResponseEntity.ok(response);
    }
    @Transactional
    @PostMapping(value = "/sign-up/seller",
            consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE},
            produces = {"application/json; charset=utf-8"})
    public ResponseEntity<ResponseDTO> signUpSeller(@RequestPart(value = "files") MultipartFile file, @RequestPart(value = "seller") UserSellerDTO sellerDTO, @RequestPart(value = "account") SellerAccountInfoDTO accountInfo) {
        if (file.isEmpty()) {
            ResponseDTO response = ResponseDTO.builder().errorMsg("file is necessary").build();
            return ResponseEntity.badRequest().body(response);
        }

        try {
            String image = imgPathToBase64Service.convertBase64(file);
            sellerDTO.setSRegCertificateImg(image);

            signUpService.signUp(sellerDTO, accountInfo);
            ResponseDTO response = ResponseDTO.builder().resultMsg("success").build();
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ResponseDTO response = ResponseDTO.builder().errorMsg(e.getMessage()).build();
            return ResponseEntity.badRequest().body(response);
        }
    }
    @PostMapping("/sign-up/admin")
    public ResponseEntity<ResponseDTO> signUpAdmin(@RequestBody UserAdminDTO adminDTO) {
        ResponseDTO response = null;

        try {
            signUpService.signUp(adminDTO);
            response = ResponseDTO.builder().resultMsg("success").build();
        } catch (Exception e) {
            response = ResponseDTO.builder().errorMsg(e.getMessage()).build();
        }

        return ResponseEntity.ok(response);
    }

    @GetMapping("/jwt-test")
    public String jwtTest() {
        return "jwt-test request success";
    }
}