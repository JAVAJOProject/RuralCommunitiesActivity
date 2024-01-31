package com.javajo.sunshineRoad.model.service.impl.security;

import com.javajo.sunshineRoad.model.dao.security.SignUpAdminDAO;
import com.javajo.sunshineRoad.model.dao.signUp.SignUpDAO;
import com.javajo.sunshineRoad.model.dto.security.UserAdminDTO;
import com.javajo.sunshineRoad.model.dto.security.UserMemberDTO;
import com.javajo.sunshineRoad.model.dto.security.UserSellerDTO;
import com.javajo.sunshineRoad.model.dto.signUp.SellerAccountInfoDTO;
import com.javajo.sunshineRoad.model.dto.signUp.SignUpMemberDTO;
import com.javajo.sunshineRoad.model.dto.signUp.SignUpSellerDTO;
import com.javajo.sunshineRoad.model.service.IService.security.SignUpService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class SignUpServiceImpl implements SignUpService {
    private final PasswordEncoder passwordEncoder;
    private final SignUpDAO signUpDAO;
    private final SignUpAdminDAO signUpAdminDAO;

    private boolean isExistingUser(String email) {
        return signUpDAO.isMember(email) != 0 || signUpDAO.isSeller(email) != 0 || signUpAdminDAO.isExistingAdmin(email) != 0;
    }

    @Override
    public void signUp(UserMemberDTO memberDTO) throws Exception {
        if (isExistingUser(memberDTO.getUEmail())) {
            throw new Exception("existing member");
        }

        memberDTO.passwordEncode(passwordEncoder);
        SignUpMemberDTO signUpMemberDTO = SignUpMemberDTO.builder()
                .uName(memberDTO.getUName())
                .uEmail(memberDTO.getUEmail())
                .uNick(memberDTO.getUNick())
                .uPw(memberDTO.getUPw())
                .uTel(memberDTO.getUTel())
                .uMarketing(memberDTO.getUMarketing())
                .uGender(memberDTO.getUGender())
                .uBirth(memberDTO.getUBirth())
                .build();

        int result = signUpDAO.insertMember(signUpMemberDTO);

        if (result != 1) {
            throw new Exception("member registration failed");
        }
    }

    @Override
    public void signUp(UserSellerDTO sellerDTO, SellerAccountInfoDTO accountInfoDTO) throws Exception {
        if (isExistingUser(sellerDTO.getSEmail())) {
            throw new Exception("existing seller");
        }

        int resultAccount = signUpDAO.insertAccountInfo(accountInfoDTO);
        if (resultAccount != 1) {
            throw new Exception("seller registration failed");
        }

        int accountInfoId = signUpDAO.getAccountInfoId();
        sellerDTO.passwordEncode(passwordEncoder);
        SignUpSellerDTO signUpSellerDTO = SignUpSellerDTO.builder()
                .accountInfoId(accountInfoId)
                .sEmail(sellerDTO.getSEmail())
                .sComName(sellerDTO.getSComName())
                .sPw(sellerDTO.getSPw())
                .sTel(sellerDTO.getSTel())
                .sAddr(sellerDTO.getSAddr())
                .sRegNum(sellerDTO.getSRegNum())
                .sMarketingConsent(sellerDTO.getSMarketingConsent())
                .sRepName(sellerDTO.getSRepName())
                .sRegCertificateImg(sellerDTO.getSRegCertificateImg())
                .build();

        int resultSeller = signUpDAO.insertSeller(signUpSellerDTO);

        if (resultSeller != 1) {
            throw new Exception("seller registration failed");
        }
    }

    @Override
    public void signUp(UserAdminDTO adminDTO) throws Exception {
        if (isExistingUser(adminDTO.getAdminEmail())) {
            throw new Exception("existing admin");
        }

        adminDTO.passwordEncode(passwordEncoder);
        int result = signUpAdminDAO.insertAdmin(adminDTO);

        if (result != 1) {
            throw new Exception("admin registration failed");
        }
    }
}