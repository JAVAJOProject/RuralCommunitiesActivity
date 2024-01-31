import React from 'react';
import './CalenderSpring.css';

export default function CalenderSpring({ springCnt }) {
  const springPcs = springCnt ? parseInt(springCnt, 10) : 1;

  const array = [];
  for (let i = 0; i < springPcs; i++) {
    array.push(<div key={i} className="calenderSpringA"></div>);
  }

  return <>{array}</>;
}
