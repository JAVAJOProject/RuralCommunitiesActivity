import React from 'react';
import RecActOrderText from './RecActOrderText';
import './RecActOrderBox.css';

export default function RecActOrderBox({ orders }) {
  return (
    <div className="recActOrderBox">
      {orders.map((item) => (
        <RecActOrderText order={item} />
      ))}
    </div>
  );
}
