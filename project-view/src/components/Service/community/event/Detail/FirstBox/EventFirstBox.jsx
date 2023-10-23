import React from 'react';
import './EventFirstBox.css';
import EventFirstBoxMiniBox from './EventFirstBoxMiniBox';
import DetailYellowBoxUI from '../UI/DetailYellowBoxUI';

export default function EventFirstBox({ defaultContents, data }) {
  const [recruitT, participateT, maxPeopleT, placeT] = defaultContents;
  const {
    recruitStartDate,
    recruitEndDate,
    startDate,
    endDate,
    maxPeople,
    addr,
  } = data;

  return (
    <DetailYellowBoxUI
      style={{
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        padding: '1rem',
      }}
    >
      <div>
        <EventFirstBoxMiniBox
          imgSrc={recruitT.imgSrc}
          title={recruitT.title}
          content={{ recruitStartDate, recruitEndDate }}
          type="recruitDate"
        />
        <EventFirstBoxMiniBox
          imgSrc={maxPeopleT.imgSrc}
          title={maxPeopleT.title}
          content={{ maxPeople }}
          type="maxPeople"
        />
      </div>
      <div>
        <EventFirstBoxMiniBox
          imgSrc={participateT.imgSrc}
          title={participateT.title}
          content={{ startDate, endDate }}
          type="date"
        />
        <EventFirstBoxMiniBox
          imgSrc={placeT.imgSrc}
          title={placeT.title}
          content={{ addr }}
          type="addr"
        />
      </div>
    </DetailYellowBoxUI>
  );
}
