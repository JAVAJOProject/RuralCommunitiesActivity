import React from 'react';
import './MypageMemberFavoritesCard.css';
import { useNavigate } from 'react-router-dom';

export default function MypageMemberFavoritesCard({
  imgSrc,
  title,
  oneLiner,
  link,
}) {
  const navigate = useNavigate();

  return (
    <div
      className="mypageMemberFavoritesCard"
      onClick={() => {
        navigate(link);
        window.scrollTo(0, 0);
      }}
    >
      <img src={imgSrc} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{oneLiner}</p>
      </div>
    </div>
  );
}
