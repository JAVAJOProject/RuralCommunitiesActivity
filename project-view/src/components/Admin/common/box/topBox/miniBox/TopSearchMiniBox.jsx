import React from 'react';
import './TopSearchMiniBox.css';

import TopBackgroundBox from './TopBackgroundBox';
import TopInnerBox from './TopInnerBox';
import TopSearchLabel from './TopSearchLabel';

export default function TopSearchMiniBox({categoryName, searchNameData, 
                                        children, backstyle, innerStyle}) {
    
    return (
        <TopBackgroundBox category={categoryName}>
            <TopInnerBox>
                <TopSearchLabel labelName={searchNameData} />
                {children}
            </TopInnerBox>
        </TopBackgroundBox>
    );
}

