import React from 'react';
import BoardFormBackgroundBox from './BoardFormBackgroundBox';
import FormInnerBox from './FormInnerBox';

export default function BoardFormBox({clipColor,formType,formName, children}) {
    return (
        <BoardFormBackgroundBox clipColor={clipColor} formType={formType}>
            <FormInnerBox formType={formType} formName={formName} /><br />
            <FormInnerBox >
                {children}
            </FormInnerBox>
        </BoardFormBackgroundBox>
    );
}

