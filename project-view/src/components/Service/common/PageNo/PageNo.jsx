import React from 'react';
import './PageNo.css';

export default function PageNo({
  text,
  startPageNo,
  endPageNo,
  active,
  handlePageNo,
}) {
  let request;
  if (startPageNo) {
    request = startPageNo - 1;
  } else if (endPageNo) {
    request = endPageNo + 1;
  } else {
    request = +text;
  }
  const handleRequestPageNo = () => {
    handlePageNo(request);
  };

  return (
    <p
      className={'pageNo' + (active ? ' activePageNo' : '')}
      onClick={handleRequestPageNo}
    >
      {text}
    </p>
  );
}
