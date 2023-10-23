import React from 'react';
import RatingDataTableBodyText from './RatingDataTableBodyText';
import RatingDataTableBodyMedal from './RatingDataTableBodyMedal';
import RatingDataTableBodyTopTown from './RatingDataTableBodyTopTown';

export default function RatingDataTableBody({
  tableBodySource,
  tableBodyData,
}) {
  return (
    <tbody>
      {tableBodyData.map((item) => {
        const {
          선정연도: standardYear,
          시도: sido,
          시군구: sigungu,
          마을이름: town,
          으뜸촌: topTown,
          체험: activity,
          음식: food,
          숙박: accommodation,
        } = item;
        return (
          <tr>
            <RatingDataTableBodyText
              regionSido={sido}
              regionSigungu={sigungu}
            />
            <RatingDataTableBodyText regionTown={town} />
            <RatingDataTableBodyTopTown
              isTopTown={topTown}
              imgSrc={tableBodySource.topTownOfficial}
            />
            <RatingDataTableBodyMedal
              gradeNo={activity}
              medals={tableBodySource.medals}
            />
            <RatingDataTableBodyMedal
              gradeNo={food}
              medals={tableBodySource.medals}
            />
            <RatingDataTableBodyMedal
              gradeNo={accommodation}
              medals={tableBodySource.medals}
            />
          </tr>
        );
      })}
    </tbody>
  );
}
