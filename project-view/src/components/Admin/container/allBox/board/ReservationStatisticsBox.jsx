import React, { useState } from 'react';

import ReservationStatisticsSearchBox from '../../searchBox/board/ReservationStatisticsSearchBox';
import ReservationStatisticsBottomBox from '../../bottomBox/board/ReservationStatisticsBottomBox';

export default function ReservationStatisticsBox() {
  const [reservationSearchData, setReservationSearchData] = useState([]);
  const [cntForReservation, setCntForReservation] = useState(0);

  //검색데이터를 출력할 bottom 으로 전달
  const handleCallbackForMemberList = (data, cnt) => {
    setReservationSearchData(data);
    setCntForReservation(cnt);
  };

  return (
    <div>
      <ReservationStatisticsSearchBox
        searchData={handleCallbackForMemberList}
      />
      <br />
      <ReservationStatisticsBottomBox
        tableMemberData={reservationSearchData}
        resulltCnt={cntForReservation}
      />
    </div>
  );
}
