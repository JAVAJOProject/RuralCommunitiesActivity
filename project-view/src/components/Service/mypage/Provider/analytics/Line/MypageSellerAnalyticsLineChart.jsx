import React, { useState, useEffect } from 'react';
import './MypageSellerAnalyticsLineChart.css';
import { ResponsiveLine } from '@nivo/line';

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

export default function MypageSellerAnalyticsLineChart({ title, data }) {
  const [chartData, setChartData] = useState(initialLineData);

  useEffect(() => {
    let animation = setTimeout(() => setChartData(data), 20);

    return () => {
      clearTimeout(animation);
    };
  }, [data, chartData]);

  return (
    <div className="mypageSellerAnalyticsLineChart">
      <h2>{title}</h2>
      <div>
        <ResponsiveLine
          data={chartData}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: 0,
            legendPosition: 'middle',
          }}
          axisLeft={null}
          enableGridX={false}
          enableGridY={false}
          colors={['#61cdbb', '#f47560']}
          colorBy="index"
          pointSize={5}
          pointColor={{ from: 'color', modifiers: [] }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          theme={{
            fontFamily: 'SUITE Variable',
            legends: { text: { fontSize: '1rem', fontWeight: 700 } },
            axis: { legend: { text: { fontFamily: 'SUITE Variable' } } },
            annotations: { text: { fontFamily: 'SUITE Variable' } },
            labels: { text: { fontFamily: 'SUITE Variable' } },
            tooltip: { basic: { fontFamily: 'SUITE Variable' } },
          }}
        />
      </div>
    </div>
  );
}
