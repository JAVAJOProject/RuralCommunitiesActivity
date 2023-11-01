import React from 'react';
import './AccommodationTable.css';
import AccommodationThead from './AccommodationThead';
import AccommodationTbody from './AccommodationTbody';

export default function AccommodationTable({ theadText, tbodyData }) {
  return (
    <table className="accommodationTable">
      <AccommodationThead theadText={theadText} />
      <AccommodationTbody tbodyData={tbodyData} />
    </table>
  );
}
