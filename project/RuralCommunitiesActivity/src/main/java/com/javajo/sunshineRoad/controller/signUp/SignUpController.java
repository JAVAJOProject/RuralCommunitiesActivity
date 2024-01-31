package com.javajo.sunshineRoad.controller.signUp;

import com.javajo.sunshineRoad.model.dto.common.ResponseDTO;
import com.javajo.sunshineRoad.model.dto.signUp.BankListDTO;
import com.javajo.sunshineRoad.model.dto.signUp.SellerAccountInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.signUp.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.javajo.sunshineRoad.model.dto.signUp.SignUpMemberDTO;
import com.javajo.sunshineRoad.model.dto.signUp.SignUpSellerDTO;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RestController
@RequestMapping("/signUp")
@RequiredArgsConstructor
public class SignUpController {
    private final CheckIsMemberService checkIsMemberService;
    private final RegisterMemberService registerMemberService;
    private final CheckIsSellerService checkIsSellerService;
    private final RegisterSellerAccountInfoService registerSellerAccountInfoService;
    private final RegisterSellerService registerSellerService;


    private final GetBankListService getBankListService;

    @PostMapping("/check/member")
    public ResponseEntity<String> checkMember(@RequestBody SignUpMemberDTO signUpMember) {
        boolean isMember = checkIsMemberService.isMember(signUpMember.getUEmail());

        if (isMember) {
            return ResponseEntity.badRequest().body("already exists");
        } else {
            return ResponseEntity.ok("valid email");
        }
    }

    @PostMapping("/register/member")
    public ResponseEntity<String> registerMember(@RequestBody SignUpMemberDTO signUpMemberDTO) {
        boolean isMember = checkIsMemberService.isMember(signUpMemberDTO.getUEmail());

        if (isMember) {
            return ResponseEntity.badRequest().body("already exists");
        }

        registerMemberService.registerMember(signUpMemberDTO);
        return ResponseEntity.ok("Member registered successfully");
    }

    @PostMapping("/check/seller")
    public ResponseEntity<String> checkSeller(@RequestBody SignUpSellerDTO signUpSellerDTO) {
        boolean isSeller = checkIsSellerService.isSeller(signUpSellerDTO.getSEmail());

        if (isSeller) {
            return ResponseEntity.badRequest().body("already exists");
        } else {
            return ResponseEntity.ok("valid email");
        }
    }

    @PostMapping("/register/seller/info")
    public ResponseEntity<String> registerSeller(@RequestBody SignUpSellerDTO signUpSellerDTO) {
        boolean isSeller = checkIsSellerService.isSeller(signUpSellerDTO.getSEmail());

        if (isSeller) {
            return ResponseEntity.badRequest().body("already exists");
        }

        registerSellerService.registerSeller(signUpSellerDTO);
        return ResponseEntity.ok("Seller registered successfully");
    }

    @PostMapping("/register/seller/account/{sEmail}")
    public ResponseEntity<ResponseDTO> registerSellerAccount(@RequestBody SellerAccountInfoDTO sellerAccountInfo, @PathVariable String sEmail) {
        boolean isSeller = checkIsSellerService.isSeller(sEmail);

        if (!isSeller) {
            ResponseDTO response = ResponseDTO.builder().errorMsg("Seller should be registered first").build();
            return ResponseEntity.badRequest().body(response);
        }

        int registeredId = registerSellerAccountInfoService.registerSellerAccountInfo(sellerAccountInfo);
        ResponseDTO response = ResponseDTO.builder().resultMsg("Account info is registered successfully").data(registeredId).build();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/bank-list")
    public ResponseEntity<List<BankListDTO>> getBankList() {
        List<BankListDTO> bankList = getBankListService.getBankList();
        return ResponseEntity.ok(bankList);
    }
}