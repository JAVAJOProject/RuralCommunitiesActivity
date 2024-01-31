import React, { useState } from 'react';

import RecActivitySearchBox from '../../searchBox/board/RecActivitySearchBox';
import RecActivityBottomBox from '../../bottomBox/board/RecActivityBottomBox';

export default function RecActivityBox() {
  const [RecActivitySearchData, setRecActivitySearchData] = useState([]);
  const [cntForRecActivity, setCntForRecActivity] = useState(0);

  //검색데이터를 출력할 bottom 으로 전달
  const handleCallbackForMemberList = (data, cnt) => {
    setRecActivitySearchData(data);
    setCntForRecActivity(cnt);
  };

  return (
    <div>
      <RecActivitySearchBox searchData={handleCallbackForMemberList} />
      <br />
      <RecActivityBottomBox
        tableMemberData={RecActivitySearchData}
        resulltCnt={cntForRecActivity}
      />
    </div>
  );
}
