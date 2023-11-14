import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MypageMemberEventBtn.css';

export default function MypageMemberEventBtn({ text, link, handleClick }) {
  const navigate = useNavigate();

  return (
    <button
      className="mypageMemberEventBtn"
      onClick={
        link
          ? () => {
              navigate(link);
            }
          : handleClick
      }
    >
      {text}
    </button>
  );
}
