import React, {useState} from 'react';

import SellerReservationSearchBox from '../../searchBox/board/SellerReservationSearchBox';
import SellerReservationBottomBox from '../../bottomBox/board/SellerReservationBottomBox';



export default function SellerReservationBox() {

    const [reservationForSellerSearchData , setReservationForSellerSearchData] = useState([]);
    const [cntForReservationSeller , setCntForReservationSeller] = useState(0);
  
    //검색데이터를 출력할 bottom 으로 전달
    const handleCallbackForMemberList = (data, cnt) => {
      setReservationForSellerSearchData(data);
      setCntForReservationSeller(cnt);
    };
  
    return (
      <div>
      <SellerReservationSearchBox searchData={handleCallbackForMemberList} />
        <br />
      <SellerReservationBottomBox tableMemberData={reservationForSellerSearchData} resulltCnt={cntForReservationSeller} />
      </div>
    );
  }