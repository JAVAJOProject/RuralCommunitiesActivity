import React from 'react';
import { Outlet } from 'react-router-dom';
import EventMiddleNav from './MiddleNav/EventMiddleNav';
import { EventNav } from './MiddleNav/EventNavContext/EventNav';

export default function RootLayoutEventNav() {
  return (
    <EventNav>
      <EventMiddleNav />
      <Outlet />
    </EventNav>
  );
}
