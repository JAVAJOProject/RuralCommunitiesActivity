import React, { useState } from 'react';

import MemberSearchBox from '../../searchBox/member/MemberSearchBox';
import MemberBottomBox from '../../bottomBox/member/MemberBottomBox';

export default function MemberBox() {
  const [memberSearchData, setMemberSearchData] = useState([]);
  const [cnt, setCnt] = useState(0);
  const [requestPageForMem, setRequestPageForMem] = useState(1);
  const [totalPageForMem, setTotalPageForMem] = useState(1);

  const handleCallbackForMemberList = (data, postCnt, ttlPage) => {
    setMemberSearchData(data);
    setCnt(postCnt);
    setTotalPageForMem(ttlPage);
  };

  const handleCallbackForPage = (prePage) => {
    setRequestPageForMem(prePage);
  };

  return (
    <div>
      <MemberSearchBox
        searchData={handleCallbackForMemberList}
        requestPage={requestPageForMem}
      />
      <br />
      <MemberBottomBox
        pageHandler={handleCallbackForPage}
        tableMemberData={memberSearchData}
        resulltCnt={cnt}
        requestPage={requestPageForMem}
        totalPage={totalPageForMem}
      />
    </div>
  );
}
