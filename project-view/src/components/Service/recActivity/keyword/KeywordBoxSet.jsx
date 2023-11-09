import React from 'react';
import './KeywordBoxSet.css';
import KeywordBox from './KeywordBox';

export default function KeywordBoxSet({ keywords }) {
  return (
    <div className="keywordBoxSet">
      {keywords?.length > 0 &&
        keywords.map((keyword) => (
          <KeywordBox key={keyword.recAKeywordId} keyword={keyword} />
        ))}
    </div>
  );
}
