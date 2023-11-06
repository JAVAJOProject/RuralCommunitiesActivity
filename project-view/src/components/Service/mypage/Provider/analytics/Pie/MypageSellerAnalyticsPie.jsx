import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import './MypageSellerAnalyticsPie.css';

export default function MypageSellerAnalyticsPie({ title, figure }) {
  const [figureFill, setFigureFill] = useState(0);

  useEffect(() => {
    if (figureFill < Math.round(figure * 100)) {
      setFigureFill((prev) => prev + 1);
    }
  }, [figure, figureFill]);

  return (
    <div className="mypageSellerAnalyticsPie">
      <div
        style={{
          background: `conic-gradient(#fff 0% ${100 - figureFill}%, #29dbb0 ${
            100 - figureFill
          }% 100%)`,
        }}
      >
        <p>{Math.round(figureFill)}%</p>
      </div>
      <p>{title}</p>
    </div>
  );
}
