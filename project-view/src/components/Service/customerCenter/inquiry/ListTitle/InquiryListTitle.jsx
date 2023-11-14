import React from 'react';
import './InquiryListTitle.css';
import { useNavigate } from 'react-router-dom';

export default function InquiryListTitle({ imgSrc, text }) {
  const navigate = useNavigate();

  return (
    <div className="inquiryListTitle">
      <img
        src={imgSrc}
        alt=""
        onClick={() => {
          navigate('/app/customerService/inquiry/list');
          window.location.reload();
        }}
      />
      <p>{text}</p>
    </div>
  );
}
