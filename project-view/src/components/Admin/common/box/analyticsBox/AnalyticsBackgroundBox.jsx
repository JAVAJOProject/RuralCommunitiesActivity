import React from 'react';
import './AnalyticsBackgroundBox.css';
import CategoryName from '../../categoryName/CategoryName';

export default function AnalyticsBackgroundBox({
  graphName,
  graphNameSt,
  children,
}) {
  return (
    <div className="analyticsBackgroundBoxA">
      {graphName && (
        <>
          <CategoryName categoryName={graphName} style={graphNameSt} />
          <br />
        </>
      )}
      {children}
    </div>
  );
}
