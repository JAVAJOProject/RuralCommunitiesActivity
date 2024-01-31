import React from 'react';
import './GraphBar.css';

export default function GraphBar({ graphData }) {
  return (
    <>
      {graphData &&
        graphData.map((item, index) => (
          <div
            key={index + 1}
            className="graphBarBoxA"
            style={{
              paddingTop: `${((100 - item.total) / 100) * 30}%`,
            }}
          >
            <div
              className="graphBarA"
              style={
                (index + 1) % 4 === 1
                  ? {
                      background:
                        'radial-gradient(89.6% 89.61% at 48.57% 10.4%, #D8E2FF 0%, rgba(231, 237, 255, 0.55) 85.22%)',
                    } //sky
                  : (index + 1) % 4 === 2
                  ? {
                      background:
                        'radial-gradient(108.75% 86.18% at 50% 13.82%, #055EB6 5.73%, rgba(5, 94, 182, 0.62) 100%)',
                    } //blue
                  : (index + 1) % 4 === 3
                  ? {
                      background:
                        'radial-gradient(92.05% 92.06% at 48.57% 7.95%, #FFCC48 0%, rgba(255, 204, 72, 0.49) 100%)',
                    } //yellow
                  : (index + 1) % 4 === 0
                  ? {
                      background:
                        'radial-gradient(86.36% 86.38% at 48.57% 13.64%, #FFCED7 0%, rgba(253, 247, 248, 0.99) 100%)',
                    } //pink
                  : {
                      background:
                        'radial-gradient(108.75% 86.18% at 50% 13.82%, #055EB6 5.73%, rgba(5, 94, 182, 0.62) 100%)',
                    }
              }
            >
              <p>{item.total}</p>
            </div>
          </div>
        ))}
    </>
  );
}
