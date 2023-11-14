import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TotalActRegistrationBtn.css';

export default function TotalActRegistrationBtn({ text }) {
  const navigate = useNavigate();

  return (
    <button
      className="totalActRegistrationBtn"
      onClick={() => {
        navigate('/app/activity/registration');
        window.scrollTo(0, 0);
      }}
    >
      {text}
    </button>
  );
}
