import React from 'react';
import TotalActivityNavBox from './TotalActivityNavBox';
import './TotalActivityNav.css';

export default function TotalActivityNav({ navContents }) {
  return (
    <div className="totalActivityNav">
      {navContents.map((nav) => (
        <TotalActivityNavBox text={nav.text} link={nav.link} />
      ))}
    </div>
  );
}
