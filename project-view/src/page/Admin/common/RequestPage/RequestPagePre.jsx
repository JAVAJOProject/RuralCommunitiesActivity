import React from 'react';
import './RequestPagePre.css';

export default function RequestPagePre({requestPage, click}) {
    return (
        <div className='prePageA'
        onClick={click}>
            {requestPage === 1 ? <>&nbsp;</> : <>&lt;&lt;</>}
        </div>
    );
}

