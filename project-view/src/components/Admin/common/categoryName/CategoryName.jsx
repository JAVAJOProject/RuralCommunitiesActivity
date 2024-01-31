import React from 'react';
import './CategoryName.css';

export default function CategoryName({ style, categoryName }) {
  return (
    <div className="categoryNameA" style={style}>
      {categoryName}
    </div>
  );
}
