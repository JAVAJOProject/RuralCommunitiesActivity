import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SelectTable.css';
import DropDown from '../dropdown/DropDown';

export default function SelectTable({ columns, data }) {
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    userid: 0,
  });

  const handleOnContext = (event, u_id) => {
    event.preventDefault();
    console.log('우클릭이벤트 : 선택 아이디:', u_id);

    const userid = u_id;
    const x = event.clientX;
    const y = event.clientY;
    setContextMenu({ visible: true, x, y, userid });
  };

  const handleContextMenuClose = () => {
    setContextMenu({ visible: false, x: 0, y: 0 });
  };

  useEffect(() => {
    window.addEventListener('click', handleContextMenuClose);
    return () => {
      window.removeEventListener('click', handleContextMenuClose);
    };
  }, []);

  const navigate = useNavigate();

  const handleLink = (event, u_id) => {
    const link = `/admin/user/experiencer/detail/${u_id}`;
    navigate(link);
  };

  return (
    <>
      <table className="selectTableA">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.accessor}>{column.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.u_id}</td>
                <td
                  onClick={(event) => handleLink(event, item.u_id)}
                  className="nameHoverA"
                >
                  <span
                    onContextMenu={(event) => handleOnContext(event, item.u_id)}
                  >
                    {item.u_name}
                  </span>
                </td>
                <td>{item.u_nick}</td>
                <td>{item.u_email}</td>
                <td>{item.u_tel}</td>
                <td>{item.u_reg_date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">검색결과가 없습니다</td>
            </tr>
          )}
        </tbody>
      </table>
      {contextMenu.visible && (
        <DropDown id={contextMenu.userid} x={contextMenu.x} y={contextMenu.y} />
      )}
    </>
  );
}
