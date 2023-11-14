import React from 'react';
import './RecActSellerTable.css';

export default function RecActSellerTable({ title, contents }) {
  const { sTel, sSite, sEmail, sAddr } = contents;
  const info = '';

  return (
    <table className="recActSellerTable">
      <tr>
        <th>{title.tel}</th>
        <td>{sTel}</td>
        <th>{title.site}</th>
        <td>{sSite}</td>
      </tr>
      <tr>
        <th>{title.mail}</th>
        <td>{sEmail}</td>
        <th>{title.location}</th>
        <td>{sAddr}</td>
      </tr>
      <tr>
        <th>{title.info}</th>
        <td colSpan={3}>{info ?? '-'}</td>
      </tr>
    </table>
  );
}
