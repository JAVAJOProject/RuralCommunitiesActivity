import React, { useEffect } from 'react';

import CardListContentBox from '../../../../components/Service/common/UI/CardListContentBox';
import CardBoxTitleSet from '../../../../components/Service/common/UI/CardBoxTitleSet/CardBoxTitleSet';
import MypageSellerAnalyticsLineChart from '../../../../components/Service/mypage/Provider/analytics/Line/MypageSellerAnalyticsLineChart';
import MypageSellerAnalyticsCalendarBox from '../../../../components/Service/mypage/Provider/analytics/Calendar/MypageSellerAnalyticsCalendarBox';
import MypageSellerAnalyticsBarChart from '../../../../components/Service/mypage/Provider/analytics/Bar/MypageSellerAnalyticsBarChart';
import MypageSellerAnalyticsPieBox from '../../../../components/Service/mypage/Provider/analytics/Pie/MypageSellerAnalyticsPieBox';

import analyticsTitleImg from '../../../../view_img/Service/myPage/provider/analytics.jpg';
import { useImmer } from 'use-immer';

const defaultContents = {
  titles: {
    text: '서비스 통계',
    imgSrc: analyticsTitleImg,
    backgroundColor: '#CEE8F6',
  },
  subtitle: {
    chart1: '예약자 대비 취소자',
    chart2: { main: '하루 예약자 현황', sub: '오늘 예약 건수' },
    chart3: {
      main: '이용자 연령층 비교',
      sub: ['연령대1', '연령대2', '연령대3', '연령대4', '연령대5', '연령대6'],
    },
    chart4: {
      main: '이용 통계',
      sub: [
        '재방문률',
        '만족도',
        '성별',
        '방문 대비 리뷰 작성수',
        '조회수 대비 예약자',
      ],
    },
  },
};

const initialLineData = [
  {
    id: '예약자',
    data: [
      {
        x: `${new Date().getMonth() - 4}월`,
        y: 0,
      },
      {
        x: `${new Date().getMonth() - 3}월`,
        y: 0,
      },
      {
        x: `${new Date().getMonth() - 2}월`,
        y: 0,
      },
      {
        x: `${new Date().getMonth() - 1}월`,
        y: 0,
      },
      {
        x: `${new Date().getMonth()}월`,
        y: 0,
      },
      {
        x: `${new Date().getMonth() + 1}월`,
        y: 0,
      },
    ],
  },
  {
    id: '취소자',
    data: [
      {
        x: `${new Date().getMonth() - 4}월`,
        y: 0,
      },
      {
        x: `${new Date().getMonth() - 3}월`,
        y: 0,
      },
      {
        x: `${new Date().getMonth() - 2}월`,
        y: 0,
      },
      {
        x: `${new Date().getMonth() - 1}월`,
        y: 0,
      },
      {
        x: `${new Date().getMonth()}월`,
        y: 0,
      },
      {
        x: `${new Date().getMonth() + 1}월`,
        y: 0,
      },
    ],
  },
];

const lineTest = {
  reservation: [18, 7, 13, 20, 17, 25],
  cancel: [5, 10, 3, 7, 4, 2],
};
const calendarTest = [
  4, 20, 3, 10, 6, 8, 14, 20, 10, 30, 25, 30, 30, 20, 28, 26, 20, 18, 20, 30,
  36, 29, 27, 30, 36, 40, 41, 42, 41, 42,
];
const barTest = [0.5, 0.7, 0.3, 0.8, 0.15, 0.9];
const pieTest = [0.75, 0.8, 0.56, 0.648, 0.94];

export default function MypageSellerAnalyticsPage() {
  const [lineData, updateLineData] = useImmer(initialLineData);
  const [calendarData, updateCalendarData] = useImmer([]);
  const [barData, updateBarData] = useImmer([]);
  const [pieData, updatePieData] = useImmer([]);

  useEffect(() => {
    updateLineData((draft) => {
      draft[0].data.forEach((item, index) => {
        item.y = lineTest.reservation[index];
      });
      draft[1].data.forEach((item, index) => {
        item.y = lineTest.cancel[index];
      });
    });
    updateCalendarData((draft) => {
      draft.length = 0;
      calendarTest.map((item) => {
        draft.push(item);
      });
    });
    updateBarData((draft) => {
      draft.length = 0;
      barTest.map((item) => {
        draft.push(item);
      });
    });
    updatePieData((draft) => {
      draft.length = 0;
      pieTest.map((item) => {
        draft.push(item);
      });
    });
  }, []);

  const {
    titles,
    subtitle: { chart1, chart2, chart3, chart4 },
  } = defaultContents;

  return (
    <CardListContentBox style={{ marginBottom: '4rem' }}>
      <CardBoxTitleSet
        imgSrc={titles.imgSrc}
        text={titles.text}
        circleColor={titles.backgroundColor}
        isContain={true}
      />
      <div style={{ display: 'flex', marginTop: '2rem' }}>
        <MypageSellerAnalyticsLineChart title={chart1} data={lineData} />
        <MypageSellerAnalyticsCalendarBox
          mainTitle={chart2.main}
          subtitle={chart2.sub}
          data={calendarData}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <MypageSellerAnalyticsBarChart
          mainTitle={chart3.main}
          subtitle={chart3.sub}
          data={barData}
        />
        <MypageSellerAnalyticsPieBox
          title={chart4.main}
          subtitles={chart4.sub}
          data={pieData}
        />
      </div>
    </CardListContentBox>
  );
}
