import React from 'react';
import { useParams } from 'react-router-dom';
import MemberUpdate from '../../../../components/Admin/container/update/member/MemberUpdateForm';

export default function MemberUpdateAdminPage() {
  const { id } = useParams();
  console.log('detail에서 넘어온 id:', id);

  return (
    <div>
      <MemberUpdate memberId={id} />
    </div>
  );
}
