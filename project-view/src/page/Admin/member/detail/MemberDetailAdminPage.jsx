import React from 'react';
import { useParams } from 'react-router-dom';
import MemberDetailForm from '../../../../components/Admin/container/detail/member/MemberDetailForm';

export default function MemberDetailAdminPage() {
  const { id } = useParams();
  console.log('dropDown에서 넘어온 id:', id);

  return (
    <div>
      <MemberDetailForm uId={id} />
    </div>
  );
}
