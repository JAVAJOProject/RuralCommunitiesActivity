import React from 'react';
import './RequestPageNext.css';

export default function RequestPageNext({requestPage, totalPage, click}) {
    return (
        <div className='pageNextA'
            onClick={click}>
            {requestPage === totalPage ? <>&nbsp;</> : <>&gt;&gt;</>}
        </div>
    );
}

