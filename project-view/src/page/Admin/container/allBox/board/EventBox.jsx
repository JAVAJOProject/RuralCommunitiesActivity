import React, {useState} from 'react';

import EventSearchBox from '../../searchBox/board/EventSearchBox';
import EventBottomBox from '../../bottomBox/board/EventBottomBox';



export default function EventBox() {
    const [eventSearchData , setEventSearchData] = useState([]);
    const [cntForEvent , setCntForEvent] = useState(0);
  
    //검색데이터를 출력할 bottom 으로 전달
    const handleCallbackForMemberList = (data, cnt) => {
        setEventSearchData(data);
        setCntForEvent(cnt);
    };
  
    return (
      <div>
      <EventSearchBox searchData={handleCallbackForMemberList} />
        <br />
      <EventBottomBox tableMemberData={eventSearchData} resulltCnt={cntForEvent} />
      </div>
    );
  }