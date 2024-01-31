import React from 'react';

import BottomBackgroundBox from './BottomBackgroundBox';
import WroteTable from '../../table/WroteTable';

export default function BottomWroteBox({
  cnt,
  columnsForWrotePost,
  dataForWrotePost,
}) {
  return (
    <BottomBackgroundBox searchCnt={cnt ?? 1}>
      <WroteTable columns={columnsForWrotePost} data={dataForWrotePost} />
    </BottomBackgroundBox>
  );
}
