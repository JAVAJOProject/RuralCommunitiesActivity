import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ResetBtn.css';

export default function ResetBtn({ text, link, imgSrc,onClick }) {
  const navigate = useNavigate();

  return (

      <button className="resetBtn"
        onClick={onClick}>{text}</button>
    );
  }
  
