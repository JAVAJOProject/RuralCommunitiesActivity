import React from 'react';
import WroteDataBox from '../../wrote/member/WroteDataBox';
import WroteInfoBox from '../../wrote/member/WroteInfoBox';

export default function MemberWrotePost({ memberId }) {
  return (
    <>
      <WroteInfoBox wroteIdForInfo={memberId} />
      <br />
      <WroteDataBox wroteIdForTable={memberId} />
    </>
  );
}
