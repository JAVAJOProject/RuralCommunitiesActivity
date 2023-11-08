import React from 'react';
import './CommunityWritingBtn.css';
import { useNavigate } from 'react-router-dom';

export default function CommunityWritingBtn({ imgSrc, text, link }) {
  const navigate = useNavigate();

  return (
    <div
      className="communityWritingBtn"
      onClick={() => {
        navigate(link);
      }}
    >
      <img src={imgSrc} alt="" />
      <p>{text}</p>
    </div>
  );
}
