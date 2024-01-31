import React, { useState } from 'react';

import AdminSearchBox from '../../searchBox/member/AdminSearchBox';
import AdminBottomBox from '../../bottomBox/member/AdminBottomBox';

export default function AdminBox() {
  const [adminSearchData, setAdminSearchData] = useState([]);
  const [adminListCnt, setAdminListCnt] = useState(0);

  //검색데이터를 출력할 bottom 으로 전달
  const handleCallbackForAdminList = (data, cnt) => {
    setAdminSearchData(data);
    setAdminListCnt(cnt);
  };

  return (
    <div>
      <AdminSearchBox searchData={handleCallbackForAdminList} />
      <br />
      <AdminBottomBox
        tableMemberData={adminSearchData}
        resulltCnt={adminListCnt}
      />
    </div>
  );
}
