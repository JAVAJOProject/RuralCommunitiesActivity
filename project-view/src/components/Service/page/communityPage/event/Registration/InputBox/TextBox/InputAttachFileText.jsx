import React from 'react';
import './InputAttachFileText.css';

export default function InputAttachFileText({ file, handleDelete }) {
  const fileName =
    file.fileName.length > 13
      ? file.fileName.substr(0, 13) + '...'
      : file.fileName;
  return (
    <div className="inputAttachFileText">
      <p>{fileName}</p>
      <div onClick={() => handleDelete(file)}>x</div>
    </div>
  );
}
