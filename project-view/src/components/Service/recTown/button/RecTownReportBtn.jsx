import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecTownReportBtn.css';

export default function RecTownReportBtn({ text }) {
  const navigate = useNavigate();

  return (
    <button
      className="recTownReportBtn"
      onClick={() => {
        navigate('/app/recommendation/villageGuide/report');
        window.scrollTo(0, 0);
      }}
    >
      {text}
    </button>
  );
}
