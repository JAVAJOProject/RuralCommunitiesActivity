import React from 'react';
import './KeywordMainTitle.css';
import { useNavigate } from 'react-router-dom/dist';

export default function KeywordMainTitle({ contents }) {
  const navigate = useNavigate();
  const { mainTitle, subtitle, imgSrc } = contents;

  return (
    <div
      className="keywordMainTitle"
      onClick={() => {
        navigate('/app/recommendation/keywordActivity/filter?order=최신순');
      }}
    >
      <p>{mainTitle}</p>
      <img src={imgSrc} alt="" />
      <p>{subtitle}</p>
    </div>
  );
}
