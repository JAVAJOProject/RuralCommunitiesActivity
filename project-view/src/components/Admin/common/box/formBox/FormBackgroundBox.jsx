import React, { useEffect, useState } from 'react';
import './FormBackgroundBox.css';
import UpdateClip from '../../../../../view_img/Admin/common/clip.png';
import Insertclip from '../../../../../view_img/Admin/common/infoInsertClip.png';

export default function FormBackgroundBox({ clipColor, children }) {
  const [clipSrc, setClipSrc] = useState('');

  useEffect(() => {
    switch (clipColor) {
      case 'yellow':
        setClipSrc(UpdateClip);
        break;
      case 'green':
        setClipSrc(Insertclip);
        break;
      default:
        setClipSrc(UpdateClip);
    }
  }, [clipColor]);

  return (
    <div className="formBackgroundBoxA">
      <img src={clipSrc} className="clipStyleA" alt="clip" />
      {children}
    </div>
  );
}
