import React from 'react';
import './CommunityListBtn.css';

export default function CommunityListBarBtn({ active }) {
  return (
    <div className="communityListBtn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
      >
        <rect
          x="9.24219"
          y="0.9375"
          width="16.3508"
          height="6.62872"
          rx="2"
          fill={active ? '#78D6007D' : '#D6D6D6'}
        />
        <rect
          x="9.24219"
          y="9.77344"
          width="16.3508"
          height="6.62872"
          rx="2"
          fill={active ? '#78D6007D' : '#D6D6D6'}
        />
        <rect
          x="9.24219"
          y="18.6172"
          width="16.3508"
          height="6.62872"
          rx="2"
          fill={active ? '#78D6007D' : '#D6D6D6'}
        />
        <rect
          x="0.404297"
          y="0.9375"
          width="6.62872"
          height="6.62872"
          rx="2"
          fill={active ? '#78D6007D' : '#D6D6D6'}
        />
        <rect
          x="0.404297"
          y="9.77344"
          width="6.62872"
          height="6.62872"
          rx="2"
          fill={active ? '#78D6007D' : '#D6D6D6'}
        />
        <rect
          x="0.404297"
          y="18.6172"
          width="6.62872"
          height="6.62872"
          rx="2"
          fill={active ? '#78D6007D' : '#D6D6D6'}
        />
      </svg>
    </div>
  );
}
