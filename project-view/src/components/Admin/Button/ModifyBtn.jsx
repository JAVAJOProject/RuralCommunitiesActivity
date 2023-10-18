import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ModifyBtn.css';

export default function ModifyBtn({ text, link, imgSrc }) {
  const navigate = useNavigate();
  return (

    <button className="modifyBtn"
      onClick={() => {
        navigate(link);
      }}>{text}</button>
  );
}

