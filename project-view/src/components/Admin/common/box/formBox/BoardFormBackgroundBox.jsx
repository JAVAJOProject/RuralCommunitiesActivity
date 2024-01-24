import React,{useEffect, useState} from 'react';
import './BoardFormBackgroundBox.css';
import UpdateClip from '../../../../../view_img/Admin/common/clip.png';
import Insertclip from '../../../../../view_img/Admin/common/infoInsertClip.png';


export default function BoardFormBackgroundBox({ clipColor,formType, children}) {

    const [clipSrc, setClipSrc] = useState('');

    useEffect(() => {
    switch(clipColor){
        case 'yellow' : setClipSrc(UpdateClip); break;
        case 'green' : setClipSrc(Insertclip); break;
        default : setClipSrc(UpdateClip);
    };
    },[clipColor])

    return (
        formType ?
        (<div className='boardformBackgroundBoxA'>
        <img src={clipSrc} className='boardclipStyleA' alt='clip'/>
        <div className='boardNameA' style={{background: clipColor === 'yellow'? '#FFCC48' : '#0FC016'}} ><p>{formType}</p></div>
        {children}
        </div>
        ):(
        <div className='formBackgroundBoxA'>
        <img src={clipSrc} className='clipStyleA' alt='clip'/>
        {children}
        </div>)
    );
}

