import React, { useRef, useState } from 'react';
import './UserInfoInputFileBtn.css';

export default function UserInfoInputFileBtn({ btnText }) {
  const fileRef = useRef(null);
  const fileBtnRef = useRef(null);

  const [inputDataFile, setInputDataFile] = useState({
    file: null,
    fileName: '',
  });

  const handleClick = () => {
    fileRef?.current?.click();
  };
  const handleChange = (e) => {
    setInputDataFile({
      file: e.target.files[0],
      fileName: e.target.files[0].name,
    });
  };

  return (
    <div className="userInfoInputFileBtn">
      <input
        ref={fileBtnRef}
        type="button"
        value={btnText}
        onClick={handleClick}
      />
      <input
        ref={fileRef}
        type="file"
        name="files"
        accept="image/*"
        onChange={handleChange}
        style={{ display: 'none' }}
      />
      <p>
        {inputDataFile.fileName && inputDataFile.fileName.length > 13
          ? inputDataFile.fileName.substr(0, 13) + '...'
          : inputDataFile.fileName}
        {inputDataFile.file && (
          <div
            onClick={() => {
              setInputDataFile({ file: null, fileName: '' });
            }}
          >
            x
          </div>
        )}
      </p>
    </div>
  );
}
