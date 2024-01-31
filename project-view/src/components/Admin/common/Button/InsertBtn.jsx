import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InsertBtn.css';

export default function InsertBtn({ link }) {
  const navigate = useNavigate();

  return (
    <button
      className="insertBtn"
      onClick={() => {
        navigate(link);
      }}
    >
      등록하기
    </button>
  );
}
