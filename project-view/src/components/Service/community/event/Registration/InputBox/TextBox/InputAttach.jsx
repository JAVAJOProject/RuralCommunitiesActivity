import React, { useRef } from 'react';
import './InputAttach.css';
import InputAttachFileText from './InputAttachFileText';

export default function InputAttach({
  inputName,
  inputId,
  isRequired,
  fileBtnText,
  fileLimitText,
  inputDataFiles,
  updateInputDataFiles,
}) {
  const fileRef = useRef(null);
  const fileBtnRef = useRef(null);
  const handleClick = () => {
    if (inputDataFiles.length < 5) {
      fileRef?.current?.click();
    }
  };
  const handleChange = (e) => {
    const targetFiles = e.target.files;
    const targetFilesArray = Array.from(targetFiles);
    if (inputDataFiles.length < 5) {
      fileBtnRef.current.disabled = false;
      if (targetFilesArray.length + inputDataFiles.length <= 5) {
        const selectedFiles = targetFilesArray.map((file) => {
          const fileName = file.name;
          // const url = URL.createObjectURL(file);
          // URL.revokeObjectURL(file);
          return { fileName, file };
        });
        updateInputDataFiles((draft) => {
          draft.push(...selectedFiles);
        });
      }
    } else {
      fileBtnRef.current.disabled = true;
    }
  };
  const handleDelete = (file) => {
    // updateInputDataFiles((draft) => {
    //   draft = draft.filter((img) => img !== file);
    // });
    const updatedFiles = inputDataFiles.filter((img) => img !== file);
    updateInputDataFiles(updatedFiles);
    if (updatedFiles.length < 5) {
      fileBtnRef.current.disabled = false;
    }
  };

  return (
    <div style={{ width: '46.807rem' }}>
      <div className="inputAttach">
        <input
          ref={fileBtnRef}
          className="inputAttachBtn"
          type="button"
          value={fileBtnText}
          onClick={handleClick}
        />
        <input
          ref={fileRef}
          type="file"
          name={inputName}
          id={inputId}
          accept="image/*"
          required={isRequired}
          onChange={handleChange}
          style={{ display: 'none' }}
          value={inputDataFiles.map((item) => item.file)}
          multiple
        />
        <p>{fileLimitText}</p>
      </div>
      <div className="inputAttachFileTextBox">
        <div>
          {inputDataFiles
            .filter((_, index) => index < 3)
            .map((item) => (
              <InputAttachFileText
                key={item.file}
                file={item}
                handleDelete={handleDelete}
              />
            ))}
        </div>
        <div>
          {inputDataFiles
            .filter((_, index) => index >= 3)
            .map((item) => (
              <InputAttachFileText
                key={item.file}
                file={item}
                handleDelete={handleDelete}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
