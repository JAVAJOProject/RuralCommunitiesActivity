import React from 'react';
import './MypageReservationBtn.css';
import { useNavigate } from 'react-router-dom';

export default function MypageReservationBtn({ btnContent, link, oneCheck }) {
  const navigate = useNavigate();

  if (oneCheck == 1) {
    // 체험 상세보기 하나일 때
    return (
      <button
        className="MypageReservationOneBtn"
        onClick={() => {
          navigate(link);
          window.scrollTo(0, 0);
        }}
      >
        <p>{btnContent}</p>
      </button>
    );
  } else {
    return (
      <button className="MypageReservationBtn">
        <p>{btnContent}</p>
      </button>
    );
  }
}
