import React from 'react';
import './TopInnerBox.css';

export default function TopInnerBox({innerStyle , children}) {
    return (
        <div className="TopLinnerBoxA" style={innerStyle}>
            {children}
        </div>
    );
}

