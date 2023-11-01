import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './SelectTable.css';
import DropDown from '../dropdown/DropDown';

export default function SelectTable  ({ columns, data}) {

const [contextMenu , setContextMenu] = useState({visible: false, x:0, y:0, userid:0});

 const handleOnContext = (event, u_id) => {
    event.preventDefault();
    console.log('우클릭이벤트 : 선택 아이디:',u_id);
    const userid = u_id;
    const x = event.clientX;
    const y = event.clientY;
    setContextMenu({ visible: true, x, y ,userid});
 };

 const handleContextMenuClose = () => {
    setContextMenu({ visible: false, x:0, y:0});
 };

 useEffect(() => {
    window.addEventListener('click', handleContextMenuClose);
    return () => {
        window.removeEventListener('click', handleContextMenuClose);
    };
 }, []);

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
        
        {Array.isArray(data) ? data.map((item, index) => (
            <tr key={index}>
                <td>{item.u_id}</td>
                <td><Link to="/admin/user/experiencer/detail" className='nameHoverA'>
                    <span onContextMenu={(event) => handleOnContext(event, item.u_id)}>{item.u_name}</span></Link></td>
                <td>{item.u_nick}</td>
                <td>{item.u_email}</td>
                <td>{item.u_tel}</td>
                <td>{item.u_reg_date}</td>
            </tr>
        )) : null}
        
    </tbody>
   </table>
   {contextMenu.visible && (
    <DropDown 
    id={contextMenu.userid} 
    x={contextMenu.x}
    y={contextMenu.y} />)}
    </>
    );
}
