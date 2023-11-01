import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UpdateBtn.css';

export default function UpdateBtn({ text, link, imgSrc, type }) {
  const navigate = useNavigate();
  return (

      <button className="UpdateBtn" type={type}
      >{text}</button>
    );
  }
  
