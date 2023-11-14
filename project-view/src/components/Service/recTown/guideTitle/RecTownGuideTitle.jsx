import React from 'react';
import './RecTownGuideTitle.css';
import { useNavigate } from 'react-router-dom';

export default function RecTownGuideTitle({ imgSrc, mainTitle, subtitle }) {
  const navigate = useNavigate();

  return (
    <div className="recTownGuideTitle">
      <div
        onClick={() => {
          navigate('/app/recommendation/villageGuide/region/filter?order=date');
          window.location.reload();
        }}
      >
        <img src={imgSrc} alt="" />
        <h2>{mainTitle}</h2>
      </div>
      <p>{subtitle}</p>
    </div>
  );
}
