import React from 'react';
import './DetailMenu.css';
import { Link } from 'react-router-dom';

export default function DetailMenu({ detailMenuName, link }) {
  return (
    <Link className='detailMenuBoxLink' to={link}>
      <div className="detailMenuBox">
        <div className="detailMenuText">{detailMenuName}</div>
      </div>
    </Link>
  );
}
