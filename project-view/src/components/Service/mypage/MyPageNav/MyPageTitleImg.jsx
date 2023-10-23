import React from 'react';

export default function MyPageTitleImg({ imgSrc, className }) {
  return (
    <div>
      <img className={className} src={imgSrc} />
    </div>
  );
}
