import React, { useState } from 'react';

import AccessStatisticsSearchBox from '../../searchBox/board/AccessStatisticsSearchBox';
import AccessStatisticsBottomBox from '../../bottomBox/board/AccessStatisticsBottomBox';

export default function AccessStatisticsBox() {
  const [accessStatisticsSearchData, setAccessStatisticsSearchData] = useState(
    []
  );
  const [cntForAccessStatistics, setCntForAccessStatistics] = useState(0);

  //검색데이터를 출력할 bottom 으로 전달
  const handleCallbackForMemberList = (data, cnt) => {
    setAccessStatisticsSearchData(data);
    setCntForAccessStatistics(cnt);
  };

  return (
    <div>
      <AccessStatisticsSearchBox searchData={handleCallbackForMemberList} />
      <br />
      <AccessStatisticsBottomBox
        tableMemberData={accessStatisticsSearchData}
        resulltCnt={cntForAccessStatistics}
      />
    </div>
  );
}
