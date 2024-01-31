import React, { useState, useEffect } from 'react';
import './MainStatus.css';

import { fetchOneContentGET } from '../../../../../config/ApiService';

const todayUsers = 5;
export default function MainStatus() {
  const [totalVisitors, setTotalVisitors] = useState(0);

  //누적 접속자수
  useEffect(() => {
    fetchTotalVisitors();
  }, [totalVisitors]);

  const fetchTotalVisitors = async () => {
    try {
      const requestDataForTTLVisitors = await fetchOneContentGET(
        '/admin/board/statistics/visitors/total'
      );

      if (requestDataForTTLVisitors !== undefined) {
        setTotalVisitors(requestDataForTTLVisitors);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mainStatusA">
      누적 접속자 수 : {totalVisitors}명 , 금일 접속자 수 : {todayUsers}명
    </div>
  );
}
