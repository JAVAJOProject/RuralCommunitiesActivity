package com.javajo.sunshineRoad.model.service.impl.reservation;

import org.springframework.stereotype.Service;
import com.javajo.sunshineRoad.model.dao.reservation.RegReservationDAO;
import com.javajo.sunshineRoad.model.dto.reservation.ReservationContentDTO;
import com.javajo.sunshineRoad.model.service.IService.reservation.RegReservationService;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class RegReservationServiceImpl implements RegReservationService {

    private final RegReservationDAO regReservationDAO;
    
    @Override
    public int addReservation(ReservationContentDTO reservationContentDTO) {
        int success = 0;

        regReservationDAO.addPaymentData(reservationContentDTO);
        int paymentId = regReservationDAO.getPaymentId();
        reservationContentDTO.setPaymentId(paymentId);

        success = regReservationDAO.addReservation(reservationContentDTO);
        int result = regReservationDAO.addToActivityCustomerList(reservationContentDTO);

        if (success * result == 1) {
        	return success;
        }
        return success * result;
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
    public int deleteReservation(ReservationContentDTO reservationContentDTO) {
    	int success = 0;

        success = regReservationDAO.deleteReservation(reservationContentDTO.getReservationId());
        int result = regReservationDAO.deleteFromActivityCustomerList(reservationContentDTO);
  
        if (success * result == 1) {
            return success;
        }
        return success * result;
    }
}