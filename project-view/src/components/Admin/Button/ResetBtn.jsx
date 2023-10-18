import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ResetBtn.css';

export default function ResetBtn({ text, link, imgSrc }) {
  const navigate = useNavigate();

  return (

      <button className="resetBtn"
        onClick={() => {
          navigate(link);
        }}>{text}</button>
    );
  }
  
