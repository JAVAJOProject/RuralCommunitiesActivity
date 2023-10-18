package com.javajo.sunshineRoad.model.service.impl.reservation;

import org.springframework.stereotype.Service;
import com.javajo.sunshineRoad.model.dao.reservation.RegReservationDAO;
import com.javajo.sunshineRoad.model.dto.reservation.ReservationContentDTO;
import com.javajo.sunshineRoad.model.service.IService.reservation.RegReservationService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RegReservationServiceImpl implements RegReservationService {

    private final RegReservationDAO regReservationDAO;
    
    @Override
    public int addReservation(ReservationContentDTO reservationContentDTO) {
        int success = 0;

        success = regReservationDAO.addReservation(reservationContentDTO);

        if (success < 1) {
        	return success;
        }
        return success;
    }

    @Override
    public int updateReservation(ReservationContentDTO reservationContentDTO) {
        int success = 0;

        success = regReservationDAO.updateReservation(reservationContentDTO);
       
        if (success < 1) {
        	return success;
        }
        return success;
    }
    
    @Override
    public int deleteReservation(int rId) {
    	int success = 0;

        success = regReservationDAO.deleteReservation(rId);
  
        if (success < 1) {
            return success;
        }
        return success;
    }
}