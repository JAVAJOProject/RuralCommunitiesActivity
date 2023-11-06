import React from 'react';
import './MypageListBtn.css';
import { useNavigate } from 'react-router-dom';

export default function MypageListBtn({ imgSrc, text, link }) {
  const navigate = useNavigate();

  return (
    <div
      className="mypageListBtn"
      onClick={() => {
        navigate(link);
      }}
    >
      <img src={imgSrc} alt="" />
      <p>{text}</p>
    </div>
  );
}
