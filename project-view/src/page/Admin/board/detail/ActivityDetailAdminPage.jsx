import React from 'react';
import { useParams } from 'react-router-dom';
import ActivityDetailForm from '../../../../components/Admin/container/detail/board/TotalActivity/ActivityDetailForm';

export default function ActivityDetailAdminPage() {
  const { id } = useParams();
  console.log('detail로 넘어온 id:', id);

  return (
    <div>
      <ActivityDetailForm aId={id} />
    </div>
  );
}
