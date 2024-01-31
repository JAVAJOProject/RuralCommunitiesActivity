import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CloseBtn.css';

export default function CloseBtn({ type, text, link, imgSrc, goBackA }) {
  const navigate = useNavigate();
  return (
    <button className="CloseBtn" type={type} onClick={goBackA}>
      {text}
    </button>
  );
}
