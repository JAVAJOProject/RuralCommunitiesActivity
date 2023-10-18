import React from 'react';
import './RecActSellerInfoBox.css';
import RecActSellerInfoTitle from './RecActSellerInfoTitle';
import RecActSellerTable from './RecActSellerTable';

export default function RecActSellerInfoBox({ sellerInfo, contents }) {
  const { title, content } = sellerInfo;

  return (
    <div className="recActSellerInfoBox">
      <RecActSellerInfoTitle title={title} />
      <hr />
      <RecActSellerTable title={content} contents={contents} />
    </div>
  );
}
