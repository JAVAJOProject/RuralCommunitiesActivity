import React, { useState } from 'react';
import './MenuSetBox.css';
import DetailMenu from './DetailMenu';

export default function MenuSetBox({ detailMenu }) {
  const [className, setClassName] = useState('menuSetBox');

  const { menuId, content } = detailMenu;

  // const handleHoverStyle = () => {
  //   const classes =
  //     hoverState === menuNo ? `menuSetBox ${hoverStyle}` : 'menuSetBox';
  //   setClassName(classes);
  // };

  return (
    <div className={className}>
      {content.map((menu) => (
        <DetailMenu
          key={menu.text}
          detailMenuName={menu.text}
          link={menu.link}
        />
      ))}
    </div>
  );
}
