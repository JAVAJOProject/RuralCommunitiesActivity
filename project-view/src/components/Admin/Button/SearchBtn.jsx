import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBtn.css';

export default function SearchBtn({ text, link }) {
  const navigate = useNavigate();

  return (
    <button className="searchBtn"
      onClick={() => {
        navigate(link);
      }}>{text}</button>
  );
}
