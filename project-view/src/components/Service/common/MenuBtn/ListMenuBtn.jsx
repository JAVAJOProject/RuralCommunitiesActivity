import React from 'react';

const offColor = '#D6D6D6';

export default function ListMenuBtn({ onColor, isOn }) {
  const color = isOn ? onColor : offColor;

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="25"
        viewBox="0 0 26 25"
        fill="none"
      >
        <rect
          x="8.83789"
          width="16.3508"
          height="6.62872"
          rx="2"
          fill={color}
        />
        <rect
          x="8.83789"
          y="8.83594"
          width="16.3508"
          height="6.62872"
          rx="2"
          fill={color}
        />
        <rect
          x="8.83789"
          y="17.6797"
          width="16.3508"
          height="6.62872"
          rx="2"
          fill={color}
        />
        <rect width="6.62872" height="6.62872" rx="2" fill={color} />
        <rect
          y="8.83594"
          width="6.62872"
          height="6.62872"
          rx="2"
          fill={color}
        />
        <rect
          y="17.6797"
          width="6.62872"
          height="6.62872"
          rx="2"
          fill={color}
        />
      </svg>
    </div>
  );
}
