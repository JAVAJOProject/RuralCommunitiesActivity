import React from 'react';
import { Link } from 'react-router-dom';
import './AdminLogoutBtn.css';

export default function AdminLogoutBtn({ text, link }) {
  return (
    <div className="adminLogoutBtnBox">
      <Link to={link}>
        <p className="adminLogoutBtnText">{text}</p>
      </Link>
    </div>
  );
}
