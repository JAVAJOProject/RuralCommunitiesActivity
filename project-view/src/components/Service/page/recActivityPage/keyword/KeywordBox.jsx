import React, { useContext, useState } from 'react';
import './KeywordBox.css';
import { KeywordAndOrderContext } from '../filterContext/KeywordAndOrder';
import { useSearchParams } from 'react-router-dom/dist';

export default function KeywordBox({ keyword }) {
  const { filterState, handleKeyword } = useContext(KeywordAndOrderContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const keywordUrl = searchParams.get('keyword');
  const handleUrl = (keyword) => {
    if (keyword) {
      searchParams.set('keyword', keyword);
      setSearchParams(searchParams);
    } else {
      searchParams.delete('keyword');
      setSearchParams(searchParams);
    }
  };

  return (
    <div
      className={
        'keywordBox' + (keywordUrl === keyword ? ' keywordBoxActive' : '')
      }
      onClick={() => {
        if (keywordUrl !== keyword) {
          handleKeyword(keyword);
          handleUrl(keyword);
        } else {
          handleKeyword(null);
          handleUrl(null);
        }
      }}
    >
      <p>{'['}</p>
      <p>{keyword}</p>
      <p>{']'}</p>
    </div>
  );
}
