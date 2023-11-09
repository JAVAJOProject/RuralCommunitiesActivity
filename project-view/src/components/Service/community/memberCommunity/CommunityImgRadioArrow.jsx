import React from 'react';
import './CommunityImgRadioArrow.css';

export default function CommunityImgRadioArrow({
  type,
  onClick,
  style,
  className,
}) {
  const classes = [className, 'communityImgRadioArrow'].join(' ');
  const styles = { ...style };
  if (type === 'prev') {
    styles.marginLeft = '-1.5rem';
  } else {
    styles.marginRight = '-1.5rem';
  }

  return (
    onClick && (
      <button className={classes} style={styles} onClick={onClick}>
        {type === 'prev' ? '<' : '>'}
      </button>
    )
  );
}
