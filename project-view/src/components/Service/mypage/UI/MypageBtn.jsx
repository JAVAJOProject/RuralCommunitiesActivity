import React from 'react';
import './MypageBtn.css';
import { useNavigate } from 'react-router-dom';

export default function MypageBtn({ text, link, type, handleDelete }) {
  const navigate = useNavigate();

  const classes = ['mypageBtn'];
  switch (type) {
    case 'regist':
      classes.push('mypageServiceRegistBtn');
  }

  return (
    <div
      className={classes.join(' ')}
      onClick={
        handleDelete
          ? handleDelete
          : () => {
              navigate(link);
              window.scrollTo(0, 0);
            }
      }
    >
      <p>{text}</p>
    </div>
  );
}
