import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MypageMemberEventBtn.css'

export default function MypageMemberEventBtn({ text, link }) {
  const navigate = useNavigate();

  return (
    <button
		className='mypageMemberEventBtn'
      onClick={() => {
        navigate(link);
      }}
    >
      {text}
    </button>
  );
}
