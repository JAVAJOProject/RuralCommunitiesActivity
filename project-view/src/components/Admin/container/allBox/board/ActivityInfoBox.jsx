import React, { useState } from 'react';

import ActivitySearchBox from '../../searchBox/board/TotalActivityInfoSearchBox';
import ActivityBottomBox from '../../bottomBox/board/ActivityBottomBox';

export default function ActivityInfoBox() {
  const [activitySearchData, setActivitySearchData] = useState([]);
  const [cntForActivity, setCntForActivity] = useState(0);
  const [requestPageForTotalActivity, setRequestPageForTotalActivity] =
    useState(1);
  const [totalPageForTotalActivity, setTotalPageForTotalActivity] = useState(1);

  const handleCallbackForTotalActivity = (data, cnt, ttlPage) => {
    setActivitySearchData(data);
    setCntForActivity(cnt);
    setTotalPageForTotalActivity(ttlPage);
  };

  const handleCallbackForTotalActivityPage = (prePage) => {
    setRequestPageForTotalActivity(prePage);
  };

  return (
    <div>
      <ActivitySearchBox
        searchData={handleCallbackForTotalActivity}
        requestPage={requestPageForTotalActivity}
        setRequestPage={setRequestPageForTotalActivity}
        setTotalPage={setTotalPageForTotalActivity}
      />
      <br />
      <ActivityBottomBox
        pageHandler={handleCallbackForTotalActivityPage}
        tableMemberData={activitySearchData}
        resulltCnt={cntForActivity}
        requestPage={requestPageForTotalActivity}
        totalPage={totalPageForTotalActivity}
      />
    </div>
  );
}
