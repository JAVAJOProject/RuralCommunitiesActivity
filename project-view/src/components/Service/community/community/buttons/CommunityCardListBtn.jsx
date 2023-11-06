import React from 'react';
import './CommunityListBtn.css'

export default function CommunityCardListBtn({ active }) {
  return (
    <div className='communityListBtn'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
      >
        <rect
          x="0.71582"
          y="0.9375"
          width="10.7108"
          height="10.7108"
          rx="2"
          fill={active ? '#78D6007D' : '#D6D6D6'}
        />
        <rect
          x="14.3105"
          y="0.9375"
          width="10.7108"
          height="10.7108"
          rx="2"
          fill={active ? '#78D6007D' : '#D6D6D6'}
        />
        <rect
          x="0.71582"
          y="14.5312"
          width="10.7108"
          height="10.7108"
          rx="2"
          fill={active ? '#78D6007D' : '#D6D6D6'}
        />
        <rect
          x="14.3105"
          y="14.5312"
          width="10.7108"
          height="10.7108"
          rx="2"
          fill={active ? '#78D6007D' : '#D6D6D6'}
        />
      </svg>
    </div>
  );
}
