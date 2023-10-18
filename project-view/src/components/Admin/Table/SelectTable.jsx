import React from 'react';
import './SelectTable.css';

export default function SelectTable  ({ columns, data}) {
       
    return (
   <table className="selectTable">
    <thead>
        <tr>
            {columns.map((column) => (
                <th key={column.accessor}>{column.Header}</th>

            ))}
        </tr>
    </thead>
    <tbody>
        
        {data.map((item, index) => (
            <tr key={index}>
                <td>{item.aTheme}</td>
                <td>{item.aTitle}</td>
                <td>{item.aStartDate}</td>
                <td>{item.aEndDate}</td>
                <td>{item.aPeople}</td>
                <td>{item.aCharge}</td>
                <td>{item.aSeller}</td>
                <td>{item.aCreatedDate}</td>
            </tr>
        ))}
    </tbody>
   </table>
    );
}

// import React from "react";

// function Table({ columns, data }) {
//   return (
//     <table>
//       <thead>
//         <tr>
//           {columns.map((column) => (
//             <th key={column}>{column}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map(({ name, email, phone }) => (
//           <tr key={name + email + phone}>
//             <td>{name}</td>
//             <td>{email}</td>
//             <td>{phone}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }
