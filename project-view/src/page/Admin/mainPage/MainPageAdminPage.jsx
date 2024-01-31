import React from 'react';
import ReservationStatus from '../../../components/Admin/container/allBox/dashboard/ReservationStatus';
import InquiryStatus from '../../../components/Admin/container/allBox/dashboard/InquiryStatus';
import AnalyticsGraph from '../../../components/Admin/container/allBox/dashboard/AnalyticsGraph';
import MainStatus from '../../../components/Admin/container/allBox/dashboard/MainStatus';
import DashboardImg from '../../../components/Admin/container/allBox/dashboard/DashboardImg';

export default function MainPageAdminPage() {
  return (
    <div>
      <MainStatus />
      <DashboardImg />
      <ReservationStatus />
      <InquiryStatus />
      <AnalyticsGraph />
    </div>
  );
}
