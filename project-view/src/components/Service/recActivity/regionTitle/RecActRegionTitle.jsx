import React from 'react';
import './RecActRegionTitle.css';
import { useNavigate } from 'react-router-dom';

export default function RecActRegionTitle({ mainTitle, subtitle, imgSrc }) {
  const navigate = useNavigate();

  return (
    <div className="recActRegionTitle">
      <div
        onClick={() => {
          navigate('/app/recommendation/region/filter?order=date');
          window.location.reload();
          // window.location.replace(
          //   '/app/recommendation/region/filter?order=date'
          // );
        }}
      >
        <h2>{mainTitle}</h2>
        <img src={imgSrc} alt="" />
      </div>
      <p>{subtitle}</p>
    </div>
  );
}
