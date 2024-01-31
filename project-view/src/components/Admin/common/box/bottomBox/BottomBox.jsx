import React from 'react';
import BottomBackgroundBox from './BottomBackgroundBox';
import BottomInnerBox from './BottomInnerBox';

export default function BottomBox({ searchCnt, children }) {
  return (
    <div>
      <BottomBackgroundBox searchCnt={searchCnt}>
        <BottomInnerBox>{children}</BottomInnerBox>
      </BottomBackgroundBox>
    </div>
  );
}
