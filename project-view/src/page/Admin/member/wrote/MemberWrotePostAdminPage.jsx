import React from 'react';
import { useParams } from 'react-router-dom';

import WroteInfoBox from '../../../../components/Admin/container/wrote/member/WroteInfoBox';
import WroteDataBox from '../../../../components/Admin/container/wrote/member/WroteDataBox';

export default function MemberWrotePostAdminPage() {
  const { id } = useParams();
  console.log('dropdown에서 작성글조회로 넘어온 id:', id);
  const wroteId = parseInt(id, 10);

  return (
    <div>
      <WroteInfoBox wroteIdForInfo={wroteId} />
      <br />
      <WroteDataBox wroteIdForTable={wroteId} />
    </div>
  );
}
