package com.javajo.sunshineRoad.model.service.impl.signUp;

import com.javajo.sunshineRoad.model.dao.signUp.SignUpDAO;
import com.javajo.sunshineRoad.model.dto.signUp.SignUpMemberDTO;
import com.javajo.sunshineRoad.model.service.IService.signUp.RegisterMemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RegisterMemberServiceImpl implements RegisterMemberService {
    private final SignUpDAO signUpDAO;

    public void registerMember(SignUpMemberDTO signUpMember) {
        signUpDAO.insertMember(signUpMember);
    }
}