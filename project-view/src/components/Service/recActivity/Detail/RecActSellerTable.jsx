import React from 'react';
import './RecActSellerTable.css';

export default function RecActSellerTable({ title, contents }) {
  const { tel, site, mail, location, info } = contents;

  return (
    <table className="recActSellerTable">
      <tr>
        <th>{title.tel}</th>
        <td>{tel}</td>
        <th>{title.site}</th>
        <td>{site}</td>
      </tr>
      <tr>
        <th>{title.mail}</th>
        <td>{mail}</td>
        <th>{title.location}</th>
        <td>{location}</td>
      </tr>
      <tr>
        <th>{title.info}</th>
        <td colSpan={3}>{info}</td>
      </tr>
    </table>
  );
}
