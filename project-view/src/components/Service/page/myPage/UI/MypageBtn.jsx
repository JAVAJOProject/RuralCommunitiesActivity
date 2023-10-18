import React from 'react';
import './MypageBtn.css';
import { useNavigate } from 'react-router-dom';

export default function MypageBtn({ text, link, type }) {
  const navigate = useNavigate();

  const classes = ['mypageBtn'];
  switch (type) {
    case 'regist':
      classes.push('mypageServiceRegistBtn');
  }

  return (
    <div
      className={classes.join(' ')}
      onClick={() => {
        navigate(link);
      }}
    >
      <p>{text}</p>
    </div>
  );
}
