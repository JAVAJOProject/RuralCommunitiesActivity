import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TotalReservationBtn.css';

export default function TotalReservationBtn({ text, link, imgSrc }) {
  const navigate = useNavigate();

  return (
    <div
      className="totalReservationBtn"
      onClick={() => {
        navigate(link);
        window.scrollTo(0, 0);
      }}
    >
      <img src={imgSrc} alt="" />
      <p>{text}</p>
    </div>
  );
}
