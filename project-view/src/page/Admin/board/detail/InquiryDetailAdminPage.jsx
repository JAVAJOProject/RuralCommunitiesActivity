import React from 'react';
import { useParams } from 'react-router-dom';
import InquiryDetailForm from '../../../../components/Admin/container/detail/board/InquiryDetailForm';

export default function InquiryDetailAdminPage() {
  const { id } = useParams();
  console.log('detail로 넘어온 id:', id);

  return <InquiryDetailForm postId={id} />;
}
