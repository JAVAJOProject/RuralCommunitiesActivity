package com.javajo.sunshineRoad.model.service.impl.signUp;

import com.javajo.sunshineRoad.model.dao.signUp.SignUpDAO;
import com.javajo.sunshineRoad.model.service.IService.signUp.CheckIsMemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CheckIsMemberServiceImpl implements CheckIsMemberService {
    private final SignUpDAO signUpDAO;

    @Override
    public boolean isMember(String email) {
        return signUpDAO.isMember(email) != 0;
    }
}