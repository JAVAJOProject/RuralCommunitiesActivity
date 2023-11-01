import React from 'react';

export default function TotalActivityThemeBtn({ isOn }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <g filter="url(#filter0_d_594_957)">
          <rect
            width="10.5767"
            height="10.5767"
            rx="2"
            fill={isOn ? '#FFD56A' : '#D6D6D6'}
          />
          <rect
            x="13.4231"
            width="10.5767"
            height="10.5767"
            rx="2"
            fill={isOn ? '#FFD56A' : '#D6D6D6'}
          />
          <rect
            y="13.4258"
            width="10.5767"
            height="10.5767"
            rx="2"
            fill={isOn ? '#FFD56A' : '#D6D6D6'}
          />
          <rect
            x="13.4231"
            y="13.4258"
            width="10.5767"
            height="10.5767"
            rx="2"
            fill={isOn ? '#FFD56A' : '#D6D6D6'}
          />
        </g>
        {!isOn && (
          <defs>
            <filter
              id="filter0_d_594_957"
              x="0"
              y="0"
              width="27.9998"
              height="28.002"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="2" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_594_957"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_594_957"
                result="shape"
              />
            </filter>
          </defs>
        )}
      </svg>
    </div>
  );
}
