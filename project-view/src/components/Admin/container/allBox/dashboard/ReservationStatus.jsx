import React, {useState,useEffect} from 'react';
import { useImmer } from 'use-immer';
import { fetchDataGET } from '../../../../../config/ApiService';

import ReservationCalender from '../../../common/box/reservationBox/ReservationCalender';


let now = new Date();
let thisMonth = (now.getMonth())+1;
let year = (now.getFullYear());
let month = 10;

export default function ReservationStatus() {

    const [reservationForDays , updateReservationForDays] = useImmer([]);
    const [monthForReservation , setMonthForReservation] = useState(thisMonth);

//일별 예약건수
useEffect(() => {
    fetchReservationForDays();
},[month]);


const fetchReservationForDays = async () => {
    try {
      const requestDataForReservationDays = await fetchDataGET(
        `/admin/board/statistics/reservation/day/${month}/${year}`
      );
  
      if(requestDataForReservationDays !== undefined ) {
        updateReservationForDays((draft) => {
            draft.length = 0;
            requestDataForReservationDays.forEach((item) => {
              draft.push({
                ...item
              });
            });
          });
        }
      }catch(error){
        console.error(error);
      };
}

    return (

        <ReservationCalender ReservationName={`${month}월 예약 현황`} seeMore='1' springCnt='2' month={month} calenderData={reservationForDays}>
        </ReservationCalender>

    );
}

