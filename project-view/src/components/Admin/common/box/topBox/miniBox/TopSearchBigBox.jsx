import React from 'react';
import './TopSearchBigBox.css';

import TopBackgroundBox from './TopBackgroundBox';
import TopInnerBox from './TopInnerBox';
import TopSearchLabel from './TopSearchLabel';

export default function TopSearchBigBox({categoryName,searchNameData,children}) {
    return (
        <TopBackgroundBox category={categoryName} backstyle={{height: '18rem'}}>
            <TopInnerBox innerStyle={{height: '12.5rem'}}>
                <TopSearchLabel labelName={searchNameData} labelStyle={{textAlign: 'left'}} />
                {children}
            </TopInnerBox>
        </TopBackgroundBox>
    );
}

