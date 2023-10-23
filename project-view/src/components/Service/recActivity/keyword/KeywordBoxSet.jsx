import React from 'react';
import './KeywordBoxSet.css'
import KeywordBox from './KeywordBox';

export default function KeywordBoxSet({ keywords }) {
  return (
    <div className='keywordBoxSet'>
      {keywords.map((keyword) => (
        <KeywordBox keyword={keyword} />
      ))}
    </div>
  );
}
