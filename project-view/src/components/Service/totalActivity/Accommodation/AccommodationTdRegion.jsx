import React from 'react';
import './AccommodationTdRegion.css'

export default function AccommodationTdRegion({ sido, sigungu }) {
  let textSido;
  if (sido.length >= 5 || sido.length < 4) {
    textSido = sido.substring(0, 2);
  } else if (sido.length === 4) {
    textSido = sido[0] + sido[2];
  }
  const textSigungu = sigungu.substring(0, sigungu.length - 1);
  const region = `${textSido} ${
    textSigungu.length === 1 ? textSigungu + '(구)' : textSigungu
  }`;

  return <td className='accommodationTdRegion'>{region}</td>;
}
