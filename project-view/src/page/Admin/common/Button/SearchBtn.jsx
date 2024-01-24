import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBtn.css';

export default function SearchBtn({ type, text, link }) {
  const navigate = useNavigate();

  return (
    <button className="searchBtn"
      type={type}
      // onClick={() => {
      //   navigate(link)}}
      >{text}</button>
  );
}
