import React, { useState, useEffect } from 'react';
import { useImmer } from 'use-immer';
import { fetchDataGET } from '../../../../../config/ApiService';

import AnalyticsBox from '../../../common/box/analyticsBox/AnalyticsBox';

const graphUnit = 10;
const graphSampleData = [
  {
    key: 1,
    category: '농사',
    total: 10,
  },
  {
    key: 2,
    category: '어촌',
    total: 50,
  },
  {
    key: 3,
    category: '전통',
    total: 90,
  },
  {
    key: 4,
    category: '기타',
    total: 30,
  },
  {
    key: 5,
    category: '농사',
    total: 10,
  },
  {
    key: 6,
    category: '어촌',
    total: 50,
  },
  {
    key: 7,
    category: '전통',
    total: 90,
  },
  {
    key: 8,
    category: '기타',
    total: 30,
  },
];

let now = new Date();
let thisMonth = now.getMonth() + 1;
let year = now.getFullYear();
let month = 10;

export default function AnalyticsGraph() {
  const [graphDataMain, updateGraphDataMain] = useImmer([]);

  //일별 예약건수
  useEffect(() => {
    fetchReservationForDays();
  }, [month]);

  const fetchReservationForDays = async () => {
    try {
      const requestDataForReservationDays = await fetchDataGET(
        `/admin/board/statistics/reservation/theme/${month}/${year}`
      );

      if (requestDataForReservationDays !== undefined) {
        updateGraphDataMain((draft) => {
          draft.length = 0;
          requestDataForReservationDays.forEach((item) => {
            draft.push({
              ...item,
            });
          });
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AnalyticsBox
      graphName="테마별 예약건수 통계 그래프"
      graphNameSt={{
        background: '#FFCC48',
        marginBottom: '3rem',
        marginLeft: '22rem',
      }}
      graphUnit={graphUnit}
      graphData={graphDataMain}
      graphCategory={graphDataMain}
    ></AnalyticsBox>
  );
}
