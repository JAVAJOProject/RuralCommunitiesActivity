import React, { useState } from 'react';
import './RequestPagebar.css';

import RequestPagePre from './RequestPagePre';
import RequestPageNumber from './RequestPageNumber';
import RequestPageNext from './RequestPageNext';

export default function RequestPagebar({ page, ttlPage, handleForPre }) {
  const [nextPage, setNextPage] = useState(false);
  const [isColor, setIsColor] = useState(null);

  const preNumber = () => {
    if (page !== 1) {
      handleForPre(page - 1);
      setIsColor(page - 1);
    }
  };
  const requestNumber = (pageNum) => {
    handleForPre(pageNum);

    setIsColor(pageNum);
  };
  const nextNumber = () => {
    setNextPage(true);

    if (page < ttlPage) {
      handleForPre(page + 1);
      setIsColor(page + 1);
    }
  };
  return (
    <>
      <div className="pageNumberContainerA">
        <div className="pageNumberInnerA">
          <RequestPagePre click={preNumber} requestPage={page} />
          <RequestPageNumber
            click={requestNumber}
            requestPage={page}
            totalPage={ttlPage}
            isColor={isColor}
            setColor={setIsColor}
          />
          <RequestPageNext
            click={nextNumber}
            requestPage={page}
            totalPage={ttlPage}
          />
        </div>
      </div>
    </>
  );
}
