import React from 'react';
import DetailYellowBoxUI from '../UI/DetailYellowBoxUI';

export default function EventContentBox({ content }) {
  const { contentText } = content;
  return (
    contentText && (
      <DetailYellowBoxUI
        style={{
          whiteSpace: 'pre-line',
          paddingTop: '3.5rem',
          paddingBottom: '3.5rem',
        }}
      >
        <p
          style={{
            fontFamily: 'SUITE Variable',
            fontSize: '1rem',
            fontWeight: '500',
            lineHeight: '1.6rem',
            width: '48.6875rem',
          }}
        >
          {contentText}
        </p>
      </DetailYellowBoxUI>
    )
  );
}
