import React from 'react';
import './RatingDataTable.css';
import RatingDataTableHead from './RatingDataTableHead';
import RatingDataTableBody from './RatingDataTableBody';

export default function RatingDataTable({
  tableHead,
  tableBodySource,
  tableBodyData,
}) {
  return (
    <table className="ratingDataTable">
      <RatingDataTableHead tableHead={tableHead} />
      <RatingDataTableBody tableBodySource={tableBodySource} tableBodyData={tableBodyData} />
    </table>
  );
}
