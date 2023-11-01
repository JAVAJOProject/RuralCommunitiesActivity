import React from 'react';
import AccommodationTdRegion from './AccommodationTdRegion';
import AccommodationTdText from './AccommodationTdText';
import AccommodationTdYN from './AccommodationTdYN';

export default function AccommodationTbody({ tbodyData }) {
  return (
    <tbody>
      {tbodyData.map((item) => {
        const { sido, sigungu, name, brunch, internet, payment } = item;
        return (
          <tr key={`${sido}+${sigungu}+${name}`}>
            <AccommodationTdRegion sido={sido} sigungu={sigungu} />
            <AccommodationTdText text={name} />
            <AccommodationTdYN data={brunch} />
            <AccommodationTdYN data={internet} />
            <AccommodationTdYN data={payment} />
          </tr>
        );
      })}
    </tbody>
  );
}
