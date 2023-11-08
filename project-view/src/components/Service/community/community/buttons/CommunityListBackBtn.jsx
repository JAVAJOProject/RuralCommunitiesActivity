import React from 'react';
import './CommunityListBackBtn.css';
import { useNavigate } from 'react-router-dom';

export default function CommunityListBackBtn({ text, style }) {
  const navigate = useNavigate();

  return (
    <button
      className="communityListBackBtn"
      onClick={() => {
        navigate(-1);
      }}
      style={style}
    >
      <p>{text}</p>
    </button>
  );
}
