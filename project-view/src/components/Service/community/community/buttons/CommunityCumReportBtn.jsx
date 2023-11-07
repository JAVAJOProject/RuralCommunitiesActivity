import React, { useState } from 'react';
import './CommunityCumReportBtn.css';

export default function CommunityCumReportBtn({
  activeImgSrc,
  imgSrc,
  text,
  handleClick,
}) {
  const [active, setActive] = useState(false);

  return (
    <button className="communityCumReportBtn" onClick={handleClick}>
      <div>
        <img
          style={
            active
              ? { marginTop: '0.12rem', height: '2.005rem' }
              : { height: '2.125rem' }
          }
          src={active ? activeImgSrc : imgSrc}
          alt=""
          onPointerOver={() => {
            setActive(true);
          }}
          onPointerOut={() => {
            setActive(false);
          }}
        />
      </div>
      <p>{text}</p>
    </button>
  );
}
