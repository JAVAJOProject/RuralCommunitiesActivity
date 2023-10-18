import React from 'react';

const offColor = '#D6D6D6';

export default function CardMenuBtn({ onColor, isOn }) {
  const color = isOn ? onColor : offColor;

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
      >
        <rect
          x="0.311523"
          width="10.7108"
          height="10.7108"
          rx="2"
          fill={color}
        />
        <rect
          x="13.9062"
          width="10.7108"
          height="10.7108"
          rx="2"
          fill={color}
        />
        <rect
          x="0.311523"
          y="13.5938"
          width="10.7108"
          height="10.7108"
          rx="2"
          fill={color}
        />
        <rect
          x="13.9062"
          y="13.5938"
          width="10.7108"
          height="10.7108"
          rx="2"
          fill={color}
        />
      </svg>
    </div>
  );
}
