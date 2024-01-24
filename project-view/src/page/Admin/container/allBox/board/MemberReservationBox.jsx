import React, {useState} from 'react';

import MemberReservationSearchBox from '../../searchBox/board/MemberReservationSearchBox';
import MemberReservationBottomBox from '../../bottomBox/board/MemberReservationBottomBox';



export default function MemberReservationBox() {

    const [reservationForMemberSearchData , setReservationForMemberSearchData] = useState([]);
    const [cntForReservationMember , setCntForReservationMember] = useState(0);
  
    //검색데이터를 출력할 bottom 으로 전달
    const handleCallbackForMemberList = (data, cnt) => {
      setReservationForMemberSearchData(data);
      setCntForReservationMember(cnt);
    };
  
    return (
      <div>
      <MemberReservationSearchBox searchData={handleCallbackForMemberList} />
        <br />
      <MemberReservationBottomBox tableMemberData={reservationForMemberSearchData} resulltCnt={cntForReservationMember} />
      </div>
    );
  }