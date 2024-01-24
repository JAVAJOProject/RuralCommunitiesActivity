import React from 'react';
import './AdminDashboardNav.css';
import { Link } from 'react-router-dom';

export default function AdminDashboardNav({ text, link }) {
  return (
    <div className="adminDashboardNavBox">
      <Link to={link}>
        <p className="adminDashboardNavText">{text}</p>
      </Link>
    </div>
  );
}
