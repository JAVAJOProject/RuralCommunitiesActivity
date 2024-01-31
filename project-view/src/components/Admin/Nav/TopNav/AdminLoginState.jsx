import React from 'react';
import './AdminLoginState.css';

export default function AdminLoginState({ text }) {
  return (
    <div className="adminLoginStateBox">
      <p className="adminLoginStateText">{text}</p>
    </div>
  );
}
