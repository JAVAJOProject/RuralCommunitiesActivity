import React, { useContext, useState } from 'react';
import './RecActOrderText.css';
import { KeywordAndOrderContext } from '../filterContext/KeywordAndOrder';
import { useSearchParams } from 'react-router-dom/dist';

export default function RecActOrderText({ order }) {
  const { filterState, handleOrder } = useContext(KeywordAndOrderContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const orderUrl = searchParams.get('order');
  const handleUrl = () => {
    searchParams.set('order', order.requestOrderType);
    setSearchParams(searchParams);
  };

  return (
    <div
      className={
        orderUrl === order.requestOrderType ? 'recActOrderTextActive' : 'recActOrderText'
      }
      onClick={() => {
        handleOrder(order.requestOrderType);
        handleUrl();
      }}
    >
      <p>{order.text}</p>
    </div>
  );
}
